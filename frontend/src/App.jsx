import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Linguagens from './pages/Linguagens';
import CienciasNatureza from './pages/CienciasNatureza';
import Matematica from './pages/Matematica';
import CienciasHumanas from './pages/CienciasHumanas';
import Tecnico from './pages/Tecnico';
import Contato from './pages/Contato';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/linguagens" element={<Linguagens />} />
            <Route path="/ciencias-natureza" element={<CienciasNatureza />} />
            <Route path="/matematica" element={<Matematica />} />
            <Route path="/ciencias-humanas" element={<CienciasHumanas />} />
            <Route path="/tecnico" element={<Tecnico />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;