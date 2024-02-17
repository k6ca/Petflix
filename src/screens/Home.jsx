import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para navegação

function Home() {
  return (
    <main>
      <div className="center-center">
        <img className="logo" src="petflix-black.png" alt="Petflix" />
      </div>
      <div className="center-center menu">
        <Link to="/cachorro">
          <img className="link-img dog" src="dog.jpeg" alt="Cachorro" />
          <p>Cachorro</p>
        </Link>
        <Link to="/gato">
          <img className="link-img cat" src="gato.jpeg" alt="Gato" />

          <p>Gato</p>
        </Link>
      </div>
    </main>
  );
}

export default Home;
