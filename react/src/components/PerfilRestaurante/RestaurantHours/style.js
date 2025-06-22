import styled from 'styled-components';

export const Container = styled.div`
  .hours-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .hours-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .hours-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .hours-content {
    padding: 24px;
  }

  .hours-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .hours-item {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .hours-day {
    color: #374151;
  }

  .hours-time {
    color: #4b5563;
  }
`;