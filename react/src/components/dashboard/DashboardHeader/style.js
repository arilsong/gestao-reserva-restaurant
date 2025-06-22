import styled from 'styled-components';

export const Container = styled.header`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;

  .header-container {
    padding: 16px 24px;

    @media (max-width: 640px) {
      padding: 16px;
    }
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-button {
    display: none;
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;

    @media (max-width: 1024px) {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }

  .icon-toggle {
    width: 20px;
    height: 20px;
    color: #4b5563;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
  }

  .input-group {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .input {
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    background: white;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }
  }
`;