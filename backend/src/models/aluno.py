from ..config.database import db
from datetime import datetime

class Aluno(db.Model):
    __tablename__ = 'alunos'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    foto_url = db.Column(db.String(255))
    apresentacao = db.Column(db.Text)
    email = db.Column(db.String(100))
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)
    
    trabalhos = db.relationship('Trabalho', backref='aluno', lazy=True, cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'foto_url': self.foto_url,
            'apresentacao': self.apresentacao,
            'email': self.email,
            'criado_em': self.criado_em.isoformat() if self.criado_em else None
        }