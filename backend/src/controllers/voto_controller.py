from ..models.voto import Voto
from ..models.trabalho import Trabalho
from ..config.database import db

class VotoController:
    @staticmethod
    def votar(trabalho_id, ip_votante):
        # Verificar se já votou
        voto_existente = Voto.query.filter_by(
            trabalho_id=trabalho_id,
            ip_votante=ip_votante
        ).first()
        
        if voto_existente:
            return {'erro': 'Você já votou neste trabalho'}, 400
        
        # Criar voto
        novo_voto = Voto(
            trabalho_id=trabalho_id,
            ip_votante=ip_votante
        )
        db.session.add(novo_voto)
        
        # Atualizar contagem
        trabalho = Trabalho.query.get(trabalho_id)
        if trabalho:
            trabalho.total_votos += 1
        
        db.session.commit()
        return {'mensagem': 'Voto registrado com sucesso'}, 201
    
    @staticmethod
    def verificar_voto(trabalho_id, ip_votante):
        voto = Voto.query.filter_by(
            trabalho_id=trabalho_id,
            ip_votante=ip_votante
        ).first()
        return {'ja_votou': voto is not None}