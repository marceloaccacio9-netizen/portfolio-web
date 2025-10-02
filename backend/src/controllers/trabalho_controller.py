from ..models.trabalho import Trabalho
from ..config.database import db
from sqlalchemy import desc

class TrabalhoController:
    @staticmethod
    def criar_trabalho(dados):
        novo_trabalho = Trabalho(
            aluno_id=dados['aluno_id'],
            titulo=dados['titulo'],
            descricao=dados.get('descricao'),
            area=dados['area'],
            link_projeto=dados.get('link_projeto'),
            imagem_url=dados.get('imagem_url'),
            bimestre=dados.get('bimestre')
        )
        db.session.add(novo_trabalho)
        db.session.commit()
        return novo_trabalho.to_dict()
    
    @staticmethod
    def listar_trabalhos(area=None):
        query = Trabalho.query
        if area:
            query = query.filter_by(area=area)
        trabalhos = query.order_by(desc(Trabalho.total_votos)).all()
        return [trabalho.to_dict() for trabalho in trabalhos]
    
    @staticmethod
    def buscar_trabalho(trabalho_id):
        trabalho = Trabalho.query.get(trabalho_id)
        return trabalho.to_dict() if trabalho else None
    
    @staticmethod
    def atualizar_trabalho(trabalho_id, dados):
        trabalho = Trabalho.query.get(trabalho_id)
        if not trabalho:
            return None
        
        trabalho.titulo = dados.get('titulo', trabalho.titulo)
        trabalho.descricao = dados.get('descricao', trabalho.descricao)
        trabalho.area = dados.get('area', trabalho.area)
        trabalho.link_projeto = dados.get('link_projeto', trabalho.link_projeto)
        trabalho.imagem_url = dados.get('imagem_url', trabalho.imagem_url)
        trabalho.bimestre = dados.get('bimestre', trabalho.bimestre)
        
        db.session.commit()
        return trabalho.to_dict()
    
    @staticmethod
    def deletar_trabalho(trabalho_id):
        trabalho = Trabalho.query.get(trabalho_id)
        if not trabalho:
            return False
        
        db.session.delete(trabalho)
        db.session.commit()
        return True
    
    @staticmethod
    def ranking_por_area(area):
        trabalhos = Trabalho.query.filter_by(area=area).order_by(desc(Trabalho.total_votos)).limit(10).all()
        return [trabalho.to_dict() for trabalho in trabalhos]