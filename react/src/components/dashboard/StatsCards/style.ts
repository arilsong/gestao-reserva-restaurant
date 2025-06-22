import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }

  .card-container {
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  .card-content {
    padding: 16px;
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
  }

  .icon {
    width: 16px;
    height: 16px;

    &.calendar {
      color: #9ca3af;
    }

    &.confirmed {
      color: #22c55e;
    }

    &.pending {
      color: #eab308;
    }

    &.cancelled {
      color: #ef4444;
    }

    &.revenue {
      color: #3b82f6;
    }

    &.party-size {
      color: #8b5cf6;
    }
  }

  .value {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
  }
`;