

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Carrito() {
  const {
    carrito,
    vaciarCarrito,
    agregarCantidad,
    quitarCantidad,
    eliminarDelCarrito,
    total,
  } = useCartContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  // Función de ayuda para formatear números
  // const formatearMoneda = (numero) => {
  //   const num = Number(numero) || 0;
  //   return num.toLocaleString("es-AR", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   });
  // };

  
const formatearMoneda = (numero) => {
    const num = Math.round(Number(numero)) || 0; 
    return num.toLocaleString("es-AR", {
        // Al dejarlo vacío, se usa el formato por defecto del locale, 
        // que generalmente omite decimales si el número es entero.
    });
};
  return (
    <div>
      <hr />
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío. ¡Añade algunos libros!</p>
      ) : (
        <>
          {carrito.map((item) => {
            const precioNum = Number(item.precio) || 0;
            const cantidadNum = Number(item.cantidad) || 0;

            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {/* Título y precio unitario */}
                <span style={{ flexGrow: 1 }}>
                  {item.titulo} (Precio Unitario: ${formatearMoneda(precioNum)})
                </span>

                {/* Controles de cantidad */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <button onClick={() => quitarCantidad(item.id)}>-</button>
                  <span style={{ fontWeight: "bold" }}>{cantidadNum}</span>
                  <button onClick={() => agregarCantidad(item.id)}>+</button>
                </div>

                {/* Subtotal calculado directamente */}
                <span
                  style={{
                    fontWeight: "bold",
                    minWidth: "120px",
                    textAlign: "right",
                  }}
                >
                  PU: ${precioNum}
                  SubT: ${formatearMoneda(precioNum * cantidadNum)}
                </span>

                {/* Botón eliminar */}
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  X
                </button>
              </div>
            );
          })}

          {/* Total Final */}
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderTop: "2px solid #333",
              textAlign: "right",
            }}
          >
            <h3 style={{ margin: "0" }} translate="no">
              Total FINAL: ${formatearMoneda(total)}
            </h3>
          </div>

          {/* Botones de acción */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              onClick={vaciarCarrito}
              style={{
                padding: "10px 20px",
                background: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Vaciar Carrito
            </button>
            <button
              onClick={irAPagar}
              style={{
                padding: "10px 20px",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
