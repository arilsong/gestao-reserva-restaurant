import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 32px;

  .card-container {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 8px;
  }

  .card-header {
    text-align: center;
    padding-bottom: 24px;
    padding: 24px 24px 0;
  }

  .card-title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
  }

  .card-description {
    color: #4b5563;
  }

  .card-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
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
    }
  }

  .time-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .time-button {
    padding: 8px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    background: white;
    color: #374151;
    font-size: 12px;
    cursor: pointer;
    text-align: center;

    &.selected {
      background: linear-gradient(to right, #2563eb, #16a34a);
      color: white;
      border-color: transparent;
    }

    &:hover:not(.selected) {
      border-color: #2563eb;
    }
  }

  .error-text {
    color: #ef4444;
    font-size: 14px;
    margin-top: 4px;
  }

  .info-text {
    color: #6b7280;
    font-size: 14px;
    text-align: center;
  }

  .submit-button {
    width: 100%;
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

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .outline-button {
    width: 100%;
    padding: 12px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    color: #374151;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      border-color: #2563eb;
      color: #2563eb;
    }
  }

  .icon-star {
    width: 16px;
    height: 16px;
  }

  .contact-section {
    padding-top: 16px;
    border-top: 1px solid #e5e7eb;
    text-align: center;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4b5563;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .icon-contact {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;