import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Dashboard.css'; // Import del CSS

export default function Dashboard() {
  const { usuario, cerrarSesion } = useAuthContext();
  const navigate = useNavigate();
  const tokenActual = localStorage.getItem('authToken');

  const manejarAgregarProducto = () => {
    navigate('/formulario-producto');
  };

  return (
    <div className="dash-container">
      <h1 className="dash-title">Dashboard Administrativo</h1>

      <div className="dash-box">
        <p><strong>Sesión iniciada como:</strong> {usuario.nombre}</p>

        {/* TOKEN */}
        <div className="dash-token">
          <strong>Token de autenticación:</strong>
          <br />
          <code>{tokenActual}</code>
        </div>

        {/* ACCIONES */}
        <div className="dash-actions">
          <h3>Acciones:</h3>
          <div className="dash-buttons">
            <button onClick={manejarAgregarProducto} className="btn-red">
              <span className="icon">➕</span> Agregar Productos
            </button>

            <Link to="/productos" className="btn-green">
              <span className="icon">📚</span> Ver / Editar / Eliminar Productos
            </Link>
          </div>
        </div>

        <hr />

        {/* CERRAR SESIÓN */}
        <button onClick={cerrarSesion} className="btn-red">
          <span className="icon">🔒</span> Cerrar sesión
        </button>
      </div>
    </div>
  );
}
