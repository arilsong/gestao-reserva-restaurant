import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;

  .header-section {
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .header-content {
    max-width: 1280px;
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

  .main-section {
    max-width: 1280px;
    margin: 0 auto;
    padding: 32px 16px;
  }

  .restaurant-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
  }
`;