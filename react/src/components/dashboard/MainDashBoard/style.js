import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  display: flex;

  .main-content {
    flex: 1;

    @media (min-width: 1024px) {
      margin-left: 0;
    }
  }

  .main {
    padding: 24px 16px;
  }
`;