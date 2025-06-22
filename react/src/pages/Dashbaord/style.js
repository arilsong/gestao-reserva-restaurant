import styled from 'styled-components';

export const Container = styled.div`
  /* Container principal */
  display: flex;
  height: 100vh;
  background-color: #f3f4f6; /* bg-gray-100 */

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


/* Sidebar fixo */
.sidebar {
  width: 16rem; /* w-64 = 256px */
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  flex-shrink: 0;
}

.sidebar-header {
  padding: 1.5rem; /* p-6 */
  border-bottom: 1px solid #e5e7eb; /* border-b */
}

.sidebar-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  color: #1f2937; /* text-gray-800 */
  margin: 0;
}

/* Navegação */
.sidebar-nav {
  margin-top: 1.5rem; /* mt-6 */
}

.nav-button {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  text-align: left;
  transition: all 0.2s ease-in-out; /* transition-colors */
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  color: #374151; /* text-gray-700 */
}

.nav-button:hover {
  background-color: #f9fafb; /* hover:bg-gray-50 */
}

.nav-button.active {
  background-color: #eff6ff; /* bg-blue-50 */
  color: #2563eb; /* text-blue-600 */
  border-right: 2px solid #2563eb; /* border-r-2 border-blue-600 */
}

.nav-icon {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  margin-right: 0.75rem; /* mr-3 */
}

/* Conteúdo principal */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Header */
.header {
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  border-bottom: 1px solid #e5e7eb; /* border-b */
  padding: 1rem 1.5rem; /* px-6 py-4 */
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
  text-transform: capitalize;
  margin: 0;
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


.user-avatar {
  width: 2rem; /* w-8 */
  height: 2rem; /* h-8 */
  background-color: #3b82f6; /* bg-blue-500 */
  border-radius: 50%; /* rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-avatar span {
  color: white;
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
}

/* Área de conteúdo */
.content-area {
  flex: 1;
  overflow-y: auto;
  background-color: #f9fafb; /* bg-gray-50 */
}

/* Responsividade básica */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .main-content {
    width: 100%;
  }
}

/* Estados de foco para acessibilidade */
.nav-button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.nav-button:focus:not(:focus-visible) {
  outline: none;
}
`;