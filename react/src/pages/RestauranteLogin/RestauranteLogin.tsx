import React, { useState } from 'react';
import { ChefHat, Mail, Lock, ArrowLeft, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Main } from './style';
import { useAuth } from '@/context/AuthContext';


const RestauranteLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(email, password);

    if(result.success){
      navigate('/restaurante/dashboard');
    }

    /* setTimeout(() => {
      if (email && password) {
        toast({
          title: 'Login realizado com sucesso!',
          description: 'Bem-vindo ao painel do restaurante!',
        });
        navigate('/restaurante/dashboard');
      } else {
        toast({
          title: 'Erro no login',
          description: 'Por favor, verifique os seus dados.',
          variant: 'destructive',
        });
      }
      setLoading(false);
    }, 1000); */
  };

  return (
    <Main>
        <section className="form-section">
        <button className="back-link" onClick={() => navigate('/')}>
          <ArrowLeft className="icon-arrow" />
          Voltar ao início
        </button>

        <article className="card-container">
          <header className="card-header">
            <div className="logo-container">
              <Building2 className="icon-building" />
              <span className="logo-text">ReservaFácil</span>
            </div>
            <h2 className="card-title">Área do Restaurante</h2>
            <p className="card-description">Acesso ao painel de gestão</p>
          </header>

          <section className="card-content">
            <form className="form" onSubmit={handleLogin}>
              <fieldset className="input-group">
                <label htmlFor="email" className="label">Email do Restaurante</label>
                <div className="input-wrapper">
                  <Mail className="icon-input" />
                  <input
                    id="email"
                    type="email"
                    placeholder="restaurante@email.com"
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
                {loading ? 'A entrar...' : 'Aceder ao Painel'}
              </button>
            </form>

            <footer className="register-section">
              <p className="register-text">
                Novo parceiro?{' '}
                <button className="register-link" onClick={() => navigate('/restaurante/registro')}>
                  Registar restaurante
                </button>
              </p>
            </footer>
          </section>
        </article>
      </section>
    </Main>
  );
};

export default RestauranteLogin;