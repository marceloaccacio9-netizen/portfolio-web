from flask import Blueprint, request, jsonify
from ..controllers.aluno_controller import AlunoController

alunos_bp = Blueprint('alunos', __name__)

@alunos_bp.route('/alunos', methods=['GET'])
def listar_alunos():
    alunos = AlunoController.listar_alunos()
    return jsonify(alunos), 200

@alunos_bp.route('/alunos/<int:aluno_id>', methods=['GET'])
def buscar_aluno(aluno_id):
    aluno = AlunoController.buscar_aluno(aluno_id)
    if not aluno:
        return jsonify({'erro': 'Aluno não encontrado'}), 404
    return jsonify(aluno), 200

@alunos_bp.route('/alunos', methods=['POST'])
def criar_aluno():
    dados = request.json
    if not dados.get('nome'):
        return jsonify({'erro': 'Nome é obrigatório'}), 400
    
    aluno = AlunoController.criar_aluno(dados)
    return jsonify(aluno), 201

@alunos_bp.route('/alunos/<int:aluno_id>', methods=['PUT'])
def atualizar_aluno(aluno_id):
    dados = request.json
    aluno = AlunoController.atualizar_aluno(aluno_id, dados)
    if not aluno:
        return jsonify({'erro': 'Aluno não encontrado'}), 404
    return jsonify(aluno), 200

@alunos_bp.route('/alunos/<int:aluno_id>', methods=['DELETE'])
def deletar_aluno(aluno_id):
    sucesso = AlunoController.deletar_aluno(aluno_id)
    if not sucesso:
        return jsonify({'erro': 'Aluno não encontrado'}), 404
    return jsonify({'mensagem': 'Aluno deletado com sucesso'}), 200