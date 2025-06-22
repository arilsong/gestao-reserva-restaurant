import styled from 'styled-components';

export const Container = styled.div`
  .reviews-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .reviews-header {
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .reviews-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .reviews-content {
    padding: 24px;
  }

  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .review-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .review-author {
    font-size: 16px;
    font-weight: 500;
    color: #111827;
  }

  .review-rating {
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

  .review-comment {
    font-size: 16px;
    color: #4b5563;
  }

  .review-date {
    font-size: 14px;
    color: #6b7280;
  }
`;