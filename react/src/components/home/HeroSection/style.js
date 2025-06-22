import styled from "styled-components";

export const Container = styled.section`
    padding: 80px 16px;
    position: relative;


    .hero-container {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    }

    .hero-header {
    margin-bottom: 32px;
    }

    .hero-title {
    font-size: 48px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 24px;
    }

    @media (min-width: 768px) {
    .hero-title {
        font-size: 64px;
    }
    }

    .hero-title-highlight {
    display: block;
    background: linear-gradient(to right, #2563eb, #16a34a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    }

    .hero-description {
    font-size: 20px;
    color: #4b5563;
    max-width: 768px;
    margin: 0 auto 32px;
    }

    .search-container {
    max-width: 672px;
    margin: 0 auto 48px;
    }

    .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    }

    .icon-search {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 20px;
    height: 20px;
    }

    .search-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    font-size: 18px;
    border: 2px solid #e5e7eb;
    border-radius: 9999px;
    outline: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .search-input:focus {
    border-color: #2563eb;
    }

    .search-input::placeholder {
    color: #9ca3af;
    }

    .search-button {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px 32px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 9999px;
    font-size: 16px;
    cursor: pointer;
    }

    .search-button:hover {
    background: #1d4ed8;
    }

    .stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: 672px;
    margin: 0 auto;
    }

    .stat-item {
    text-align: center;
    }

    .stat-value {
    font-size: 30px;
    font-weight: 700;
    }

    .stat-value:nth-child(1) {
    color: #2563eb;
    }

    .stat-value:nth-child(2) {
    color: #16a34a;
    }

    .stat-value:nth-child(3) {
    color: #7c3aed;
    }

    .stat-label {
    color: #4b5563;
    }

`