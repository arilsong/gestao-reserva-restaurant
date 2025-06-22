import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

import { Container } from './style';
import StatsCards from '@/components/dashboard/StatsCards/StatsCards';
import ReservationsTable from '@/components/dashboard/ReservationsTable/ReservationsTable';
import RecentReviews from '@/components/dashboard/RecentReviews/RecentReviews';
import EditProfileOverlay from '@/components/dashboard/EditProfile/EditProfile';

interface Reservation {
  id: number;
  customerName: string;
  time: string;
  guests: number;
  status: string;
  phone: string;
  specialRequests: string;
}

interface RestaurantInfo {
  name: string;
  cuisine: string;
  rating: number;
  totalReviews: number;
  location: string;
}

interface Stats {
  totalReservations: number;
  confirmedReservations: number;
  pendingReservations: number;
  cancelledReservations: number;
  revenue: string;
  averagePartySize: number;
}

const MainDashBoard: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);


  const todayStats = {
    totalReservations: 15,
    confirmedReservations: 12,
    pendingReservations: 2,
    cancelledReservations: 1,
  };

  const todayReservations = [
    {
      id: 1,
      customerName: "Maria Silva",
      time: "19:00",
      guests: 2,
      status: "confirmada",
      phone: "(11) 99999-9999",
      specialRequests: "Mesa próxima à janela"
    },
    {
      id: 2,
      customerName: "João Santos",
      time: "19:30",
      guests: 4,
      status: "pendente",
      phone: "(11) 88888-8888",
      specialRequests: ""
    },
    {
      id: 3,
      customerName: "Ana Costa",
      time: "20:00",
      guests: 3,
      status: "confirmada",
      phone: "(11) 77777-7777",
      specialRequests: "Aniversário - bolo"
    },
    {
      id: 4,
      customerName: "Carlos Lima",
      time: "20:30",
      guests: 2,
      status: "check-in",
      phone: "(11) 66666-6666",
      specialRequests: ""
    }
  ];

  const handleStatusChange = (reservationId: number, newStatus: string) => {
    toast({
      title: "Status atualizado",
      description: `Reserva ${newStatus} com sucesso.`,
    });
  };
  return (
    <Container>
      <div className="main-content">
        <main className="main">
          <StatsCards stats={todayStats} />
          <ReservationsTable
            reservations={todayReservations}
            selectedDate={selectedDate}
            onStatusChange={handleStatusChange}
          />
          <RecentReviews />
        </main>
      </div>
    </Container>
  );
};

export default MainDashBoard;