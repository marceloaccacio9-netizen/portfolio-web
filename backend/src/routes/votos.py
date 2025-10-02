from flask import Blueprint, request, jsonify
from ..controllers.voto_controller import VotoController

votos_bp = Blueprint('votos', __name__)

@votos_bp.route('/votar/<int:trabalho_id>', methods=['POST'])
def votar(trabalho_id):
    ip_votante = request.remote_addr
    resultado, status = VotoController.votar(trabalho_id, ip_votante)
    return jsonify(resultado), status

@votos_bp.route('/verificar-voto/<int:trabalho_id>', methods=['GET'])
def verificar_voto(trabalho_id):
    ip_votante = request.remote_addr
    resultado = VotoController.verificar_voto(trabalho_id, ip_votante)
    return jsonify(resultado), 200