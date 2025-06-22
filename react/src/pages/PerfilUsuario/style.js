import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  padding: 0;

  .header-section {
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .header-content {
    max-width: 1152px;
    margin: 0 auto;
    padding: 16px;
  }

  .back-link {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #4b5563;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 16px;

    &:hover {
      color: #111827;
    }
  }

  .icon-arrow {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
  }

  .edit-button,
  .save-button {
    padding: 12px;
    background: linear-gradient(to right, #2563eb, #16a34a);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: linear-gradient(to right, #1d4ed8, #15803d);
    }
  }

  .cancel-button {
    padding: 12px;
    border: 1px solid #e5e7eb;
    background: transparent;
    color: #4b5563;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      border-color: #2563eb;
      color: #2563eb;
    }
  }

  .action-group {
    display: flex;
    gap: 8px;
  }

  .icon-action {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .main-section {
    max-width: 1152px;
    margin: 0 auto;
    padding: 32px 16px;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .stats-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .card-container {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .card-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .card-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    display: flex;
    align-items: center;
  }

  .icon-title {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    color: #4b5563;
  }

  .action-link {
    background: none;
    border: none;
    color: #2563eb;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #1d4ed8;
    }
  }

  .card-content {
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

  .icon-input {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 16px;
    height: 16px;
  }

  .input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #2563eb;
    }
  }

  .data-display {
    padding: 12px;
    background: #f9fafb;
    border-radius: 4px;
    font-size: 16px;
    color: #374151;
  }

  .reservations-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .reservation-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f9fafb;
    border-radius: 8px;
  }

  .reservation-title {
    font-size: 16px;
    font-weight: 500;
    color: #111827;
  }

  .reservation-date {
    font-size: 14px;
    color: #4b5563;
  }

  .reservation-meta {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rating-stars {
    display: flex;
    gap: 4px;
  }

  .icon-star {
    width: 16px;
    height: 16px;
    color: #d1d5db;

    &.rated {
      color: #f59e0b;
      fill: #f59e0b;
    }
  }

  .reservation-status {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    background: #dbeafe;
    color: #1e40af;
  }

  .stats-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .stat-item {
    text-align: center;
    padding: 16px;
    border-radius: 8px;

    &.stat-total {
      background: #eff6ff;
      color: #2563eb;
    }

    &.stat-completed {
      background: #dcfce7;
      color: #15803d;
    }

    &.stat-rating {
      background: #fef9c3;
      color: #a16207;
    }

    &.stat-favorites {
      background: #f3e8ff;
      color: #7c3aed;
    }
  }

  .stat-value {
    font-size: 24px;
    font-weight: 700;
  }

  .stat-label {
    font-size: 14px;
    font-weight: 500;
  }

  .actions-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .action-button {
    width: 100%;
    padding: 12px;
    border: 1px solid #e5e7eb;
    background: transparent;
    color: #4b5563;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      border-color: #2563eb;
      color: #2563eb;
    }
  }
`;