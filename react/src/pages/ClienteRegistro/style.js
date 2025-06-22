import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #faf5ff, #ffffff, #fef7f2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;

  .form-section {
    width: 100%;
    max-width: 672px;
  }

  .back-link {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #4b5563;
    margin-bottom: 24px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #111827;
    }
  }

  .icon-arrow {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .card-container {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 8px;
  }

  .card-header {
    text-align: center;
    padding-bottom: 24px;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .icon-building {
    width: 32px;
    height: 32px;
    color: #7c3aed;
  }

  .logo-text {
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(to right, #7c3aed, #ea580c);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    &.three-columns {
      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: none;
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

  .icon-input {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 16px;
    height: 16px;

    &.textarea-icon {
      top: 16px;
      transform: none;
    }
  }

  .input,
  .select {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: white;

    &:focus {
      border-color: #7c3aed;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
  }

  .textarea {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    min-height: 80px;
    resize: vertical;
    background: white;

    &:focus {
      border-color: #7c3aed;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .terms-container {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
  }

  .checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    accent-color: #7c3aed;
    margin-top: 4px;
  }

  .terms-text {
    color: #4b5563;
  }

  .terms-link {
    background: none;
    border: none;
    color: #7c3aed;
    cursor: pointer;

    &:hover {
      color: #6d28d9;
    }
  }

  .submit-button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #7c3aed, #ea580c);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to right, #6d28d9, #c2410c);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .login-section {
    margin-top: 24px;
    text-align: center;
  }

  .login-text {
    color: #4b5563;
  }

  .login-link {
    background: none;
    border: none;
    color: #7c3aed;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #6d28d9;
    }
  }
`;