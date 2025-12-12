import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";

export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();

  const manejarEliminar = (producto) => {
    // Navegar a la página de confirmación de eliminación
    navigate('/eliminar-producto', { state: { producto } });
  };

  const manejarEditar = (producto) => {
    // Navegar al formulario de edición
    navigate('/formulario-producto', { state: { producto } });
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul id="lista-productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            producto={producto}
            esAdmin={esAdmin}
            onEditar={() => manejarEditar(producto)}
            onEliminar={() => manejarEliminar(producto)}
            onAgregarCarrito={() => agregarAlCarrito(producto)}
          />
        ))}
      </ul>
      <CarritoCompras />
    </>
  );
}


const ProductoItem = ({ producto, esAdmin, onEditar, onEliminar, onAgregarCarrito }) => (
  // La lista ahora contiene <div> que actúan como cards
  <li className="card"> 
    {/* 1. Imagen - Mantenemos la etiqueta <img> */}
    <img src={producto.avatar} alt={producto.titulo} className="card-img-top" />
    
    {/* 2. Cuerpo de la Card - Contenedor para título, descripción, precio */}
    <div className="card-body">
      <h5 className="card-title">{producto.titulo}</h5> {/* Usamos producto.titulo */}
      
      {/* Usamos el nombre del producto de tu código, aunque el JSON usaba titulo */}
      <p className="card-text">Autor: {producto.autor}</p> 
      
      <p className="card-text-price"><strong>Precio: ${producto.precio}</strong></p>
      
      {/* 3. Botones Principales */}
      <div className="card-buttons-main">
        
        {/* BOTÓN VER DETALLES  */}
        <Link to={`/productos/${producto.id}`} state={{producto}} className="btn btn-details">
          Ver detalles
        </Link>
        
        {/* BOTÓN COMPRAR  */}
        <button onClick={onAgregarCarrito} className="btn btn-primary-green">
          Comprar
        </button>
      </div>

      {/* 4. BOTONES ADMIN (Editar/Eliminar) */}
      {esAdmin && (
        <div className="btn-admin-container">
          <hr className="admin-hr"/>
          <button onClick={onEditar} className="btn-editar">
            Editar
          </button>
          <button onClick={onEliminar} className="btn-eliminar">
            Eliminar
          </button>
        </div>
      )}
    </div>
  </li>
);