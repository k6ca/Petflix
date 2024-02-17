import React from 'react';

function Gato() {
  return (
    <main className="content-page">
      <header>
        <img className="logo" src="petflix-black.png" alt="Petflix" />
        <p>x</p>
      </header>
      <div className="center-center">
        <iframe
          title="Gato Video"
          width="560"
          height="315"
          src="/gato-video.mp4"  // Ajuste conforme necessário
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

export default Gato;
