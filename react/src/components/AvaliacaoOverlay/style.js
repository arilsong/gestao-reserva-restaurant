import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 16px;

  .overlay-section {
    width: 100%;
    max-width: 672px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .card-container {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .card-header {
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  .icon-close {
    width: 16px;
    height: 16px;
    color: #4b5563;

    &:hover {
      color: #111827;
    }
  }

  .card-content {
    padding: 24px;
  }

  .review-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .review-form {
    display: flex;
    flex-direction: column;
  }

  .form-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .form-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .form-title {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
  }

  .form-content {
    padding: 24px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    border: none;
  }

  .label {
    font-size: 16px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
  }

  .rating-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .star-rating {
    display: flex;
    gap: 4px;
  }

  .small-star-rating {
    display: flex;
    gap: 4px;
  }

  .star-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .icon-star {
    width: 24px;
    height: 24px;
    color: #d1d5db;
    transition: all 0.2s ease;

    &.rated {
      color: #f59e0b;
      fill: #f59e0b;
    }

    &:hover:not(.rated) {
      color: #fed7aa;
    }

    &.small {
      width: 16px;
      height: 16px;
    }
  }

  .rating-value {
    font-size: 18px;
    font-weight: 500;
    color: #374151;
  }

 

  .textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    resize: none;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid #e5e7eb;
  }

  .cancel-button {
    padding: 12px;
    border: 1px solid #e5e7eb;
    background: transparent;
    color: #4b5563;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      border-color: #2563eb;
      color: #2563eb;
    }
  }

  .submit-button {
    padding: 12px;
    background: linear-gradient(to right, #2563eb, #16a34a);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to right, #1d4ed8, #15803d);
    }
  }

  .restaurant-info {
    display: flex;
    flex-direction: column;
  }

  .info-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .info-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .info-title {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
  }

  .info-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .restaurant-image {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 8px;
  }

  .restaurant-name {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  .tip-container {
    background: #eff6ff;
    padding: 12px;
    border-radius: 8px;
  }

  .tip-title {
    font-size: 14px;
    font-weight: 500;
    color: #2563eb;
    margin-bottom: 4px;
  }

  .tip-text {
    font-size: 12px;
    color: #1e40af;
  }
`;