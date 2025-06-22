import styled from 'styled-components';

export const Container = styled.div`
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

  .view-all-button {
    padding: 8px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 14px;
    background: white;
    color: #374151;
    cursor: pointer;

    &:hover {
      background: #f9fafb;
    }
  }

  .card-content {
    padding: 24px;
  }

  .reviews-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .review-item {
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }
  }

  .review-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .review-author {
    font-size: 16px;
    font-weight: 500;
    color: #111827;
  }

  .review-stars {
    display: flex;
    align-items: center;
  }

  .icon-star {
    width: 16px;
    height: 16px;

    &.filled {
      color: #facc15;
      fill: #facc15;
    }

    &.empty {
      color: #d1d5db;
    }
  }

  .review-comment {
    font-size: 14px;
    color: #4b5563;
  }

  .review-date {
    font-size: 12px;
    color: #6b7280;
    margin-top: 4px;
  }
`;