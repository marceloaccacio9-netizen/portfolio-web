  import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { listarTrabalhos } from '../services/api';

function Home() {
  const [estatisticas, setEstatisticas] = useState({
    total: 0,
    porArea: {}
  });

  useEffect(() => {
    carregarEstatisticas();
  }, []);

  const carregarEstatisticas = async () => {
    try {
      const response = await listarTrabalhos();
      const trabalhos = response.data;
      
      const porArea = trabalhos.reduce((acc, trabalho) => {
        acc[trabalho.area] = (acc[trabalho.area] || 0) + 1;
        return acc;
      }, {});

      setEstatisticas({
        total: trabalhos.length,
        porArea
      });
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error);
    }
  };

  const areas = [
    { 
      nome: 'Linguagens', 
      key: 'Linguagens',
      link: '/linguagens',
      icon: '📚',
      cor: 'primary'
    },
    { 
      nome: 'Ciências da Natureza', 
      key: 'Ciencias_Natureza',
      link: '/ciencias-natureza',
      icon: '🔬',
      cor: 'success'
    },
    { 
      nome: 'Matemática', 
      key: 'Matematica',
      link: '/matematica',
      icon: '🔢',
      cor: 'warning'
    },
    { 
      nome: 'Ciências Humanas', 
      key: 'Ciencias_Humanas',
      link: '/ciencias-humanas',
      icon: '🌍',
      cor: 'info'
    },
    { 
      nome: 'Técnico/Profissionalizante', 
      key: 'Tecnico',
      link: '/tecnico',
      icon: '💻',
      cor: 'danger'
    }
  ];

  return (
    <Container>
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">Portfolio de Trabalhos</h1>
        <p className="lead text-muted">
          Ensino Médio Técnico - Melhores trabalhos por área do conhecimento
        </p>
        <hr className="my-4" />
        <p className="text-muted">
          Total de trabalhos cadastrados: <strong>{estatisticas.total}</strong>
        </p>
      </div>

      <Row className="g-4">
        {areas.map((area) => (
          <Col key={area.key} xs={12} md={6} lg={4}>
            <Link to={area.link} style={{ textDecoration: 'none' }}>
              <Card 
                className="h-100 text-center shadow-sm hover-shadow" 
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body>
                  <div style={{ fontSize: '4rem' }} className="mb-3">
                    {area.icon}
                  </div>
                  <Card.Title className={`text-${area.cor}`}>
                    {area.nome}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {estatisticas.porArea[area.key] || 0} trabalhos
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h5>Sobre o Portfolio</h5>
              <p className="mb-0">
                Este portal reúne os melhores trabalhos desenvolvidos pelos alunos do 
                Ensino Médio Técnico, organizados por áreas do conhecimento. Vote nos 
                seus trabalhos favoritos e acompanhe o ranking!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;