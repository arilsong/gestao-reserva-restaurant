import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Container } from './style';
import AvaliacaoOverlay from '@/components/AvaliacaoOverlay/AvaliacaoOverlay';
import FormularioReservaOverlay from '@/components/FormularioReservaOverlay/FormularioReservaOverlay';
import ReservationSidebar from '@/components/PerfilRestaurante/ReservationSidebar/ReservationSidebar';
import RestaurantAbout from '@/components/PerfilRestaurante/RestaurantAbout/RestaurantAbout';
import RestaurantHero from '@/components/PerfilRestaurante/RestaurantHero/RestaurantHero';
import RestaurantHours from '@/components/PerfilRestaurante/RestaurantHours/RestaurantHours';
import RestaurantReviews from '@/components/PerfilRestaurante/RestaurantReviews/RestaurantReviews';
import { RESTAURANT_ENDPOINTS } from '@/service/api/endpoints';
import axios from 'axios';
import { Restaurant } from '@/interfaces/restaurant';
import { UUID } from 'crypto';
import { Availability } from '@/interfaces/availability';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

interface Table {
  id: string;
  number: number;
  capacity: number;
  available: boolean;
  location?: string;
}

const PerfilRestaurante: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: UUID }>();
  const { toast } = useToast();
  const [showAvaliacaoOverlay, setShowAvaliacaoOverlay] = useState(false);
  const [showReservaOverlay, setShowReservaOverlay] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0],
  );
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedGuests, setSelectedGuests] = useState<number>(2);
  const [selectedTableId, setSelectedTableId] = useState<string>(''); // Novo estado
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [tables, setTables] = useState<Table[]>([]); // Novo estado para as mesas

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!id) {
        console.error('ID do restaurante não fornecido');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(RESTAURANT_ENDPOINTS.GET(id));
        const r = response.data;

        const restaurant: Restaurant = {
          id: r.id,
          name: r.name,
          phone: r.phone || '',
          email: r.email || '',
          description: r.description || '',
          availabilitys: r.availability || [],
          availableHours: r.availableHours || ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
          cuisine: r.cuisine || 'Diverso',
          rating: r.reviews?.length
            ? (r.reviews.reduce((sum: number, review: any) => sum + review.classification, 0) / r.reviews.length).toFixed(1)
            : 0,
          location: r.address || '',
          image: r.photos?.[0] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
          priceRange: r.price_range || '€€',
          availableTables: r.tables?.filter((t: any) => t.available).length ?? 0,
          reviews: r.reviews || [],
          hours: undefined
        };

        setRestaurant(restaurant);

        // Processar as mesas do restaurante
        if (r.tables && Array.isArray(r.tables)) {
          const processedTables: Table[] = r.tables.map((table: any) => ({
            id: table.id,
            number: table.number,
            capacity: table.capacity,
            available: table.available,
            location: table.location
          }));
          setTables(processedTables);
        } 

       
        
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível carregar os dados do restaurante.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [id, toast]);

  // Resetar seleção de mesa quando mudar o número de convidados
  useEffect(() => {
    if (selectedTableId) {
      const selectedTable = tables.find(t => t.id === selectedTableId);
      if (selectedTable && selectedTable.capacity < selectedGuests) {
        setSelectedTableId('');
      }
    }
  }, [selectedGuests, selectedTableId, tables]);

  const handleReserva = () => {
    if (!selectedDate) {
      toast({
        title: 'Data obrigatória',
        description: 'Por favor, selecione uma data para a reserva.',
        variant: 'destructive',
      });
      return;
    }

    if (!selectedTime) {
      toast({
        title: 'Horário obrigatório',
        description: 'Por favor, selecione um horário para a reserva.',
        variant: 'destructive',
      });
      return;
    }

    if (!selectedTableId) {
      toast({
        title: 'Mesa obrigatória',
        description: 'Por favor, selecione uma mesa para a reserva.',
        variant: 'destructive',
      });
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    if (selectedDate < today) {
      toast({
        title: 'Data inválida',
        description: 'Por favor, selecione uma data futura.',
        variant: 'destructive',
      });
      return;
    }

    setShowReservaOverlay(true);
  };

  // Loading state
  if (loading) {
    return (
      <Container>
        <div>Carregando...</div>
      </Container>
    );
  }

  // Error state - restaurant not found
  if (!restaurant) {
    return (
      <Container>
        <header className="header-section">
          <div className="header-content">
            <button className="back-link" onClick={() => navigate('/')}>
              <ArrowLeft className="icon-arrow" />
              Voltar
            </button>
          </div>
        </header>
        <div>Restaurante não encontrado.</div>
      </Container>
    );
  }

  const hours: Record<string, string> = {};
  restaurant.availabilitys?.forEach((a: Availability) => {
    const dayAbbr = a.dayOfWeek;
    const start = new Date(a.start_time).toTimeString().slice(0, 5);
    const end = new Date(a.end_time).toTimeString().slice(0, 5);
    if (dayAbbr) {
      hours[dayAbbr] = `${start} - ${end}`;
    }
  });

  return (
    <Container>
      <header className="header-section">
        <div className="header-content">
          <button className="back-link" onClick={() => navigate('/')}>
            <ArrowLeft className="icon-arrow" />
            Voltar
          </button>
        </div>
      </header>

      <RestaurantHero
        restaurant={restaurant}
        onShowAvaliacaoOverlay={() => setShowAvaliacaoOverlay(true)}
      />
      
      <section className="main-section">
        <div className="restaurant-grid">
          <div className="main-content">
            <RestaurantAbout description={restaurant.description} />
            <RestaurantHours hours={hours}/>
            <RestaurantReviews reviews={restaurant.reviews} />
          </div>
          <div className="sidebar-content">
            <ReservationSidebar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              selectedGuests={selectedGuests}
              setSelectedGuests={setSelectedGuests}
              selectedTableId={selectedTableId}
              setSelectedTableId={setSelectedTableId}
              availableHours={restaurant.availableHours}
              tables={tables}
              onReserva={handleReserva}
              onShowAvaliacaoOverlay={() => setShowAvaliacaoOverlay(true)}
              restaurant={{
                phone: restaurant.phone,
                email: restaurant.email,
              }}
            />
          </div>
        </div>
      </section>

      <AvaliacaoOverlay
        isOpen={showAvaliacaoOverlay}
        onClose={() => setShowAvaliacaoOverlay(false)}
        restaurantName={restaurant.name}
        restaurantImage={restaurant.image}
        restaurantId={restaurant.id}
      />

      <FormularioReservaOverlay
        isOpen={showReservaOverlay}
        onClose={() => setShowReservaOverlay(false)}
        restaurantData={{
          name: restaurant.name,
          date: selectedDate,
          bookingTime: selectedTime,
          guests: selectedGuests,
           tableId: selectedTableId,
          tableNumber: tables.find(t => t.id === selectedTableId)?.number,
        }}
        restaurantId={restaurant.id}
      />
    </Container>
  );
};

export default PerfilRestaurante;