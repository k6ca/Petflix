import React from 'react';

function Cachorro() {
  return (
    <main className="content-page">
      <header>
        <img className="logo" src="petflix-black.png" alt="Petflix" />
          <p>x</p>
       
        
      </header>
      <div className="center-center">
        <iframe
          title="Cachoorro Video"
          width="560"
          height="315"
          src="/dog-video.mp4"  // Ajuste conforme necessário
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}

export default Cachorro;
