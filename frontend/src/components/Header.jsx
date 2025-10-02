import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📚 Portfolio Escolar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Início</Nav.Link>
            <Nav.Link as={Link} to="/linguagens">Linguagens</Nav.Link>
            <Nav.Link as={Link} to="/ciencias-natureza">Ciências da Natureza</Nav.Link>
            <Nav.Link as={Link} to="/matematica">Matemática</Nav.Link>
            <Nav.Link as={Link} to="/ciencias-humanas">Ciências Humanas</Nav.Link>
            <Nav.Link as={Link} to="/tecnico">Técnico/Profissionalizante</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;