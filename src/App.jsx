import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Cachorro from './screens/Cachorro';
import Gato from './screens/Gato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cachorro" element={<Cachorro />} />
        <Route path="/gato" element={<Gato />} />
      </Routes>
    </Router>
  );
}

export default App;
