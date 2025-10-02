import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrabalhoCard from '../components/TrabalhoCard';
import SistemaVotacao from '../components/SistemaVotacao';
import { listarTrabalhos } from '../services/api';

function CienciasHumanas() {
  const [trabalhos, setTrabalhos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarTrabalhos();
  }, []);

  const carregarTrabalhos = async () => {
    try {
      const response = await listarTrabalhos('Ciencias_Humanas');
      setTrabalhos(response.data);
    } catch (error) {
      console.error('Erro ao carregar trabalhos:', error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container>
      <div className="text-center mb-4">
        <h1 className="display-5">🌍 Ciências Humanas</h1>
        <p className="lead text-muted">
          História, Geografia, Sociologia e Filosofia
        </p>
      </div>

      <Row>
        <Col lg={8}>
          <Row className="g-4">
            {carregando ? (
              <Col xs={12}>
                <p className="text-center">Carregando trabalhos...</p>
              </Col>
            ) : trabalhos.length === 0 ? (
              <Col xs={12}>
                <p className="text-center text-muted">
                  Nenhum trabalho cadastrado nesta área ainda.
                </p>
              </Col>
            ) : (
              trabalhos.map((trabalho) => (
                <Col key={trabalho.id} xs={12} md={6}>
                  <TrabalhoCard 
                    trabalho={trabalho} 
                    onVotoRealizado={carregarTrabalhos}
                  />
                </Col>
              ))
            )}
          </Row>
        </Col>

        <Col lg={4}>
          <SistemaVotacao trabalhos={trabalhos} />
        </Col>
      </Row>
    </Container>
  );
}

export default CienciasHumanas;