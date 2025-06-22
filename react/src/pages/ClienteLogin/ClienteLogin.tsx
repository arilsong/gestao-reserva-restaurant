import React, { useState } from 'react';
import { ChefHat, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Container } from './style';
import { useAuth } from '@/context/AuthContext';

const ClienteLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  
  // Página para redirecionar após login
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  // Se já está autenticado, redireciona
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(email, password);

    setTimeout(() => {
      if (result.success) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
        navigate(from);
      } else {
        toast({
          title: "Erro no login",
          description: "Por favor, verifique os seus dados.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <section className="form-section">
        <button className="back-link" onClick={() => navigate('/')}>
          <ArrowLeft className="icon-arrow" />
          Voltar ao início
        </button>

        <article className="card-container">
          <header className="card-header">
            <div className="logo-container">
              <ChefHat className="icon-chefhat" />
              <span className="logo-text">ReservaFácil</span>
            </div>
            <h2 className="card-title">Login Cliente</h2>
            <p className="card-description">Entre na sua conta para fazer reservas</p>
          </header>

          <section className="card-content">
            <form className="form" onSubmit={handleLogin}>
              <fieldset className="input-group">
                <label htmlFor="email" className="label">Email</label>
                <div className="input-wrapper">
                  <Mail className="icon-input" />
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </fieldset>

              <fieldset className="input-group">
                <label htmlFor="password" className="label">Palavra-passe</label>
                <div className="input-wrapper">
                  <Lock className="icon-input" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </fieldset>

              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  Lembrar-me
                </label>
                <button type="button" className="forgot-password">Esqueceu a palavra-passe?</button>
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'A entrar...' : 'Entrar'}
              </button>
            </form>

            <footer className="register-section">
              <p className="register-text">
                Não tem conta?{' '}
                <button className="register-link" onClick={() => navigate('/cliente/registro')}>
                  Registar-se
                </button>
              </p>
            </footer>
          </section>
        </article>
      </section>
    </Container>
  );
};

export default ClienteLogin;