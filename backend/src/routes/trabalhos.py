from flask import Blueprint, request, jsonify
from ..controllers.trabalho_controller import TrabalhoController

trabalhos_bp = Blueprint('trabalhos', __name__)

@trabalhos_bp.route('/trabalhos', methods=['GET'])
def listar_trabalhos():
    area = request.args.get('area')
    trabalhos = TrabalhoController.listar_trabalhos(area)
    return jsonify(trabalhos), 200

@trabalhos_bp.route('/trabalhos/<int:trabalho_id>', methods=['GET'])
def buscar_trabalho(trabalho_id):
    trabalho = TrabalhoController.buscar_trabalho(trabalho_id)
    if not trabalho:
        return jsonify({'erro': 'Trabalho não encontrado'}), 404
    return jsonify(trabalho), 200

@trabalhos_bp.route('/trabalhos', methods=['POST'])
def criar_trabalho():
    dados = request.json
    if not dados.get('aluno_id') or not dados.get('titulo') or not dados.get('area'):
        return jsonify({'erro': 'Campos obrigatórios faltando'}), 400
    
    trabalho = TrabalhoController.criar_trabalho(dados)
    return jsonify(trabalho), 201

@trabalhos_bp.route('/trabalhos/<int:trabalho_id>', methods=['PUT'])
def atualizar_trabalho(trabalho_id):
    dados = request.json
    trabalho = TrabalhoController.atualizar_trabalho(trabalho_id, dados)
    if not trabalho:
        return jsonify({'erro': 'Trabalho não encontrado'}), 404
    return jsonify(trabalho), 200

@trabalhos_bp.route('/trabalhos/<int:trabalho_id>', methods=['DELETE'])
def deletar_trabalho(trabalho_id):
    sucesso = TrabalhoController.deletar_trabalho(trabalho_id)
    if not sucesso:
        return jsonify({'erro': 'Trabalho não encontrado'}), 404
    return jsonify({'mensagem': 'Trabalho deletado com sucesso'}), 200

@trabalhos_bp.route('/ranking/<string:area>', methods=['GET'])
def ranking_area(area):
    ranking = TrabalhoController.ranking_por_area(area)
    return jsonify(ranking), 200