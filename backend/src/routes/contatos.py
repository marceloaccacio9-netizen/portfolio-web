from flask import Blueprint, request, jsonify
from ..controllers.contato_controller import ContatoController

contatos_bp = Blueprint('contatos', __name__)

@contatos_bp.route('/contatos', methods=['GET'])
def listar_contatos():
    contatos = ContatoController.listar_contatos()
    return jsonify(contatos), 200

@contatos_bp.route('/contatos/<int:contato_id>', methods=['GET'])
def buscar_contato(contato_id):
    contato = ContatoController.buscar_contato(contato_id)
    if not contato:
        return jsonify({'erro': 'Contato não encontrado'}), 404
    return jsonify(contato), 200

@contatos_bp.route('/contatos', methods=['POST'])
def criar_contato():
    dados = request.json
    
    if not dados.get('nome') or not dados.get('email') or not dados.get('mensagem'):
        return jsonify({'erro': 'Todos os campos são obrigatórios'}), 400
    
    contato = ContatoController.criar_contato(dados)
    return jsonify(contato), 201