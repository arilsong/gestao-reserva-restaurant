import styled from 'styled-components';

export const Container = styled.div`
  .hero-section {
    position: relative;
    width: 100%;
    height: 400px;
  }

  .hero-image {
    width: 100%;
    height: 100%;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    padding: 32px;
    color: white;
  }

  .hero-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .hero-meta {
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
    font-size: 16px;
  }

  .hero-cuisine,
  .hero-price {
    color: #f3f4f6;
  }

  .hero-rating {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .icon-star {
    width: 16px;
    height: 16px;
    color: #f59e0b;
    fill: #f59e0b;
  }

  .hero-location {
    font-size: 14px;
    color: #f3f4f6;
    margin-bottom: 16px;
  }

  .hero-button {
    padding: 12px 24px;
    background: linear-gradient(to right, #2563eb, #16a34a);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to right, #1d4ed8, #15803d);
    }
  }
`;