// import React from "react";
// import "../pages/Servicios.css";
// import { Link } from "react-router-dom";

// function Servicios() {
//   const servicios = [
//     {
//       icon: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
//       texto: "Venta de libros físicos y digitales",
//     },
//     {
//       icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
//       texto: "Envíos a domicilio a todo el país",
//     },
//     {
//       icon: "https://cdn-icons-png.flaticon.com/512/1802/1802977.png",
//       texto: "Búsqueda personalizada de títulos difíciles de conseguir",
//     },
//     {
//       icon: "https://cdn-icons-png.flaticon.com/512/3145/3145784.png",
//       texto: "Recomendaciones y armado de kits de regalo",
//     },
//     {
//       icon: "https://cdn-icons-png.flaticon.com/512/1250/1250678.png",
//       texto: "Reservas anticipadas y preventas exclusivas",
//     },
//     {
//       icon: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png",
//       texto: "Asesoramiento para instituciones y compras al por mayor",
//     },
//   ];

//   return (
//     <div className="serv-container">
//       <h1 className="serv-title">Nuestros Servicios</h1>

//       {/* 🔹 Las cards en su contenedor */}
//       <div className="serv-grid">
//         {servicios.map((s, index) => (
//           <div key={index} className="serv-card">
//             <img src={s.icon} alt="icono" className="serv-card-icon" />
//             <p>{s.texto}</p>
//           </div>
//         ))}
//       </div>

//       {/* Boton Volver*/}
//       <div className="btn-volver2-container">
//         <Link to="/">
//           <button className="btn-volver2">Volver al Inicio</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Servicios;
import React from "react";
import "../pages/Servicios.css";
import { Link } from "react-router-dom";

function Servicios() {
  const servicios = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
      titulo: "Venta de Libros",
      texto: "Físicos y digitales con amplia variedad de géneros.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
      titulo: "Envíos Nacionales",
      texto: "Entrega rápida y segura a todo el país.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1802/1802977.png",
      titulo: "Búsqueda Especial",
      texto: "Localizamos títulos difíciles de conseguir.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3145/3145784.png",
      titulo: "Regalos Literarios",
      texto: "Recomendaciones y kits personalizados.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1250/1250678.png",
      titulo: "Reservas Exclusivas",
      texto: "Acceso a preventas y lanzamientos anticipados.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png",
      titulo: "Asesoramiento",
      texto: "Para instituciones y compras al por mayor.",
    },
  ];

  return (
    <div className="serv-container">
      <h1 className="serv-title">Nuestros Servicios</h1>

      <div className="serv-grid">
        {servicios.map((s, index) => (
          <div key={index} className="serv-card">
            <img src={s.icon} alt="icono" className="serv-card-icon" />
            <h3 className="serv-card-title">{s.titulo}</h3>
            <p>{s.texto}</p>
          </div>
        ))}
      </div>

      <div className="btn-volver2-container">
        <Link to="/">
          <button className="btn-volver2">Volver al Inicio</button>
        </Link>
      </div>
    </div>
  );
}

export default Servicios;
