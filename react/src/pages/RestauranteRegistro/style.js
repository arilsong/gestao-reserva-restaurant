import styled from "styled-components";

export const Container = styled.div`

    min-height: 100vh;
    background: linear-gradient(to bottom right, #f3e8ff, #ffffff, #fff7ed);
    padding: 32px 16px;


    .form-section {
    max-width: 672px;
    margin: 0 auto;
    }

    .back-link {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #4b5563;
    margin-bottom: 24px;
    font-size: 16px;
    cursor: pointer;
    }

    .back-link:hover {
    color: #111827;
    }

    .icon-arrow {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    }

    .card-container {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 8px;
    }

    .card-header {
    text-align: center;
    padding-bottom: 24px;
    }

    .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;
    }

    .icon-building {
    width: 32px;
    height: 32px;
    color: #9333ea;
    }

    .logo-text {
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(to right, #9333ea, #ea580c);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    }

    .card-title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    }

    .card-description {
    color: #4b5563;
    }

    .card-content {
    padding: 24px;
    }

    .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    }

    .grid-container {
    display: grid;
    gap: 16px;
    }

    @media (min-width: 768px) {
    .grid-container:nth-child(1),
    .grid-container:nth-child(2),
    .grid-container:nth-child(6) {
        grid-template-columns: repeat(2, 1fr);
    }
    .grid-container:nth-child(4) {
        grid-template-columns: repeat(3, 1fr);
    }
    }

    .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: none;
    position: relative;
    transform: translateY(calc(var(--index) * 2px));
    transition: transform 0.3s ease;
    }

    .input-group:hover {
    transform: translateY(calc((var(--index) * 2px) - 4px));
    z-index: 1;
    }

    .label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    }

    .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    }

    .icon-input {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 16px;
    height: 16px;
    }

    .textarea-icon {
    top: 16px;
    transform: none;
    }

    .input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    }

    .input:focus {
    border-color: #9333ea;
    }

    .input::placeholder {
    color: #9ca3af;
    }

    .select {
    width: 100%;
    padding: 12px 16px;
    border: 4px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: white;
    appearance: none;
    cursor: pointer;
    }

    .select:focus {
    border-color: #9333ea;
    }

    .select-wrapper {
    position: relative;
    }

    .select-wrapper::after {
    content: '▼';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #4b5563;
    pointer-events: none;
    }

    .textarea {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    min-height: 80px;
    resize: vertical;
    }

    .textarea:focus {
    border-color: #9333ea;
    }

    .textarea::placeholder {
    color: #9ca3af;
    }

    .terms-container {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
    }

    .checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    accent-color: #9333ea;
    margin-top: 4px;
    }

    .terms-text {
    color: #4b5563;
    }

    .terms-link {
    background: none;
    border: none;
    color: #9333ea;
    cursor: pointer;
    }

    .terms-link:hover {
    color: #7e22ce;
    }

    .submit-button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #9333ea, #ea580c);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    }

    .submit-button:hover {
    background: linear-gradient(to right, #7e22ce, #c2410c);
    }

    .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    }

    .login-section {
    margin-top: 24px;
    text-align: center;
    }

    .login-text {
    color: #4b5563;
    }

    .login-link {
    background: none;
    border: none;
    color: #9333ea;
    font-weight: 500;
    cursor: pointer;
    }

    .login-link:hover {
    color: #7e22ce;
    }

`