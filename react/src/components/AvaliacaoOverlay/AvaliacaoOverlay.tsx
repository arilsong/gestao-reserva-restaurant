import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Container } from './style';
import { UUID } from 'crypto';
import api from '@/service/api/api';
import { REVIEW_ENDPOINTS } from '@/service/api/endpoints';



interface AvaliacaoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName?: string;
  restaurantImage?: string;
  restaurantId: UUID;
}

const AvaliacaoOverlay: React.FC<AvaliacaoOverlayProps> = ({
  isOpen,
  onClose,
  restaurantName = 'Bella Vista',
  restaurantImage,
  restaurantId
}) => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: 'Avaliação obrigatória',
        description: 'Por favor, selecione uma avaliação geral.',
        variant: 'destructive',
      });
      return;
    }

    try {
      api.post(REVIEW_ENDPOINTS.CREATE(restaurantId), {
        "classification": rating,
        "comment": comment
      })

    } catch (error) {
      console.log(error)
    }

    toast({
      title: 'Avaliação enviada!',
      description: 'Obrigado pelo seu feedback. Sua avaliação foi registrada.',
    });
    onClose();
  };

  const StarRating: React.FC<{
    rating: number;
    onRatingChange: (rating: number) => void;
    onHover?: (rating: number) => void;
    onLeave?: () => void;
  }> = ({ rating: currentRating, onRatingChange, onHover, onLeave }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            onMouseEnter={() => onHover?.(star)}
            onMouseLeave={() => onLeave?.()}
            className="star-button"
          >
            <Star
              className={`icon-star ${star <= currentRating ? 'rated' : ''}`}
            />
          </button>
        ))}
      </div>
    );
  };

 

  if (!isOpen) return null;

  return (
    <Container>
      <section className="overlay-section">
        <article className="card-container">
          <header className="card-header">
            <h2 className="card-title">Avaliar Restaurante</h2>
            <button className="close-button" onClick={onClose}>
              <X className="icon-close" />
            </button>
          </header>

          <section className="card-content">
            <div className="review-grid">
              <div className="review-form">
                <article className="form-container">
                  <header className="form-header">
                    <h3 className="form-title">Como foi sua experiência?</h3>
                  </header>
                  <section className="form-content">
                    <form onSubmit={handleSubmit}>
                      <fieldset className="input-group">
                        <label className="label">Avaliação Geral *</label>
                        <div className="rating-wrapper">
                          <StarRating
                            rating={hoverRating || rating}
                            onRatingChange={setRating}
                            onHover={setHoverRating}
                            onLeave={() => setHoverRating(0)}
                          />
                          <span className="rating-value">
                            {hoverRating || rating || 0}/5
                          </span>
                        </div>
                      </fieldset>


                      <fieldset className="input-group">
                        <label htmlFor="comment" className="label">
                          Conte-nos mais sobre sua experiência
                        </label>
                        <textarea
                          id="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          rows={3}
                          placeholder="Compartilhe detalhes sobre a comida, atendimento, ambiente..."
                          className="textarea"
                        />
                      </fieldset>

                      <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onClose}>
                          Cancelar
                        </button>
                        <button type="submit" className="submit-button">
                          Enviar Avaliação
                        </button>
                      </div>
                    </form>
                  </section>
                </article>
              </div>

              <div className="restaurant-info">
                <article className="info-container">
                  <header className="info-header">
                    <h3 className="info-title">Restaurante</h3>
                  </header>
                  <section className="info-content">
                    {restaurantImage && (
                      <img
                        src={restaurantImage}
                        alt={restaurantName}
                        className="restaurant-image"
                      />
                    )}
                    <h4 className="restaurant-name">{restaurantName}</h4>
                    <div className="tip-container">
                      <h5 className="tip-title">Dica</h5>
                      <p className="tip-text">
                        Sua avaliação honesta ajuda outros clientes e o restaurante a melhorar.
                      </p>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </section>
        </article>
      </section>
    </Container>
  );
};

export default AvaliacaoOverlay;