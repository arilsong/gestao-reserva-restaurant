import React from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './style';

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <Container>
      <div className="header-container">
        <div className="flex-container">
          <button
            className="toggle-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="icon-toggle" /> : <Menu className="icon-toggle" />}
          </button>
          <h1 className="title">Dashboard</h1>
          <div className="input-group">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="input"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardHeader;