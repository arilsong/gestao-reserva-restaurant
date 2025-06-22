import React, { useState } from 'react';
import { X, Save, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Container } from './style';

interface Hours {
  open: string;
  close: string;
  closed: boolean;
}

interface FormData {
  name: string;
  cuisine: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  priceRange: string;
  capacity: number;
  hours: {
    seg: Hours;
    ter: Hours;
    qua: Hours;
    qui: Hours;
    sex: Hours;
    sab: Hours;
    dom: Hours;
  };
  amenities: string[];
}

interface EditProfileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileOverlay: React.FC<EditProfileOverlayProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: 'Bella Vista',
    cuisine: 'Italiana',
    description: 'Autêntica cozinha italiana com ingredientes frescos e ambiente acolhedor.',
    address: 'Rua das Flores, 123 - Centro',
    phone: '(11) 9999-9999',
    email: 'contato@bellavista.com',
    priceRange: '€€€',
    capacity: 80,
    hours: {
      seg: { open: '12:00', close: '23:00', closed: false },
      ter: { open: '12:00', close: '23:00', closed: false },
      qua: { open: '12:00', close: '23:00', closed: false },
      qui: { open: '12:00', close: '23:00', closed: false },
      sex: { open: '12:00', close: '00:00', closed: false },
      sab: { open: '12:00', close: '00:00', closed: false },
      dom: { open: '12:00', close: '22:00', closed: false },
    },
    amenities: ['WiFi', 'Estacionamento', 'Acessível', 'Ar Condicionado', 'Música ao Vivo'],
  });

  const daysOfWeek = {
    seg: 'Segunda-feira',
    ter: 'Terça-feira',
    qua: 'Quarta-feira',
    qui: 'Quinta-feira',
    sex: 'Sexta-feira',
    sab: 'Sábado',
    dom: 'Domingo',
  };

  const availableAmenities = [
    'WiFi',
    'Estacionamento',
    'Acessível',
    'Ar Condicionado',
    'Música ao Vivo',
    'Terraço',
    'Delivery',
    'Aceita Pets',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleHourChange = (day: string, field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      hours: {
        ...formData.hours,
        [day]: {
          ...formData.hours[day as keyof typeof formData.hours],
          [field]: value,
        },
      },
    });
  };

  const toggleAmenity = (amenity: string) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(amenity)
        ? formData.amenities.filter((a) => a !== amenity)
        : [...formData.amenities, amenity],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Perfil atualizado!',
      description: 'As informações do restaurante foram salvas com sucesso.',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Container>
      <div className="overlay-container">
        <header className="header">
          <h2 className="header-title">Editar Perfil do Restaurante</h2>
          <button className="close-button" onClick={onClose}>
            <X className="icon-close" />
          </button>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <article className="card-container">
            <header className="card-header">
              <h3 className="card-title">Informações Básicas</h3>
            </header>
            <div className="card-content">
              <div className="grid-container">
                <fieldset className="input-group">
                  <label htmlFor="name" className="label">Nome do Restaurante</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="cuisine" className="label">Tipo de Cozinha</label>
                  <input
                    id="cuisine"
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </fieldset>
              </div>
              <fieldset className="input-group">
                <label htmlFor="description" className="label">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="textarea"
                />
              </fieldset>
              <div className="grid-container">
                <fieldset className="input-group">
                  <label htmlFor="priceRange" className="label">Faixa de Preço</label>
                  <select
                    id="priceRange"
                    name="priceRange"
                    value={formData.priceRange}
                    onChange={handleInputChange}
                    className="select"
                  >
                    <option value="€">€ - Económico</option>
                    <option value="€€">€€ - Moderado</option>
                    <option value="€€€">€€€ - Caro</option>
                    <option value="€€€€">€€€€ - Muito Caro</option>
                  </select>
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="capacity" className="label">Capacidade (pessoas)</label>
                  <input
                    id="capacity"
                    name="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </fieldset>
              </div>
            </div>
          </article>

          <article className="card-container">
            <header className="card-header">
              <h3 className="card-title">Informações de Contacto</h3>
            </header>
            <div className="card-content">
              <fieldset className="input-group">
                <label htmlFor="address" className="label">Endereço</label>
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </fieldset>
              <div className="grid-container">
                <fieldset className="input-group">
                  <label htmlFor="phone" className="label">Telefone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="email" className="label">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </fieldset>
              </div>
            </div>
          </article>

          <article className="card-container">
            <header className="card-header">
              <h3 className="card-title">
                <Clock className="icon-clock" />
                Horário de Funcionamento
              </h3>
            </header>
            <div className="card-content">
              {Object.entries(daysOfWeek).map(([key, day]) => (
                <div key={key} className="hours-row">
                  <span className="day-label">{day}</span>
                  <div className="hours-controls">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={!formData.hours[key as keyof typeof formData.hours].closed}
                        onChange={(e) => handleHourChange(key, 'closed', !e.target.checked)}
                        className="checkbox"
                      />
                      Aberto
                    </label>
                    {!formData.hours[key as keyof typeof formData.hours].closed && (
                      <>
                        <input
                          type="time"
                          value={formData.hours[key as keyof typeof formData.hours].open}
                          onChange={(e) => handleHourChange(key, 'open', e.target.value)}
                          className="input time-input"
                        />
                        <span className="separator">às</span>
                        <input
                          type="time"
                          value={formData.hours[key as keyof typeof formData.hours].close}
                          onChange={(e) => handleHourChange(key, 'close', e.target.value)}
                          className="input time-input"
                        />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card-container">
            <header className="card-header">
              <h3 className="card-title">Comodidades</h3>
            </header>
            <div className="card-content">
              <div className="amenities-grid">
                {availableAmenities.map((amenity) => (
                  <button
                    key={amenity}
                    type="button"
                    className={`amenity-button ${formData.amenities.includes(amenity) ? 'selected' : ''}`}
                    onClick={() => toggleAmenity(amenity)}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
          </article>

          <div className="actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              <Save className="icon-save" />
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditProfileOverlay;