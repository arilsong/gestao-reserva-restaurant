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
    border-radius: 8px;

    &.stat-card {
      padding: 16px;
    }

    &.distribution-card {
      margin-bottom: 24px;
    }

    &.filter-card {
      margin-bottom: 24px;
    }

    &.review-card {
      margin-bottom: 16px;
    }

    &.empty-state {
      text-align: center;
      padding: 32px;
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

  .card-content {
    padding: 24px;
  }

  .stat-title {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .stat-value {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
  }

  .stat-description {
    font-size: 12px;
    color: #6b7280;
  }

  .icon-star {
    width: 16px;
    height: 16px;
    color: #facc15;

    &.five-star {
      color: #22c55e;
    }

    &.filled {
      color: #facc15;
      fill: #facc15;
    }

    &.empty {
      color: #d1d5db;
    }
  }

  .icon-message,
  .icon-trending {
    width: 16px;
    height: 16px;
    color: #6b7280;
  }

  .rating-stars {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  .distribution-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .distribution-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .rating-label {
    display: flex;
    align-items: center;
    width: 64px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .progress-container {
    flex: 1;
    background: #e5e7eb;
    border-radius: 9999px;
    height: 8px;
  }

  .progress-fill {
    background: #facc15;
    height: 8px;
    border-radius: 9999px;
  }

  .count {
    font-size: 14px;
    color: #6b7280;
    width: 48px;
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
    width: 128px;
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

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .review-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .review-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
  }

  .badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;

    &.respondida {
      background: #dcfce7;
      color: #15803d;
    }

    &.pendente {
      background: #fefce8;
      color: #a16207;
    }
  }

  .review-meta {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .rating-value {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 500;

    &.rating-5,
    &.rating-4 {
      color: #15803d;
    }

    &.rating-3 {
      color: #ca8a04;
    }

    &.rating-2,
    &.rating-1 {
      color: #b91c1c;
    }
  }

  .date {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #6b7280;
  }

  .icon-calendar {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    color: #6b7280;
  }

  .comment {
    font-size: 16px;
    color: #374151;
    margin-bottom: 16px;
  }

  .reply {
    background: #eff6ff;
    border-left: 4px solid #3b82f6;
    padding: 16px;
    margin-bottom: 16px;
  }

  .reply-title {
    font-size: 14px;
    font-weight: 500;
    color: #1e40af;
    margin-bottom: 8px;
  }

  .reply-text {
    font-size: 14px;
    color: #1e40af;
  }

  .reply-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .reply-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
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

  .button-group {
    display: flex;
    gap: 8px;
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

  .reply-button {
    display: flex;
    align-items: center;
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

  .icon-message {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
`;