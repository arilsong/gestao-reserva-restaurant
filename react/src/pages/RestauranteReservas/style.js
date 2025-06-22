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

  .card-container {
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 24px;

    &.filter-card {
      margin-bottom: 24px;
    }
  }

  .card-header {
    padding: 16px 24px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
  }

  .card-description {
    font-size: 14px;
    color: #4b5563;
  }

  .card-content {
    padding: 24px;
    padding-bottom: 0;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .search-container {
    position: relative;
  }

  .icon-search {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 16px;
    height: 16px;
    color: #9ca3af;
  }

  .input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: white;

    &.search-input {
      padding-left: 40px;
    }

    &:focus {
      border-color: #2563eb;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .select {
    width: 192px;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: none;
    appearance: none;
    background-color: white;
    color: #374151;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    &:focus {
      border-color: #2563eb;
    }
  }

  .select-container {
    display: flex;
    align-items: center;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    background: white;
  }

  .icon-filter {
    width: 16px;
    height: 16px;
    margin-left: 12px;
    color: #374151;
  }

  .button-group {
    display: flex;
    align-items: flex-end;
  }

  .new-reservation-button {
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
      font-weight: 500;
      color: #6b7280;
    }

    &.empty-state {
      text-align: center;
      padding: 32px;
    }
  }

  .table-row {
    border-bottom: 1px solid #e5e7eb;
  }

  .customer-name {
    font-weight: 500;
    color: #111827;
  }

  .contact-info {
    font-size: 14px;
    color: #6b7280;
  }

  .flex-container {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .icon-phone,
  .icon-calendar,
  .icon-clock,
  .icon-users {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    color: #9ca3af;
  }

  .date-time {
    display: flex;
    flex-direction: column;
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

  .special-requests {
    font-size: 14px;
    color: #4b5563;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 300px;
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

  .icon-empty {
    width: 48px;
    height: 48px;
    margin: 0 auto 16px;
    color: #d1d5db;
  }

  .empty-title {
    font-size: 18px;
    font-weight: 500;
    color: #111827;
    margin-bottom: 8px;
  }

  .empty-description {
    font-size: 14px;
    color: #6b7280;
  }

  .empty-state-content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

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

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
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