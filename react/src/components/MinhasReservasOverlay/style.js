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

  .tabs-container {
    display: flex;
    gap: 4px;
    background: #f3f4f6;
    padding: 4px;
    border-radius: 8px;
    width: fit-content;
    margin-bottom: 24px;
  }

  .tab-button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #4b5563;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #111827;
    }

    &.tab-active {
      background: white;
      color: #2563eb;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
  }

  .reservations-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 384px;
    overflow-y: auto;
  }

  .empty-state {
    text-align: center;
    padding: 48px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .icon-empty {
    width: 48px;
    height: 48px;
    color: #9ca3af;
    margin: 0 auto 16px;
  }

  .empty-title {
    font-size: 18px;
    font-weight: 500;
    color: #111827;
    margin-bottom: 8px;
  }

  .empty-description {
    color: #4b5563;
    font-size: 14px;
  }

  .reservation-card {
    display: flex;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .reservation-image {
    width: 96px;
    height: 96px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .reservation-content {
    flex: 1;
    padding: 16px;
  }

  .reservation-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  .reservation-title {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
  }

  .reservation-location {
    display: flex;
    align-items: center;
    color: #4b5563;
    font-size: 12px;
  }

  .reservation-status {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;

    &.status-confirmada {
      background: #dcfce7;
      color: #15803d;
    }

    &.status-pendente {
      background: #fef9c3;
      color: #a16207;
    }

    &.status-concluida {
      background: #dbeafe;
      color: #1e40af;
    }

    &.status-cancelada {
      background: #fee2e2;
      color: #b91c1c;
    }

    &.status-default {
      background: #f3f4f6;
      color: #4b5563;
    }
  }

  .reservation-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 12px;
  }

  .detail-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #4b5563;
  }

  .icon-info {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    color: #4b5563;
  }

  .reservation-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .reservation-contact {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #4b5563;
  }

  .reservation-actions {
    display: flex;
    gap: 4px;
  }

  .action-button {
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;

    &.cancel {
      border: 1px solid #e5e7eb;
      background: transparent;
      color: #4b5563;

      &:hover {
        border-color: #2563eb;
        color: #2563eb;
      }
    }

    &.rate {
      background: linear-gradient(to right, #2563eb, #16a34a);
      color: white;
      border: none;

      &:hover {
        background: linear-gradient(to right, #1d4ed8, #15803d);
      }
    }
  }

  .icon-action {
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }
`;