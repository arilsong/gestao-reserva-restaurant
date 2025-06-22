import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Star, MessageSquare, TrendingUp, Search, Filter, Calendar } from 'lucide-react';
import { Container } from './style';
import DashboardHeader from '@/components/dashboard/DashboardHeader/DashboardHeader';
import RestaurantSidebar from '@/components/dashboard/RestaurantSidebar/RestaurantSidebar';

interface Review {
  id: number;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
  hasReply: boolean;
  reply: string;
  status: string;
}

interface RestaurantInfo {
  name: string;
  cuisine: string;
  rating: number;
  totalReviews: number;
}

const RestauranteAvaliacoes: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [ratingFilter, setRatingFilter] = useState<string>('todas');
  const [statusFilter, setStatusFilter] = useState<string>('todas');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<string>('');

  const restaurantInfo: RestaurantInfo = {
    name: 'Bella Vista',
    cuisine: 'Italiana',
    rating: 4.8,
    totalReviews: 324,
  };

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      customerName: 'Maria Silva',
      rating: 5,
      date: '2024-01-15',
      comment: 'Experiência fantástica! A comida estava deliciosa e o atendimento foi impecável. O ambiente é muito aconchegante e romântico. Recomendo especialmente o risotto de camarão.',
      hasReply: false,
      reply: '',
      status: 'pendente',
    },
    {
      id: 2,
      customerName: 'João Santos',
      rating: 4,
      date: '2024-01-14',
      comment: 'Muito bom! A pasta estava perfeita e o vinho recomendado pelo garçom foi excelente. Único ponto negativo foi a demora no atendimento.',
      hasReply: true,
      reply: 'Obrigado pelo feedback, João! Ficamos felizes que tenha gostado da pasta e do vinho. Vamos trabalhar para melhorar a agilidade do nosso atendimento.',
      status: 'respondida',
    },
    {
      id: 3,
      customerName: 'Ana Costa',
      rating: 3,
      date: '2024-01-13',
      comment: 'Experiência mediana. A comida estava boa, mas nada excepcional pelo preço cobrado. O ambiente é agradável.',
      hasReply: false,
      reply: '',
      status: 'pendente',
    },
    {
      id: 4,
      customerName: 'Carlos Lima',
      rating: 2,
      date: '2024-01-12',
      comment: 'Decepcionante. A comida chegou fria e o garçom foi pouco atencioso. Esperava muito mais do restaurante.',
      hasReply: true,
      reply: 'Lamentamos muito pela experiência negativa, Carlos. Gostaríamos de conversar pessoalmente para entender melhor o que aconteceu. Por favor, nos procure.',
      status: 'respondida',
    },
    {
      id: 5,
      customerName: 'Lucia Ferreira',
      rating: 5,
      date: '2024-01-11',
      comment: 'Perfeito! Vim para comemorar meu aniversário e foi tudo maravilhoso. A equipe foi super atenciosa e a sobremesa de cortesia foi um mimo.',
      hasReply: false,
      reply: '',
      status: 'pendente',
    },
  ]);

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'respondida':
        return 'Respondida';
      case 'pendente':
        return '';
      default:
        return '';
    }
  };

  const handleReply = (reviewId: number) => {
    if (!replyText.trim()) {
      toast({
        title: 'Resposta obrigatória',
        description: 'Digite uma resposta antes de enviar.',
        variant: 'destructive',
      });
      return;
    }

    setReviews((prev) =>
      prev.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              hasReply: true,
              reply: replyText,
              status: 'respondida',
            }
          : review
      )
    );

    setReplyingTo(null);
    setReplyText('');

    toast({
      title: 'Resposta enviada',
      description: 'Sua resposta foi publicada com sucesso.',
    });
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = ratingFilter === 'todas' || review.rating === parseInt(ratingFilter);
    const matchesStatus = statusFilter === 'todas' || review.status === statusFilter;

    return matchesSearch && matchesRating && matchesStatus;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const pendingReviews = reviews.filter((review) => review.status === 'pendente').length;
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
    percentage: (reviews.filter((review) => review.rating === rating).length / totalReviews) * 100,
  }));

  return (
    <Container>
      <RestaurantSidebar
        restaurantInfo={restaurantInfo}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onEditProfile={() => {}}
        onLogout={() => navigate('/')}
      />
      <div className="main-content">
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <main className="main">
          <div className="header-section">
            <h1 className="main-title">Avaliações</h1>
            <p className="main-description">Gerencie e responda às avaliações dos seus clientes</p>
          </div>

          <div className="stats-grid">
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Média Geral</h3>
                <Star className="icon-star" />
              </header>
              <div className="card-content">
                <div className="stat-value">{averageRating.toFixed(1)}</div>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`icon-star ${i < Math.round(averageRating) ? 'filled' : 'empty'}`}
                    />
                  ))}
                </div>
              </div>
            </article>
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Total Avaliações</h3>
                <MessageSquare className="icon-message" />
              </header>
              <div className="card-content">
                <div className="stat-value">{totalReviews}</div>
              </div>
            </article>
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Pendentes</h3>
                <TrendingUp className="icon-trending" />
              </header>
              <div className="card-content">
                <div className="stat-value">{pendingReviews}</div>
                <p className="stat-description">Para responder</p>
              </div>
            </article>
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">5 Estrelas</h3>
                <Star className="icon-star five-star" />
              </header>
              <div className="card-content">
                <div className="stat-value">
                  {ratingDistribution.find((r) => r.rating === 5)?.count || 0}
                </div>
                <p className="stat-description">
                  {ratingDistribution.find((r) => r.rating === 5)?.percentage.toFixed(1)}%
                </p>
              </div>
            </article>
          </div>

          <article className="card-container distribution-card">
            <header className="card-header">
              <h2 className="card-title">Distribuição de Avaliações</h2>
            </header>
            <div className="card-content">
              <div className="distribution-list">
                {ratingDistribution.map((item) => (
                  <div key={item.rating} className="distribution-item">
                    <div className="rating-label">
                      <span>{item.rating}</span>
                      <Star className="icon-star" />
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="count">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="card-container filter-card">
            <header className="card-header">
              <h2 className="card-title">Filtros</h2>
            </header>
            <div className="card-content">
              <div className="filter-group">
                <fieldset className="input-group">
                  <label htmlFor="search" className="label">Buscar avaliações</label>
                  <div className="search-container">
                    <Search className="icon-search" />
                    <input
                      id="search"
                      placeholder="Nome do cliente ou comentário..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input search-input"
                    />
                  </div>
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="rating-filter" className="label">Avaliação</label>
                  <select
                    id="rating-filter"
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    className="select"
                  >
                    <option value="todas">Todas</option>
                    <option value="5">5 estrelas</option>
                    <option value="4">4 estrelas</option>
                    <option value="3">3 estrelas</option>
                    <option value="2">2 estrelas</option>
                    <option value="1">1 estrela</option>
                  </select>
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="status-filter" className="label">Status</label>
                  <div className="select-container">
                    <Filter className="icon-filter" />
                    <select
                      id="status-filter"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="select"
                    >
                      <option value="todas">Todos</option>
                      <option value="pendente">Pendente</option>
                      <option value="respondida">Respondida</option>
                    </select>
                  </div>
                </fieldset>
              </div>
            </div>
          </article>

          <div className="reviews-list">
            {filteredReviews.map((review) => (
              <article key={review.id} className="card-container review-card">
                <header className="card-header">
                  <div className="header-content">
                    <div>
                      <div className="review-header">
                        <h3 className="review-title">{review.customerName}</h3>
                        <span className={`badge ${review.status}`}>
                          {getStatusText(review.status)}
                        </span>
                      </div>
                      <div className="review-meta">
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`icon-star ${i < review.rating ? 'filled' : 'empty'}`}
                            />
                          ))}
                          <span className={`rating-value rating-${review.rating}`}>
                            {review.rating}/5
                          </span>
                        </div>
                        <div className="date">
                          <Calendar className="icon-calendar" />
                          {new Date(review.date).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="card-content">
                  <p className="comment">{review.comment}</p>
                  {review.hasReply && (
                    <div className="reply">
                      <h4 className="reply-title">Sua resposta:</h4>
                      <p className="reply-text">{review.reply}</p>
                    </div>
                  )}
                  {!review.hasReply && (
                    <div className="reply-section">
                      {replyingTo === review.id ? (
                        <div className="reply-form">
                          <fieldset className="input-group">
                            <label htmlFor={`reply-${review.id}`} className="label">
                              Sua resposta
                            </label>
                            <textarea
                              id={`reply-${review.id}`}
                              placeholder="Digite sua resposta..."
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              className="textarea"
                            />
                          </fieldset>
                          <div className="button-group">
                            <button
                              className="submit-button"
                              onClick={() => handleReply(review.id)}
                            >
                              Enviar Resposta
                            </button>
                            <button
                              className="cancel-button"
                              onClick={() => {
                                setReplyingTo(null);
                                setReplyText('');
                              }}
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          className="reply-button"
                          onClick={() => setReplyingTo(review.id)}
                        >
                          <MessageSquare className="icon-message" />
                          Responder
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
            {filteredReviews.length === 0 && (
              <article className="card-container empty-state">
                <div className="card-content">
                  <MessageSquare className="icon-empty" />
                  <p className="empty-title">Nenhuma avaliação encontrada</p>
                  <p className="empty-description">
                    Não há avaliações para os filtros selecionados.
                  </p>
                </div>
              </article>
            )}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default RestauranteAvaliacoes;