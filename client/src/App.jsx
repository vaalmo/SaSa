import { Route, Routes } from "react-router-dom";
import Auth from "./sections/Auth";
import Home from "./sections/Home";
import Businesses from "./sections/Businesses";
import AdminDashboard from "./sections/AdminDashboard"; // Importa tu componente del Admin Dashboard
import Business from "./sections/Business";

export default function App() {
  // Definir businessId quemado para desarrollo
  const businessId = "business%232"; // Puedes cambiarlo según necesites
  const productId = "product%233"
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route
          path="/businesses/:businessId"
          element={<Business businessId={businessId} />} // Pasar el businessId como prop
        />
        
        <Route path="/admin/businesses/:businessId" element={<AdminDashboard businessId={businessId} />} />
        <Route path="/admin/businesses/:businessId/products/:productId" element={<AdminDashboard productId={productId} />} />
      </Routes>
    </>
  );
}