from ..config.database import db
from datetime import datetime

class Trabalho(db.Model):
    __tablename__ = 'trabalhos'
    
    id = db.Column(db.Integer, primary_key=True)
    aluno_id = db.Column(db.Integer, db.ForeignKey('alunos.id'), nullable=False)
    titulo = db.Column(db.String(200), nullable=False)
    descricao = db.Column(db.Text)
    area = db.Column(db.String(50), nullable=False)  # Linguagens, Ciencias_Natureza, Matematica, Ciencias_Humanas, Tecnico
    link_projeto = db.Column(db.String(255))
    imagem_url = db.Column(db.String(255))
    bimestre = db.Column(db.Integer)
    total_votos = db.Column(db.Integer, default=0)
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)
    
    votos = db.relationship('Voto', backref='trabalho', lazy=True, cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            'id': self.id,
            'aluno_id': self.aluno_id,
            'aluno_nome': self.aluno.nome if self.aluno else None,
            'titulo': self.titulo,
            'descricao': self.descricao,
            'area': self.area,
            'link_projeto': self.link_projeto,
            'imagem_url': self.imagem_url,
            'bimestre': self.bimestre,
            'total_votos': self.total_votos,
            'criado_em': self.criado_em.isoformat() if self.criado_em else None
        }