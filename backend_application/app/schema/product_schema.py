
def validate_product_data(data):
    errors = {}
    if not data.get("name"):
        errors["name"] = "Product name is required"
    if data.get("price") is None:
        errors["price"] = "Price is required"
    if data.get("quantity") is None:
        errors["quantity"] = "Quantity is required"
    return errors
