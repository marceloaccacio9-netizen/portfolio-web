import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container className="text-center">
        <p className="mb-0">© 2025 Portfolio Escolar - Ensino Médio Técnico</p>
        <p className="mb-0">Desenvolvido com React + Bootstrap + Python</p>
      </Container>
    </footer>
  );
}

export default Footer;