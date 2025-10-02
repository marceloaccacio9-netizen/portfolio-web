import React, { useState, useEffect } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { votar, verificarVoto } from '../services/api';

function TrabalhoCard({ trabalho, onVotoRealizado }) {
  const [jaVotou, setJaVotou] = useState(false);
  const [votando, setVotando] = useState(false);

  useEffect(() => {
    verificarSeVotou();
  }, [trabalho.id]);

  const verificarSeVotou = async () => {
    try {
      const response = await verificarVoto(trabalho.id);
      setJaVotou(response.data.ja_votou);
    } catch (error) {
      console.error('Erro ao verificar voto:', error);
    }
  };

  const handleVotar = async () => {
    if (jaVotou || votando) return;

    setVotando(true);
    try {
      await votar(trabalho.id);
      setJaVotou(true);
      if (onVotoRealizado) onVotoRealizado();
      alert('Voto registrado com sucesso!');
    } catch (error) {
      alert(error.response?.data?.erro || 'Erro ao votar');
    } finally {
      setVotando(false);
    }
  };

  return (
    <Card className="h-100 shadow-sm">
      {trabalho.imagem_url && (
        <Card.Img 
          variant="top" 
          src={trabalho.imagem_url} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{trabalho.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Por: {trabalho.aluno_nome}
        </Card.Subtitle>
        <Card.Text className="flex-grow-1">
          {trabalho.descricao}
        </Card.Text>
        
        <div className="mb-3">
          <Badge bg="primary" className="me-2">
            {trabalho.area.replace('_', ' ')}
          </Badge>
          {trabalho.bimestre && (
            <Badge bg="secondary">
              {trabalho.bimestre}º Bimestre
            </Badge>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <strong>❤️ {trabalho.total_votos}</strong> votos
          </div>
          <div>
            {trabalho.link_projeto && (
              <Button 
                variant="outline-primary" 
                size="sm" 
                href={trabalho.link_projeto}
                target="_blank"
                className="me-2"
              >
                Ver Projeto
              </Button>
            )}
            <Button
              variant={jaVotou ? "secondary" : "success"}
              size="sm"
              onClick={handleVotar}
              disabled={jaVotou || votando}
            >
              {jaVotou ? '✓ Votado' : 'Votar'}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TrabalhoCard;