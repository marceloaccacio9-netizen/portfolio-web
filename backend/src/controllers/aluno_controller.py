from ..models.aluno import Aluno
from ..config.database import db

class AlunoController:
    @staticmethod
    def criar_aluno(dados):
        novo_aluno = Aluno(
            nome=dados['nome'],
            foto_url=dados.get('foto_url'),
            apresentacao=dados.get('apresentacao'),
            email=dados.get('email')
        )
        db.session.add(novo_aluno)
        db.session.commit()
        return novo_aluno.to_dict()
    
    @staticmethod
    def listar_alunos():
        alunos = Aluno.query.all()
        return [aluno.to_dict() for aluno in alunos]
    
    @staticmethod
    def buscar_aluno(aluno_id):
        aluno = Aluno.query.get(aluno_id)
        return aluno.to_dict() if aluno else None
    
    @staticmethod
    def atualizar_aluno(aluno_id, dados):
        aluno = Aluno.query.get(aluno_id)
        if not aluno:
            return None
        
        aluno.nome = dados.get('nome', aluno.nome)
        aluno.foto_url = dados.get('foto_url', aluno.foto_url)
        aluno.apresentacao = dados.get('apresentacao', aluno.apresentacao)
        aluno.email = dados.get('email', aluno.email)
        
        db.session.commit()
        return aluno.to_dict()
    
    @staticmethod
    def deletar_aluno(aluno_id):
        aluno = Aluno.query.get(aluno_id)
        if not aluno:
            return False
        
        db.session.delete(aluno)
        db.session.commit()
        return True