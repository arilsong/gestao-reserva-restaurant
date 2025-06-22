import styled, { css } from 'styled-components';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 256px;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;

  ${({ open }) =>
    open
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-100%);
        `}

  @media (min-width: 1024px) {
    position: static;
    transform: translateX(0);
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sidebar-header {
    padding: 24px;
    border-bottom: 1px solid #e5e7eb;
  }

  .restaurant-name {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
  }

  .cuisine {
    font-size: 14px;
    color: #4b5563;
  }

  .rating-container {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  .icon-star {
    width: 16px;
    height: 16px;
    color: #facc15;
    fill: #facc15;
    margin-right: 4px;
  }

  .rating {
    font-size: 14px;
    font-weight: 500;
    color: #111827;
  }

  .reviews {
    font-size: 14px;
    color: #4b5563;
    margin-left: 4px;
  }

  .sidebar-nav {
    padding: 16px;
    flex: 1;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nav-item {
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #4b5563;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background: #f3f4f6;
    }

    &.active {
      background: #e0f2fe;
      color: #1e40af;
    }
  }

  .sidebar-footer {
    padding: 16px;
    border-top: 1px solid #e5e7eb;
    margin-top: auto;
  }

  .action-button {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.outline {
      background: white;
      color: #374151;
      border: 1px solid #e5e7eb;
      margin-bottom: 8px;

      &:hover {
        background: #f9fafb;
      }
    }
  }

  .icon-edit {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;