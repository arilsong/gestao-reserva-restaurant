import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;

  .card-container {
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  .card-header {
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
    padding: 16px 24px;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .card-description {
    font-size: 14px;
    color: #4b5563;
  }

  .new-reservation-button {
    padding: 8px 16px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #1d4ed8;
    }
  }

  .card-content {
    padding: 0;
  }

  .table-wrapper {
    overflow-x: auto;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table-header {
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }

  .table-cell {
    padding: 16px;
    text-align: left;

    &.header-cell {
      font-weight: 500;
      color: #6b7280;
    }

    &.empty-state {
      text-align: center;
      color: #6b7280;
    }
  }

  .table-row {
    border-bottom: 1px solid #e5e7eb;
  }

  .customer-name {
    font-weight: 500;
    color: #111827;
  }

  .flex-container {
    display: flex;
    align-items: center;
  }

  .icon-clock,
  .icon-users {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    color: #9ca3af;
  }

  .badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;

    &.confirmed {
      background: #dcfce7;
      color: #15803d;
    }

    &.pending {
      background: #fefce8;
      color: #a16207;
    }

    &.check-in {
      background: #e0f2fe;
      color: #1e40af;
    }

    &.completed {
      background: #f3f4f6;
      color: #4b5563;
    }

    &.canceled {
      background: #fee2e2;
      color: #b91c1c;
    }

    &.default {
      background: #f3f4f6;
      color: #4b5563;
    }
  }

  .contact-info,
  .special-requests {
    font-size: 14px;
    color: #4b5563;
  }

  .special-requests {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  .action-button {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &.primary {
      background: #2563eb;
      color: white;
      border: none;

      &:hover {
        background: #1d4ed8;
      }
    }

    &.outline {
      background: white;
      color: #374151;
      border: 1px solid #e5e7eb;

      &:hover {
        background: #f9fafb;
      }
    }
  }
`;