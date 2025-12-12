import React, { createContext, useContext, useState, useMemo } from "react";

// 1. Crear el Contexto
export const CartContext = createContext();

// ----------------------------------------------------
// 🔧 FUNCIONES DE AYUDA (Fuera del componente principal)
// ----------------------------------------------------

/**
 * Función para limpiar precios y convertir a número ENTERO (sin decimales).
 * Elimina todos los caracteres que no sean dígitos para evitar errores de formato local.
 * @param {string | number} precioString El precio a limpiar.
 * @returns {number} El precio como número entero limpio.
 */


const limpiarPrecio = (precioString) => {
  if (typeof precioString === "number") return Math.round(precioString);

  const str = String(precioString)
    .replace(/\./g, '')     // elimina puntos (miles)
    .replace(/,/g, '.');    // convierte coma decimal en punto

  const num = parseFloat(str);
  return isNaN(num) ? 0 : Math.round(num);
};


/**
 * Normaliza un ítem del producto asegurando que precio y cantidad sean números.
 
 */
const normalizarItem = (item) => {
  const normalizado = {
    ...item,
    // Usa la función de limpieza para asegurar un número entero
    precio: limpiarPrecio(item.precio), 
    cantidad:
      item.cantidad !== undefined ? Number(item.cantidad) : 1,
  };
  return normalizado;
};


// 2. Componente Proveedor Principal
export function CartProvider({ children }) {
  // 📦 Estado inicial del carrito
  const [carrito, setCarrito] = useState([]);


  // -------------------------------------------
  // 🔥 AGREGAR PRODUCTO (con manejo de existencia)
  // -------------------------------------------
  const agregarAlCarrito = (producto) => {
    const limpio = normalizarItem(producto); // normalizarItem ahora está definido

    setCarrito((prev) => {
      const existente = prev.find((i) => i.id === limpio.id);

      if (existente) {
        // ✅ INMUTABILIDAD
        return prev.map((i) =>
          i.id === limpio.id
            ? { ...i, cantidad: Number(i.cantidad) + 1 }
            : i
        );
      }

      // ✅ INMUTABILIDAD
      return [...prev, limpio];
    });
  };

  // -------------------------------------------
  // 🔼 AUMENTAR CANTIDAD
  // -------------------------------------------
  const agregarCantidad = (id) => {
    setCarrito(currentCarrito => {
        // ✅ INMUTABILIDAD
        return currentCarrito.map(item => {
            if (item.id === id) {
                return { ...item, cantidad: Number(item.cantidad) + 1 };
            }
            return item;
        });
    });
  };

  // -------------------------------------------
  // 🔽 DISMINUIR CANTIDAD (si queda 0 se elimina)
  // -------------------------------------------
  const quitarCantidad = (id) => {
    setCarrito(currentCarrito => {
        // ✅ INMUTABILIDAD
        return currentCarrito.map(item => {
            if (item.id === id) {
                return { ...item, cantidad: Number(item.cantidad) - 1 };
            }
            return item;
        })
        // ✅ FILTRADO INMUTABLE
        .filter(item => item.cantidad > 0); 
    });
  };

  // -------------------------------------------
  // ❌ ELIMINAR PRODUCTO
  // -------------------------------------------
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((i) => i.id !== id));
  };

  // -------------------------------------------
  // 🧹 VACIAR CARRITO
  // -------------------------------------------
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // -------------------------------------------
  // 🧮 TOTAL GENERAL (usa useMemo para optimización)
  // -------------------------------------------
  const total = useMemo(() => {
    const calculado = carrito.reduce((sum, item) => {
      const p = Number(item.precio) || 0;
      const q = Number(item.cantidad) || 0;
      return sum + p * q;
    }, 0);
    return calculado;
  }, [carrito]); // Se recalcula solo cuando 'carrito' cambia

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        agregarCantidad,
        quitarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook para consumir el Contexto
export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de CartProvider");
  }
  return context;
}