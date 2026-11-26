
from app.extensions import db

class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=0)
    category = db.Column(db.String(100))

    def to_dict(self):
        return {"id": self.id, "name": self.name,
                "description": self.description,
                "price": self.price,
                "quantity": self.quantity,
                "category": self.category}
