import React from 'react';
import { ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Nav } from './style';
import { useAuth } from '@/context/AuthContext';


const Navbar = () => {
  const navigate = useNavigate();

   const { isAuthenticated, logout } = useAuth();

  return (
    <Nav>
      <section className="navbar-container">
        <header className="navbar-content">
          <div className="logo-container">
            <ChefHat className="icon-chefhat" />
            <span className="logo-text">ReservaFácil</span>
          </div>
          <div className="nav-links">
            {
              isAuthenticated ? 
              <><button className="nav-link ghost" onClick={() => navigate('/cliente/perfil')}>
                  Perfil
                </button>
                <button className="nav-link ghost" onClick={() => logout()}>
                  Logout
                </button></> : 
              <>
                <button className="nav-link ghost" onClick={() => navigate('/cliente/login')}>
                  Login Cliente
                </button>
                <button className="nav-link outline" onClick={() => navigate('/restaurante/login')}>
                    Área Restaurante
                </button>
                <button className="nav-link primary" onClick={() => navigate('/cliente/registro')}>
                  Registar
                </button>
            </>
            }
            
          </div>
        </header>
      </section>
    </Nav>
  );
};

export default Navbar;