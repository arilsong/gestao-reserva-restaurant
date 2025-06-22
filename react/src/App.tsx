import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {AuthProvider} from "./context/AuthContext.tsx"
import RestauranteLogin from "./pages/RestauranteLogin/RestauranteLogin.tsx";
import Index from "./pages/Index.tsx";
import ClienteLogin from "./pages/ClienteLogin/ClienteLogin.tsx";
import ClienteRegistro from "./pages/ClienteRegistro/ClienteRegistro.tsx";
import RestauranteRegistro from "./pages/RestauranteRegistro/RestauranteRegistro.tsx";
import PerfilRestaurante from "./pages/PerfilRestaurante/PerfilRestaurante.tsx";
import RestauranteDashboard from "./components/dashboard/MainDashBoard/MainDashBoard.tsx";
import RestauranteReservas from "./components/dashboard/DashboardReservas/DashboardReservas.tsx";
import RestauranteMesas from "./components/dashboard/DashboardMesas/DashboardMesas.tsx";
import RestauranteAvaliacoes from "./components/dashboard/AvaliacoesDashboard/AvaliacoesDashboard.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import PerfilUsuario from "./pages/PerfilUsuario/PerfilUsuario.tsx";
import DashboardProntu from "./pages/Dashbaord/Dashbaord.tsx";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cliente/login" element={<ClienteLogin />} />
        <Route path="/cliente/registro" element={<ClienteRegistro />} />
        <Route path="/restaurante/login" element={<RestauranteLogin  />} />
        <Route path="/restaurante/registro" element={<RestauranteRegistro  />} />
        <Route path="/perfil-restaurante/:id" element={<PerfilRestaurante />} />
         <Route path="/cliente/perfil" element={<PerfilUsuario />} />
        <Route path="/restaurante/dashboard" element={ <RestauranteDashboard /> } />
        <Route path="/restaurante/dashboard1" element={ <DashboardProntu /> } />
        <Route path="/restaurante/reservas" element={<RestauranteReservas />} />
        <Route path="/restaurante/mesas" element={<RestauranteMesas />} />
        <Route path="/restaurante/avaliacoes" element={<RestauranteAvaliacoes />} />
        <Route path="/restaurante/avaliacoes" element={<RestauranteAvaliacoes />} />
      </Routes>
    </AuthProvider> 
  </BrowserRouter>
);

export default App;
