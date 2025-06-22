import React from 'react';
import { Star, Edit } from 'lucide-react';
import { Container } from './style';

interface SidebarItem {
  name: string;
  href: string;
  active: boolean;
}

interface RestaurantInfo {
  name: string;
  cuisine: string;
  rating: number;
  totalReviews: number;
}

interface RestaurantSidebarProps {
  restaurantInfo: RestaurantInfo;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  onEditProfile: () => void;
  onLogout: () => void;
}

const RestaurantSidebar: React.FC<RestaurantSidebarProps> = ({
  restaurantInfo,
  sidebarOpen,
  setSidebarOpen,
  onEditProfile,
  onLogout,
}) => {
  const sidebarItems: SidebarItem[] = [
    { name: 'Dashboard', href: '/restaurante/dashboard', active: false },
    { name: 'Reservas', href: '/restaurante/reservas', active: false },
    { name: 'Mesas', href: '/restaurante/mesas', active: false },
    { name: 'Avaliações', href: '/restaurante/avaliacoes', active: false },
  ];

  const currentPath = window.location.pathname;
  const updatedSidebarItems = sidebarItems.map((item) => ({
    ...item,
    active: currentPath === item.href,
  }));

  return (
    <>
      <Container open={sidebarOpen}>
        <div className="sidebar-content">
          <header className="sidebar-header">
            <h2 className="restaurant-name">{restaurantInfo.name}</h2>
            <p className="cuisine">{restaurantInfo.cuisine}</p>
            <div className="rating-container">
              <Star className="icon-star" />
              <span className="rating">{restaurantInfo.rating}</span>
              <span className="reviews">({restaurantInfo.totalReviews})</span>
            </div>
          </header>
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {updatedSidebarItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${item.active ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <footer className="sidebar-footer">
            <button className="action-button outline" onClick={onEditProfile}>
              <Edit className="icon-edit" />
              Editar Perfil
            </button>
            <button className="action-button outline" onClick={onLogout}>
              Sair
            </button>
          </footer>
        </div>
      </Container>
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default RestaurantSidebar;