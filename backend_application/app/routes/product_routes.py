from flask import jsonify, Blueprint, request
from app.schema.product_schema import validate_product_data
from app.models.product_models import Product
from app.extensions import db

product_bp = Blueprint("products", __name__)

# Create Products


@product_bp.route("/add-product", methods=["POST"])
def create_product():
    data = request.get_json()
    if not data:
        return jsonify({"message": "Request body is required"}), 400
    errors = validate_product_data(data)
    if errors:
        return jsonify({"errors": errors}), 400

    p = Product(name=data["name"], description=data.get("description"),
                price=data["price"], quantity=data["quantity"],
                category=data.get("category"))
    db.session.add(p)
    db.session.commit()
    return jsonify({"message": "Product created successfully",
                    "product": p.to_dict()}), 201
