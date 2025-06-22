import styled from 'styled-components';

export const Container = styled.div`

  /* TableSelection.css */
  margin-top: 16px;

.table-selection-header {
  margin-bottom: 12px;
}

.table-selection-label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  display: block;
}

/* Grid de mesas */
.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

/* Card de mesa */
.table-card {
  padding: 12px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.table-card:hover {
  border-color: #d1d5db;
  background: #f9f9f9;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.table-card-selected {
  border-color: #059669 !important;
  background: #f0fdf4 !important;
  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.15) !important;
}

/* Header da mesa */
.table-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.table-number {
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.table-selected-icon {
  color: #059669;
  flex-shrink: 0;
}

/* Informações da mesa */
.table-card-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.table-capacity-info {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  font-size: 12px;
}

.table-capacity-info svg {
  flex-shrink: 0;
}

.table-location-info {
  display: flex;
  justify-content: flex-start;
}

.table-location-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.table-card-selected .table-location-tag {
  background: #d1fae5;
  color: #065f46;
}

/* Informações de seleção */
.table-selection-info {
  text-align: center;
  margin-top: 8px;
}

.table-selected-text {
  color: #059669;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
}

/* Mensagem de não há mesas */
.no-tables-message {
  text-align: center;
  padding: 20px 12px;
  color: #6b7280;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.no-tables-message p {
  margin: 0 0 6px 0;
  font-size: 13px;
  line-height: 1.4;
}

.no-tables-message p:last-child {
  margin-bottom: 0;
}

.no-tables-message .suggestion {
  font-size: 12px;
  color: #9ca3af;
  font-style: italic;
}

/* Responsividade */
@media (max-width: 768px) {
  .tables-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 6px;
  }
  
  .table-card {
    padding: 10px;
    min-height: 70px;
  }
  
  .table-number {
    font-size: 13px;
  }
  
  .table-capacity-info {
    font-size: 11px;
  }
  
  .table-location-tag {
    font-size: 9px;
    padding: 1px 4px;
  }
  
  .table-selection-label {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .tables-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  
  .table-card {
    min-height: 75px;
  }
  
  .no-tables-message {
    padding: 16px 10px;
  }
  
  .no-tables-message p {
    font-size: 12px;
  }
}

/* Variação compacta para sidebar */
.table-selection.compact .tables-grid {
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 6px;
}

.table-selection.compact .table-card {
  padding: 8px;
  min-height: 60px;
}

.table-selection.compact .table-number {
  font-size: 12px;
}

.table-selection.compact .table-capacity-info {
  font-size: 10px;
}

.table-selection.compact .table-location-tag {
  font-size: 8px;
  padding: 1px 3px;
}
`;