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
    max-width: 1024px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .card-container {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 8px;
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

  .reservation-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .reservation-form {
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

  .input-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: none;

    &.full-width {
      grid-column: span 2;

      @media (max-width: 768px) {
        grid-column: span 1;
      }
    }
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    &::placeholder {
      color: #9ca3af;
    }
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

  .select {
    width: 100%;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: white;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    padding-top: 24px;
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

  .reservation-summary {
    display: flex;
    flex-direction: column;
  }

  .summary-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 32px;
  }

  .summary-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .summary-title {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
  }

  .summary-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .restaurant-name {
    font-size: 18px;
    font-weight: 500;
    color: #111827;
  }

  .summary-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .detail-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }

  .icon-info {
    width: 16px;
    height: 16px;
    color: #4b5563;
    margin-right: 8px;
  }

  .detail-label {
    color: #4b5563;
  }

  .detail-value {
    font-weight: 500;
    color: #111827;
  }

  .policy-container {
    background: #dcfce7;
    padding: 12px;
    border-radius: 8px;
    margin-top: 16px;
    border-top: 1px solid #e5e7eb;
  }

  .policy-title {
    font-size: 14px;
    font-weight: 500;
    color: #15803d;
    margin-bottom: 4px;
  }

  .policy-text {
    font-size: 14px;
    color: #15803d;
  }

   .option{
    margin-bottom: 20px;
   }

  .option input{
    margin-right: 20px;
  }
`;