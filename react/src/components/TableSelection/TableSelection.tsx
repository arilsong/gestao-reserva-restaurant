import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { Container } from './style';

interface Table {
  id: string;
  number: number;
  capacity: number;
  available: boolean;
  location?: string;
}

interface TableSelectionProps {
  tables: Table[];
  selectedTableId?: string;
  onTableSelect: (tableId: string) => void;
  selectedGuests: number;
  className?: string;
}

const TableSelection: React.FC<TableSelectionProps> = ({
  tables,
  selectedTableId,
  onTableSelect,
  selectedGuests,
  className = ''
}) => {

  const availableTables = tables.filter(table => 
    table.available && table.capacity >= selectedGuests
  );

  const handleTableClick = (tableId: string) => {

    onTableSelect(selectedTableId === tableId ? '' : tableId);
  };

  if (availableTables.length === 0) {
    return (
      <div className={`table-selection ${className}`}>
        <div className="table-selection-header">
          <label className="table-selection-label">Selecionar Mesa</label>
        </div>
        <div className="no-tables-message">
          <p>Não há mesas disponíveis para {selectedGuests} pessoa{selectedGuests !== 1 ? 's' : ''}</p>
          <p className="suggestion">Tente alterar o número de convidados</p>
        </div>
      </div>
    );
  }

  return (
        <Container>
    <div className={`table-selection ${className}`}>
      <div className="table-selection-header">
        <label className="table-selection-label">
          Selecionar Mesa ({availableTables.length} disponível{availableTables.length !== 1 ? 'is' : ''})
        </label>
      </div>
      
      <div className="tables-grid">
        {availableTables.map((table) => (
          <div
            key={table.id}
            className={`table-card ${selectedTableId === table.id ? 'table-card-selected' : ''}`}
            onClick={() => handleTableClick(table.id)}
          >
            <div className="table-card-header">
              <div className="table-number">Mesa {table.number}</div>
              {selectedTableId === table.id && (
                <CheckCircle className="table-selected-icon" size={16} />
              )}
            </div>
            
            <div className="table-card-info">
              <div className="table-capacity-info">
                <Users size={14} />
                <span>Até {table.capacity}</span>
              </div>
              
              {table.location && (
                <div className="table-location-info">
                  <span className="table-location-tag">{table.location}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {selectedTableId && (
        <div className="table-selection-info">
          <p className="table-selected-text">
            Mesa {availableTables.find(t => t.id === selectedTableId)?.number} selecionada
          </p>
        </div>
      )}
    </div>
    </Container>
  );
};

export default TableSelection;