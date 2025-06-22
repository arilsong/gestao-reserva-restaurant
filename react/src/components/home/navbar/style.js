import styled from "styled-components";

export const Nav = styled.nav`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 50;


    .navbar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 16px;
    }

    @media (min-width: 640px) {
    .navbar-container {
        padding: 0 24px;
    }
    }

    @media (min-width: 1024px) {
    .navbar-container {
        padding: 0 32px;
    }
    }

    .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    }

    .logo-container {
    display: flex;
    align-items: center;
    gap: 8px;
    }

    .icon-chefhat {
    width: 32px;
    height: 32px;
    color: #2563eb;
    }

    .logo-text {
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(to right, #2563eb, #16a34a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    }

    .nav-links {
    display: flex;
    align-items: center;
    gap: 16px;
    }

    .nav-link {
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    background: none;
    }

    .nav-link.ghost {
    color: #374151;
    }

    .nav-link.ghost:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #111827;
    }

    .nav-link.outline {
    border: 1px solid #d1d5db;
    color: #374151;
    }

    .nav-link.outline:hover {
    border-color: #9ca3af;
    background: rgba(0, 0, 0, 0.05);
    }

    .nav-link.primary {
    background: #2563eb;
    color: white;
    }

    .nav-link.primary:hover {
    background: #1d4ed8;
    }
`