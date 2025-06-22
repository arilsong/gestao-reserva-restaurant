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

  .overlay-container {
    background: white;
    border-radius: 8px;
    width: 100%;
    max-width: 1024px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .header {
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .close-button {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
  }

  .icon-close {
    width: 16px;
    height: 16px;
    color: #4b5563;
  }

  .form {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .card-container {
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  .card-header {
    padding: 16px 24px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    display: flex;
    align-items: center;

    .icon-clock {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  .card-content {
    padding: 24px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
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

  .input,
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
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    min-height: 80px;
    resize: vertical;
    background: white;

    &:focus {
      border-color: #2563eb;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .hours-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .day-label {
    width: 128px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .hours-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #374151;
  }

  .checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    accent-color: #2563eb;
  }

  .time-input {
    width: 128px;
  }

  .separator {
    font-size: 14px;
    color: #4b5563;
  }

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .amenity-button {
    padding: 8px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 12px;
    background: white;
    color: #374151;
    cursor: pointer;

    &.selected {
      background: #2563eb;
      color: white;
      border-color: #2563eb;
    }

    &:hover:not(.selected) {
      background: #f9fafb;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid #e5e7eb;
  }

  .cancel-button {
    padding: 12px 24px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    background: white;
    color: #374151;
    cursor: pointer;

    &:hover {
      background: #f9fafb;
    }
  }

  .submit-button {
    display: flex;
    align-items: center;
    padding: 12px 24px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: #1d4ed8;
    }
  }

  .icon-save {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;