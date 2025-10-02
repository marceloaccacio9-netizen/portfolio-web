from ..models.contato import Contato
from ..config.database import db

class ContatoController:
    @staticmethod
    def criar_contato(dados):
        novo_contato = Contato(
            nome=dados['nome'],
            email=dados['email'],
            mensagem=dados['mensagem']
        )
        db.session.add(novo_contato)
        db.session.commit()
        return novo_contato.to_dict()
    
    @staticmethod
    def listar_contatos():
        contatos = Contato.query.order_by(Contato.criado_em.desc()).all()
        return [contato.to_dict() for contato in contatos]
    
    @staticmethod
    def buscar_contato(contato_id):
        contato = Contato.query.get(contato_id)
        return contato.to_dict() if contato else None