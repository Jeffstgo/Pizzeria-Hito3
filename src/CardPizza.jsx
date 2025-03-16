import React from "react";

const CardPizza = ({ pizza }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={pizza.imagen} className="card-img-top" alt={pizza.nombre} />
        <div className="card-body">
          <h5 className="card-title">{pizza.nombre}</h5>
          <ul>
            {pizza.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <p>
            <strong>Precio:</strong> ${pizza.precio}
          </p>
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-success ms-2">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;