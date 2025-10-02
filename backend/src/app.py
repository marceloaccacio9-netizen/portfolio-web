from flask import Flask
from flask_cors import CORS
from .config.database import init_db
from .routes import alunos_bp, trabalhos_bp, votos_bp
import os
from dotenv import load_dotenv

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    
    # Configurar CORS
    CORS(app)
    
    # Inicializar banco de dados
    init_db(app)
    
    # Registrar blueprints
    app.register_blueprint(alunos_bp, url_prefix='/api')
    app.register_blueprint(trabalhos_bp, url_prefix='/api')
    app.register_blueprint(votos_bp, url_prefix='/api')
    
    @app.route('/')
    def index():
        return {'mensagem': 'API Portfolio - Ensino Médio Técnico'}
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)