import React from "react";
import CardPizza from "./CardPizza";
import Header from "./Header"; // Importa el componente Header

function Home({ pizzas }) {
  return (
    <div>
      {/* Renderiza el Header */}
      <Header />

      {/* Renderiza las pizzas */}
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;
