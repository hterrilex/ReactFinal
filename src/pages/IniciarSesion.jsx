
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import "./IniciarSesion.css"; 

export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion("admin");
      navigate("/dashboard");
    } else if (
      formulario.nombre &&
      formulario.email &&
      formulario.nombre !== "admin"
    ) {
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion(formulario.nombre);

      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/productos");
      }
    } else {
      alert("Credenciales de administrador incorrectas. Usa: admin / 1234@admin");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Inicia sesión</h1>

        <form onSubmit={manejarEnvio} className="login-form">
          <input
            type="text"
            placeholder="Nombre completo"
            value={formulario.nombre}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={formulario.email}
            onChange={(e) =>
              setFormulario({ ...formulario, email: e.target.value })
            }
            required
          />

          <button type="submit" className="btn-primary">
            Iniciar Sesión
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate("/productos")}
          >
            Cancelar
          </button>
        </form>

       
       <p className="credenciales-titulo">
         <strong>Credenciales:</strong> 
        </p>

        <div className="credenciales-contenedor">
    
        {/* Contenedor Izquierdo: Usuario Común */}
        <div className="credenciales-izquierda">
        <strong>Usuario común:</strong> 
        <br />
        Nombre: usuario 
        <br />
        Correo Electronico: prueba@correo.com
        </div>
    
        {/* Contenedor Derecho: Administrador */}
        <div className="credenciales-derecha">
        <strong>Admin:</strong>
        <br />
        Nombre: admin 
        <br />
        Correo Electronico: 1234@admin
        </div>
    
       </div>
      </div>
    </div>
  );
}
