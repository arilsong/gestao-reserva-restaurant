import React, { useState } from 'react';
import { Building2, Mail, Lock, Phone, MapPin, ArrowLeft, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Container } from './style';
import axios from 'axios';
import { RESTAURANT_ENDPOINTS, USER_ENDPOINTS } from '@/service/api/endpoints';

interface FormData {
  nomeRestaurante: string;
  email: string;
  telefone: string;
  endereco: string;
  tipoCozinha: string;
  capacidade: string;
  horarioAbertura: string;
  horarioFechamento: string;
  descricao: string;
  password: string;
  confirmPassword: string;
}

const RestauranteRegistro: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nomeRestaurante: '',
    email: '',
    telefone: '',
    endereco: '',
    tipoCozinha: '',
    capacidade: '',
    horarioAbertura: '',
    horarioFechamento: '',
    descricao: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Erro no registo',
        description: 'As palavras-passe não coincidem.',
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }
    
    try {
      const { data } = await axios.post(RESTAURANT_ENDPOINTS.CREATE, {
        formData
      })
    } catch (error) {
      
    }

    setTimeout(() => {
      if (formData.nomeRestaurante && formData.email && formData.password) {
        toast({
          title: 'Restaurante registado com sucesso!',
          description: 'Bem-vindo à nossa plataforma!',
        });
        navigate('/restaurante/dashboard');
      } else {
        toast({
          title: 'Erro no registo',
          description: 'Por favor, preencha todos os campos obrigatórios.',
          variant: 'destructive',
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
              <Building2 className="icon-building" />
              <span className="logo-text">ReservaFácil</span>
            </div>
            <h2 className="card-title">Registar Restaurante</h2>
            <p className="card-description">Junte-se à nossa rede de parceiros</p>
          </header>

          <section className="card-content">
            <form className="form" onSubmit={handleRegister}>
              <div className="grid-container">
                <fieldset className="input-group">
                  <label htmlFor="nomeRestaurante" className="label">Nome do Restaurante *</label>
                  <div className="input-wrapper">
                    <Building2 className="icon-input" />
                    <input
                      id="nomeRestaurante"
                      name="nomeRestaurante"
                      type="text"
                      placeholder="Nome do seu restaurante"
                      value={formData.nomeRestaurante}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </fieldset>

                <fieldset className="input-group">
                  <label htmlFor="tipoCozinha" className="label">Tipo de Cozinha *</label>
                  <div className="input-wrapper">
                    <select
                      id="tipoCozinha"
                      name="tipoCozinha"
                      value={formData.tipoCozinha}
                      onChange={handleInputChange}
                      className="select"
                      required
                    >
                      <option value="" disabled>Selecione o tipo</option>
                      <option value="italiana">Italiana</option>
                      <option value="japonesa">Japonesa</option>
                      <option value="tradicional">Tradicional Portuguesa</option>
                      <option value="francesa">Francesa</option>
                      <option value="indiana">Indiana</option>
                      <option value="mediterranica">Mediterrânica</option>
                      <option value="vegetariana">Vegetariana</option>
                      <option value="fusion">Fusion</option>
                    </select>
                  </div>
                </fieldset>
              </div>

              <div className="grid-container">
                <fieldset className="input-group">
                  <label htmlFor="email" className="label">Email *</label>
                  <div className="input-wrapper">
                    <Mail className="icon-input" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="restaurante@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </fieldset>

                <fieldset className="input-group">
                  <label htmlFor="telefone" className="label">Telefone *</label>
                  <div className="input-wrapper">
                    <Phone className="icon-input" />
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="+351 123 456 789"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </fieldset>
              </div>

              <fieldset className="input-group">
                <label htmlFor="endereco" className="label">Endereço Completo *</label>
                <div className="input-wrapper">
                  <MapPin className="icon-input textarea-icon" />
                  <textarea
                    id="endereco"
                    name="endereco"
                    placeholder="Rua, número, código postal, cidade"
                    value={formData.endereco}
                    onChange={handleInputChange}
                    className="textarea"
                    required
                  />
                </div>
              </fieldset>

              <div className="grid-container three-columns">
                <fieldset className="input-group">
                  <label htmlFor="capacidade" className="label">Capacidade *</label>
                  <div className="input-wrapper">
                    <Users className="icon-input" />
                    <input
                      id="capacidade"
                      name="capacidade"
                      type="number"
                      placeholder="50"
                      value={formData.capacidade}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </fieldset>

                <fieldset className="input-group">
                  <label htmlFor="horarioAbertura" className="label">Abertura *</label>
                  <div className="input-wrapper">
                    <Clock className="icon-input" />
                    <input
                      id="horarioAbertura"
                      name="horarioAbertura"
                      type="time"
                      value={formData.horarioAbertura}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </fieldset>

                <fieldset className="input-group">
                  <label htmlFor="horarioFechamento" className="label">Fechamento *</label>
                  <div className="input-wrapper">
                    <Clock className="icon-input" />
                    <input
                      id="horarioFechamento"
                      name="horarioFechamento"
                      type="time"
                      value={formData.horarioFechamento}
                      onChange={handleInputChange}
                      className="input"
                      required
                    />
                  </div>
                </fieldset>
              </div>

              <fieldset className="input-group">
                <label htmlFor="descricao" className="label">Descrição do Restaurante</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  placeholder="Conte-nos sobre o seu restaurante, especialidades, ambiente..."
                  value={formData.descricao}
                  onChange={handleInputChange}
                  className="textarea"
                />
              </fieldset>

              <div className="grid-container">
                <fieldset className="input-group">
                  <label htmlFor="password" className="label">Palavra-passe *</label>
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
                  <label htmlFor="confirmPassword" className="label">Confirmar Palavra-passe *</label>
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
              </div>

              <div className="terms-container">
                <input type="checkbox" className="checkbox" required />
                <span className="terms-text">
                  Aceito os{' '}
                  <button type="button" className="terms-link">termos de parceria</button>
                  {' '}e a{' '}
                  <button type="button" className="terms-link">política de privacidade</button>
                </span>
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'A registar restaurante...' : 'Registar Restaurante'}
              </button>
            </form>

            <footer className="login-section">
              <p className="login-text">
                Já é parceiro?{' '}
                <button className="login-link" onClick={() => navigate('/restaurante/login')}>
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

export default RestauranteRegistro;