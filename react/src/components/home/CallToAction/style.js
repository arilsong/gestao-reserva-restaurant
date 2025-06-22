import styled from "styled-components";

export const Container = styled.section`

    padding: 64px 16px;
    background: linear-gradient(to right, #2563eb, #16a34a);


    .cta-container {
    max-width: 896px;
    margin: 0 auto;
    text-align: center;
    color: white;
    }

    .cta-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 16px;
    }

    .cta-description {
    font-size: 20px;
    margin-bottom: 32px;
    opacity: 0.9;
    }

    .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    }

    @media (min-width: 640px) {
    .cta-buttons {
        flex-direction: row;
    }
    }

    .cta-button {
    padding: 12px 32px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    }

    .cta-button.secondary {
    background: #4b5563;
    color: white;
    }

    .cta-button.secondary:hover {
    background: #374151;
    }

    .cta-button.outline {
    border: 1px solid white;
    color: white;
    background: none;
    }

    .cta-button.outline:hover {
    background: white;
    color: #2563eb;
    }

`