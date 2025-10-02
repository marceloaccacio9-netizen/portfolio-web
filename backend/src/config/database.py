from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
from urllib.parse import quote_plus

load_dotenv()

db = SQLAlchemy()

def init_db(app):
    # Escapar a senha para evitar problemas com caracteres especiais
    password = quote_plus(os.getenv('DATABASE_PASSWORD'))
    
    database_uri = f"mysql+pymysql://{os.getenv('DATABASE_USER')}:{password}@{os.getenv('DATABASE_HOST')}/{os.getenv('DATABASE_NAME')}"
    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    
    with app.app_context():
        db.create_all()