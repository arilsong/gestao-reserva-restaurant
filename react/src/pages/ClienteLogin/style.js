import styled from "styled-components";

export const Container = styled.div`

    min-height: 100vh;
    background: linear-gradient(to bottom right, #eff6ff, #ffffff, #f0fdf4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;


    .form-section {
    width: 100%;
    max-width: 448px;
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
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.24), 0 4px 6px -2px rgba(0, 0, 0, 0.13);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 15px;
    padding-top: 30px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: none;
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

    .input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    }

    .input:focus {
    border-color: #2563eb;
    }

    .input::placeholder {
    color: #9ca3af;
    }

    .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    }

    .checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    }

    .checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    accent-color: #2563eb;
    }

    .forgot-password {
    background: none;
    border: none;
    color: #2563eb;
    cursor: pointer;
    }

    .forgot-password:hover {
    color: #1d4ed8;
    }

    .submit-button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #2563eb, #16a34a);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    }

    .submit-button:hover {
    background: linear-gradient(to right, #1d4ed8, #15803d);
    }

    .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    }

    .register-section {
    margin-top: 24px;
    text-align: center;
    }

    .register-text {
    color: #4b5563;
    }

    .register-link {
    background: none;
    border: none;
    color: #2563eb;
    font-weight: 500;
    cursor: pointer;
    }

    .register-link:hover {
    color: #1d4ed8;
    }

`