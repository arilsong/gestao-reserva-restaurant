import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Users, MapPin } from 'lucide-react';
import { Container, DialogContent, AlertDialogContent } from './style';

interface Table {
  id: number;
  number: number;
  capacity: number;
  location: string;
  status: string;
  notes: string;
}

interface NewTable {
  number: string;
  capacity: string;
  location: string;
  notes: string;
}

interface RestaurantInfo {
  name: string;
  cuisine: string;
  rating: number;
  totalReviews: number;
}

const DashboardMesas: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isAddTableOpen, setIsAddTableOpen] = useState<boolean>(false);
  const [editingTable, setEditingTable] = useState<Table | null>(null);


  const [tables, setTables] = useState<Table[]>([
    {
      id: 1,
      number: 1,
      capacity: 2,
      location: 'Sala Principal',
      status: 'disponivel',
      notes: 'Mesa próxima à janela',
    },
    {
      id: 2,
      number: 2,
      capacity: 4,
      location: 'Sala Principal',
      status: 'ocupada',
      notes: '',
    },
    {
      id: 3,
      number: 3,
      capacity: 6,
      location: 'Varanda',
      status: 'reservada',
      notes: 'Mesa com vista para o jardim',
    },
    {
      id: 4,
      number: 4,
      capacity: 2,
      location: 'Sala Principal',
      status: 'manutencao',
      notes: 'Cadeira com defeito',
    },
    {
      id: 5,
      number: 5,
      capacity: 8,
      location: 'Sala Privada',
      status: 'disponivel',
      notes: 'Mesa para eventos',
    },
  ]);

  const [newTable, setNewTable] = useState<NewTable>({
    number: '',
    capacity: '',
    location: '',
    notes: '',
  });

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'disponivel': return 'available';
      case 'ocupada': return 'occupied';
      case 'reservada': return 'reserved';
      case 'manutencao': return 'maintenance';
      default: return 'default';
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'disponivel': return 'Disponível';
      case 'ocupada': return 'Ocupada';
      case 'reservada': return 'Reservada';
      case 'manutencao': return 'Manutenção';
      default: return status;
    }
  };

  const handleAddTable = () => {
    if (!newTable.number || !newTable.capacity || !newTable.location) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }

    if (tables.some((table) => table.number === parseInt(newTable.number))) {
      toast({
        title: 'Mesa já existe',
        description: 'Já existe uma mesa com este número.',
        variant: 'destructive',
      });
      return;
    }

    const table: Table = {
      id: tables.length + 1,
      number: parseInt(newTable.number),
      capacity: parseInt(newTable.capacity),
      location: newTable.location,
      status: 'disponivel',
      notes: newTable.notes,
    };

    setTables((prev) => [...prev, table]);
    setNewTable({
      number: '',
      capacity: '',
      location: '',
      notes: '',
    });
    setIsAddTableOpen(false);

    toast({
      title: 'Mesa adicionada',
      description: 'Nova mesa criada com sucesso.',
    });
  };

  const handleEditTable = () => {
    if (!editingTable) return;

    setTables((prev) =>
      prev.map((table) =>
        table.id === editingTable.id ? { ...editingTable } : table
      )
    );
    setEditingTable(null);

    toast({
      title: 'Mesa atualizada',
      description: 'Mesa editada com sucesso.',
    });
  };

  const handleDeleteTable = (tableId: number) => {
    setTables((prev) => prev.filter((table) => table.id !== tableId));

    toast({
      title: 'Mesa removida',
      description: 'Mesa removida com sucesso.',
    });
  };

  const handleStatusChange = (tableId: number, newStatus: string) => {
    setTables((prev) =>
      prev.map((table) =>
        table.id === tableId ? { ...table, status: newStatus } : table
      )
    );

    toast({
      title: 'Status atualizado',
      description: `Status da mesa atualizado para ${getStatusText(newStatus)}.`,
    });
  };

  const getStatusCounts = () => {
    const counts: { [key: string]: number } = {};
    tables.forEach((table) => {
      counts[table.status] = (counts[table.status] || 0) + 1;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  return (
    <Container>
      <div className="main-content">
        <main className="main">
          <div className="header-section">
            <h1 className="main-title">Mesas</h1>
            <p className="main-description">Gerencie as mesas do seu restaurante</p>
          </div>

          <div className="stats-grid">
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Total de Mesas</h3>
                <Users className="icon-users" />
              </header>
              <div className="card-content">
                <div className="stat-value">{tables.length}</div>
              </div>
            </article>
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Disponíveis</h3>
                <div className="status-dot available"></div>
              </header>
              <div className="card-content">
                <div className="stat-value">{statusCounts.disponivel || 0}</div>
              </div>
            </article>
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Ocupadas</h3>
                <div className="status-dot occupied"></div>
              </header>
              <div className="card-content">
                <div className="stat-value">{statusCounts.ocupada || 0}</div>
              </div>
            </article>
            <article className="card-container stat-card">
              <header className="card-header">
                <h3 className="stat-title">Capacidade Total</h3>
                <Users className="icon-users" />
              </header>
              <div className="card-content">
                <div className="stat-value">
                  {tables.reduce((total, table) => total + table.capacity, 0)}
                </div>
              </div>
            </article>
          </div>

          <div className="actions-section">
            <div>
              <h2 className="section-title">Lista de Mesas</h2>
              <p className="section-description">Clique nos status para alterar rapidamente</p>
            </div>
            <button
              className="add-table-button"
              onClick={() => setIsAddTableOpen(true)}
            >
              <Plus className="icon-plus" />
              Adicionar Mesa
            </button>
          </div>

          <article className="card-container">
            <div className="card-content">
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr className="table-header">
                      <th className="table-cell header-cell">Mesa</th>
                      <th className="table-cell header-cell">Capacidade</th>
                      <th className="table-cell header-cell">Localização</th>
                      <th className="table-cell header-cell">Status</th>
                      <th className="table-cell header-cell">Observações</th>
                      <th className="table-cell header-cell">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables.map((table) => (
                      <tr key={table.id} className="table-row">
                        <td className="table-cell">
                          <div className="table-number">Mesa {table.number}</div>
                        </td>
                        <td className="table-cell">
                          <div className="flex-container">
                            <Users className="icon-users" />
                            {table.capacity} pessoa(s)
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="flex-container">
                            <MapPin className="icon-map-pin" />
                            {table.location}
                          </div>
                        </td>
                        <td className="table-cell">
                          <select
                            value={table.status}
                            onChange={(e) => handleStatusChange(table.id, e.target.value)}
                            className="status-select"
                          >
                            <option value="disponivel">Disponível</option>
                            <option value="ocupada">Ocupada</option>
                            <option value="reservada">Reservada</option>
                            <option value="manutencao">Manutenção</option>
                          </select>
                        </td>
                        <td className="table-cell">
                          <div className="notes">{table.notes || '-'}</div>
                        </td>
                        <td className="table-cell">
                          <div className="actions">
                            <button
                              className="action-button edit"
                              onClick={() => setEditingTable(table)}
                            >
                              <Edit className="icon-edit" />
                            </button>
                            <button
                              className="action-button delete"
                              /* onClick={() => setEditingTable({ ...table, deleteConfirm: true })} */
                            >
                              <Trash2 className="icon-trash" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {isAddTableOpen && (
            <DialogContent>
              <header className="dialog-header">
                <h2 className="dialog-title">Nova Mesa</h2>
                <p className="dialog-description">Adicione uma nova mesa ao restaurante</p>
              </header>
              <div className="dialog-content">
                <fieldset className="input-group">
                  <label htmlFor="number" className="label">Número da Mesa *</label>
                  <input
                    id="number"
                    type="number"
                    min="1"
                    value={newTable.number}
                    onChange={(e) => setNewTable((prev) => ({ ...prev, number: e.target.value }))}
                    placeholder="1"
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="capacity" className="label">Capacidade *</label>
                  <input
                    id="capacity"
                    type="number"
                    min="1"
                    value={newTable.capacity}
                    onChange={(e) => setNewTable((prev) => ({ ...prev, capacity: e.target.value }))}
                    placeholder="4"
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="location" className="label">Localização *</label>
                  <select
                    id="location"
                    value={newTable.location}
                    onChange={(e) => setNewTable((prev) => ({ ...prev, location: e.target.value }))}
                    className="select"
                  >
                    <option value="">Selecione a localização</option>
                    <option value="Sala Principal">Sala Principal</option>
                    <option value="Varanda">Varanda</option>
                    <option value="Sala Privada">Sala Privada</option>
                    <option value="Terraço">Terraço</option>
                  </select>
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="notes" className="label">Observações</label>
                  <input
                    id="notes"
                    value={newTable.notes}
                    onChange={(e) => setNewTable((prev) => ({ ...prev, notes: e.target.value }))}
                    placeholder="Observações especiais..."
                    className="input"
                  />
                </fieldset>
              </div>
              <footer className="dialog-footer">
                <button
                  className="cancel-button"
                  onClick={() => setIsAddTableOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  className="submit-button"
                  onClick={handleAddTable}
                >
                  Adicionar Mesa
                </button>
              </footer>
            </DialogContent>
          )}

          {editingTable && (
            <DialogContent>
              <header className="dialog-header">
                <h2 className="dialog-title">Editar Mesa {editingTable.number}</h2>
                <p className="dialog-description">Atualize as informações da mesa</p>
              </header>
              <div className="dialog-content">
                <fieldset className="input-group">
                  <label htmlFor="edit-number" className="label">Número da Mesa</label>
                  <input
                    id="edit-number"
                    type="number"
                    min="1"
                    value={editingTable.number}
                    onChange={(e) =>
                      setEditingTable((prev) => ({ ...prev!, number: parseInt(e.target.value) }))
                    }
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="edit-capacity" className="label">Capacidade</label>
                  <input
                    id="edit-capacity"
                    type="number"
                    min="1"
                    value={editingTable.capacity}
                    onChange={(e) =>
                      setEditingTable((prev) => ({ ...prev!, capacity: parseInt(e.target.value) }))
                    }
                    className="input"
                  />
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="edit-location" className="label">Localização</label>
                  <select
                    id="edit-location"
                    value={editingTable.location}
                    onChange={(e) =>
                      setEditingTable((prev) => ({ ...prev!, location: e.target.value }))
                    }
                    className="select"
                  >
                    <option value="Sala Principal">Sala Principal</option>
                    <option value="Varanda">Varanda</option>
                    <option value="Sala Privada">Sala Privada</option>
                    <option value="Terraço">Terraço</option>
                  </select>
                </fieldset>
                <fieldset className="input-group">
                  <label htmlFor="edit-notes" className="label">Observações</label>
                  <input
                    id="edit-notes"
                    value={editingTable.notes}
                    onChange={(e) =>
                      setEditingTable((prev) => ({ ...prev!, notes: e.target.value }))
                    }
                    className="input"
                  />
                </fieldset>
              </div>
              <footer className="dialog-footer">
                <button
                  className="cancel-button"
                  onClick={() => setEditingTable(null)}
                >
                  Cancelar
                </button>
                <button
                  className="submit-button"
                  onClick={handleEditTable}
                >
                  Salvar Alterações
                </button>
              </footer>
            </DialogContent>
          )}

          {/* {editingTable?.deleteConfirm && (
            <AlertDialogContent>
              <header className="alert-header">
                <h2 className="alert-title">Confirmar Exclusão</h2>
                <p className="alert-description">
                  Tem certeza que deseja remover a Mesa {editingTable.number}? Esta ação não pode ser desfeita.
                </p>
              </header>
              <footer className="alert-footer">
                <button
                  className="cancel-button"
                  onClick={() => setEditingTable(null)}
                >
                  Cancelar
                </button>
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDeleteTable(editingTable.id);
                    setEditingTable(null);
                  }}
                >
                  Remover Mesa
                </button>
              </footer>
            </AlertDialogContent>
          )} */}
        </main>
      </div>
    </Container>
  );
};

export default DashboardMesas;