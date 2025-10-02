import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FormContato from '../components/FormContato';

function Contato() {
  return (
    <Container>
      <div className="text-center mb-5">
        <h1 className="display-5">📧 Contato</h1>
        <p className="lead text-muted">
          Entre em contato conosco
        </p>
      </div>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h5 className="mb-4">Envie sua mensagem</h5>
              <FormContato />
            </Card.Body>
          </Card>

          <Card className="mt-4 bg-light">
            <Card.Body>
              <h6>Informações de Contato</h6>
              <p className="mb-1">
                <strong>E-mail:</strong> contato@portfolio-escolar.com.br
              </p>
              <p className="mb-1">
                <strong>Telefone:</strong> (11) 1234-5678
              </p>
              <p className="mb-0">
                <strong>Horário:</strong> Segunda a Sexta, 8h às 17h
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;