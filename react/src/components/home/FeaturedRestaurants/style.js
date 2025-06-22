import styled from "styled-components";

export const Container = styled.section`
    padding: 64px 16px;
    background: rgba(255, 255, 255, 0.5);


    .restaurants-container {
    max-width: 1280px;
    margin: 0 auto;
    }

    .restaurants-header {
    text-align: center;
    margin-bottom: 48px;
    }

    .restaurants-title {
    font-size: 30px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 16px;
    }

    .restaurants-description {
    color: #4b5563;
    }

    .restaurants-grid {
    display: grid;
    gap: 32px;
    }

    @media (min-width: 768px) {
    .restaurants-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    }

    @media (min-width: 1024px) {
    .restaurants-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    }

    .restaurant-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.3s ease;
    }

    .restaurant-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
    }

    .restaurant-image-wrapper {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    }

    .restaurant-image {
    width: 100%;
    height: 192px;
    object-fit: cover;
    transition: transform 0.3s ease;
    }

    .restaurant-card:hover .restaurant-image {
    transform: scale(1.05);
    }

    .price-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: white;
    color: #111827;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    }

    .restaurant-header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    }

    .restaurant-info {
    display: flex;
    flex-direction: column;
    }

    .restaurant-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4px;
    }

    .restaurant-location {
    display: flex;
    align-items: center;
    color: #4b5563;
    font-size: 14px;
    }

    .icon-map-pin {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    }

    .restaurant-rating {
    display: flex;
    align-items: center;
    }

    .icon-star {
    width: 16px;
    height: 16px;
    color: #facc15;
    fill: #facc15;
    }

    .rating-value {
    margin-left: 4px;
    font-size: 14px;
    font-weight: 500;
    }

    .restaurant-content {
    padding: 0 16px 16px;
    }

    .restaurant-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    }

    .cuisine-badge {
    background: #e5e7eb;
    color: #374151;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    }

    .available-tables {
    display: flex;
    align-items: center;
    color: #4b5563;
    font-size: 14px;
    }

    .icon-users {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    }

    .availability-button {
    width: 100%;
    padding: 8px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    }

    .availability-button:hover {
    background: #1d4ed8;
    }

`