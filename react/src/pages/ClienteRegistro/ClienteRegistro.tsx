import React, { useState } from 'react';
import { ChefHat, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Container } from './style';
import { useAuth } from '@/context/AuthContext';
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from '@/service/api/endpoints';
import axios from 'axios';
import { log } from 'console';

const ClienteRegistro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro no registo",
        description: "As palavras-passe não coincidem.",
        variant: "destructive",
      });

      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(USER_ENDPOINTS.CREATE, formData)

      if (response.status == 200 || response.status == 201) {
        console.log("ok................");
        
        const loginResult = await login(formData.email, formData.password);

        if (loginResult.success) {
          toast({
            title: 'Conta criada com sucesso!',
            description: 'Bem-vindo ao ReservaFácil!',
          });
          navigate('/');
        } else {
          toast({
            title: 'Erro no login',
            description: loginResult.error || 'Não foi possível fazer login após o registo.',
            variant: 'destructive',
          });
        }
      } else {
        const error = await response.data;
        toast({
          title: 'Erro no registo',
          description: error.message || 'Por favor, preencha todos os campos corretamente.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Erro no registo',
        description: 'Erro de conexão. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
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
            <h2 className="card-title">Criar Conta</h2>
            <p className="card-description">Junte-se a milhares de utilizadores</p>
          </header>

          <section className="card-content">
            <form className="form" onSubmit={handleRegister}>
              <fieldset className="input-group">
                <label htmlFor="nome" className="label">Nome Completo</label>
                <div className="input-wrapper">
                  <User className="icon-input" />
                  <input
                    id="nome"
                    name="name"
                    type="text"
                    placeholder="O seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </fieldset>

              <fieldset className="input-group">
                <label htmlFor="email" className="label">Email</label>
                <div className="input-wrapper">
                  <Mail className="icon-input" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </fieldset>

              <fieldset className="input-group">
                <label htmlFor="telefone" className="label">Telefone</label>
                <div className="input-wrapper">
                  <Phone className="icon-input" />
                  <input
                    id="telefone"
                    name="phone"
                    type="tel"
                    placeholder="+351 123 456 789"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </fieldset>

              <fieldset className="input-group">
                <label htmlFor="confirmPassword" className="label">Confirmar Palavra-passe</label>
                <div className="input-wrapper">
                  <Lock className="icon-input" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </fieldset>

              <div className="terms-container">
                <input type="checkbox" className="checkbox" required />
                <span className="terms-text">
                  Aceito os{' '}
                  <button type="button" className="terms-link">termos e condições</button>
                  {' '}e a{' '}
                  <button type="button" className="terms-link">política de privacidade</button>
                </span>
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'A criar conta...' : 'Criar Conta'}
              </button>
            </form>

            <footer className="login-section">
              <p className="login-text">
                Já tem conta?{' '}
                <button className="login-link" onClick={() => navigate('/cliente/login')}>
                  Fazer login
                </button>
              </p>
            </footer>
          </section>
        </article>
      </section>
    </Container>
  );
};

export default ClienteRegistro;