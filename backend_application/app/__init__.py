from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.extensions import db


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app, origins=["http://localhost:5173"],
         methods=["GET", "POST", "PUT", "DELETE"])
    
    db.init_app(app)

    from app.routes.product_routes import product_bp
    app.register_blueprint(
        product_bp,
        url_prefix="/api/products")

    with app.app_context():
        db.create_all()
    return app
