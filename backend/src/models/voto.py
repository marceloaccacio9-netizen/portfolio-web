from ..config.database import db
from datetime import datetime

class Voto(db.Model):
    __tablename__ = 'votos'
    
    id = db.Column(db.Integer, primary_key=True)
    trabalho_id = db.Column(db.Integer, db.ForeignKey('trabalhos.id'), nullable=False)
    ip_votante = db.Column(db.String(50))
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'trabalho_id': self.trabalho_id,
            'criado_em': self.criado_em.isoformat() if self.criado_em else None
        }