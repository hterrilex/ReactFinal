
import React from "react";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Navbar from "./pages/Navbar";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/DetalleProductos";
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import Footer from "./pages/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
import Carrito from "./pages/Carrito";
import FormularioProducto from "./components/FormularioProducto";
import EliminarProducto from "./components/EliminarProducto";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>

          {/* LAYOUT STICKY */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />

            {/* CONTENIDO QUE SE EXPANDE */}
            <div style={{ flex: 1 }}>
              <Routes>
                {/* RUTAS PÚBLICAS */}
                <Route path="/" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:id" element={<ProductoDetalle />} />
                <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
                <Route path="/iniciar-sesion" element={<IniciarSesion />} />
                <Route path="/carrito" element={<Carrito />} />


                {/* RUTAS PROTEGIDAS */}
                <Route
                  path="/pagar"
                  element={
                    <RutaProtegida>
                      <Pagar />
                    </RutaProtegida>
                  }
                />

                <Route
                  path="/dashboard"
                  element={
                    <RutaProtegida soloAdmin={true}>
                      <Dashboard />
                    </RutaProtegida>
                  }
                />

                {/* CRUD */}
                <Route
                  path="/formulario-producto"
                  element={
                    <RutaProtegida>
                      <FormularioProducto />
                    </RutaProtegida>
                  }
                />

                <Route
                  path="/eliminar-producto"
                  element={
                    <RutaProtegida>
                      <EliminarProducto />
                    </RutaProtegida>
                  }
                />

                {/* fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>

            {/* FOOTER SIEMPRE ABAJO */}
            <Footer />
          </div>
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

