import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

function SistemaVotacao({ trabalhos }) {
  const totalVotos = trabalhos.reduce((sum, t) => sum + t.total_votos, 0);

  const ranking = [...trabalhos]
    .sort((a, b) => b.total_votos - a.total_votos)
    .slice(0, 5);

  return (
    <Card className="mb-4">
      <Card.Header>
        <h5 className="mb-0">🏆 Ranking Top 5</h5>
      </Card.Header>
      <Card.Body>
        {ranking.length === 0 ? (
          <p className="text-muted">Nenhum voto registrado ainda</p>
        ) : (
          ranking.map((trabalho, index) => {
            const porcentagem =
              totalVotos > 0 ? (trabalho.total_votos / totalVotos) * 100 : 0;

            return (
              <div key={trabalho.id} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>
                    <strong>#{index + 1}.</strong> {trabalho.titulo}
                  </span>
                  <span className="text-muted">
                    {trabalho.total_votos} votos ({porcentagem.toFixed(1)}%)
                  </span>
                </div>
                <ProgressBar
                  now={porcentagem}
                  variant={
                    index === 0 ? 'success' : index === 1 ? 'info' : 'secondary'
                  }
                />
              </div>
            );
          })
        )}
      </Card.Body>
    </Card>
  );
}

export default SistemaVotacao;
