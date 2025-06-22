import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  width: 100%;

  .main-content {
    flex: 1;
  }

  .main {
    padding: 24px 16px;
  }

  .header-section {
    margin-bottom: 24px;
  }

  .main-title {
    font-size: 30px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
  }

  .main-description {
    font-size: 16px;
    color: #4b5563;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .card-container {
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 6px;

    &.stat-card {
      padding: 16px;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
  }

  .card-content {
    padding: 0;
  }

  .stat-title {
    font-size: 14px;
    font-weight: bold;
    color: #374151;
  }

  .stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #111827;
  }

  .icon-users {
    width: 16px;
    height: 16px;
    color: #6b7280;
  }

  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &.available {
      background-color: #22c55e;
    }

    &.occupied {
      background-color: #ef4444;
    }
  }

  .actions-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 20px;
    font-weight: 600;
    color: #111827;
  }

  .section-description {
    font-size: 14px;
    color: #6b7280;
  }

  .add-table-button {
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

  .icon-plus {
    width: 16px;
    height: 16px;
    margin-right: 8px;
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
      font-weight: bold;
      color: #6b7280;
    }
  }

  .table-row {
    border-bottom: 1px solid #e5e7eb;
  }

  .table-number {
    font-weight: bold;
    color: #2d3748;
  }

  .flex-container {
    display: flex;
    align-items: center;
  }

  .icon-map-pin {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    color: #a0aec0;
  }

  .status-select {
    width: none !important;
    padding: 0px;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    appearance: none;
    background: none;
    color: inherit;

    &.available {
      background-color: #dcfce7;
      color: #15803d;
    }

    &.occupied {
      background-color: #fee2e2;
      color: #b91c1c;
    }

    &.reserved {
      background-color: #fefce8;
      color: #a16207;
    }

    &.maintenance {
      background-color: #f3f4f6;
      color: #4b5563;
    }

    &.default {
      background-color: #f3f4f6;
      color: #4b5563;
    }
  }

  .notes {
    font-size: 14px;
    color: #718096;
    display: -webkit-line;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 640px;
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  .action-button {
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;

    &.edit {
      background: white;
      color: #374151;
      border: 1px solid #e5e7eb;

      &:hover {
        background: #f9fafb;
      }
    }

    &.delete {
      background: white;
      color: #ef4444;
      border: 1px solid #e5e7eb;

      &:hover {
        background: #f9fafb;
      }
  }

  .icon-edit,
  .icon-trash {
    width: 16px;
    height: 16px;
  }
}
`;

export const DialogContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  max-width: 448px;
  width: 100%;
  padding: 24px;
  z-index: 1000;
  box-shadow: 0 10px 15px-20px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  .dialog-header {
    margin-bottom: 16px;
  }

  .dialog-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .dialog-description {
    font-size: 14px;
    color: #4b5563;
    margin-top: 4px;
  }

  .dialog-content {
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
    background: white;

    &:focus {
      border-color: #2563eb;
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
    appearance: none;
    color: #374151;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;

    &:focus {
      border-color: #2563eb;
    }
  }

  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 24px;
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
`;

export const AlertDialogContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  max-width: 448px;
  width: 100%;
  padding: 24px;
  z-index: 1000;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  .alert-header {
    margin-bottom: 16px;
  }

  .alert-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .alert-description {
    font-size: 14px;
    color: #4b5563;
    margin-top: 4px;
  }

  .alert-footer {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 24px;
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

  .delete-button {
    padding: 12px 24px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: #dc2626;
    }
  }
`;