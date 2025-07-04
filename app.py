from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from sql_connection import get_sql_connection
import products_dao
import orders_dao
import uom_dao
import json

# Establish database connection
connection = get_sql_connection()
app = Flask(__name__)

# Enable CORS globally
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/getProducts', methods=['GET'])
def get_products():
    products = products_dao.get_all_products(connection)
    return jsonify(products)

@app.route('/getUOM', methods=['GET'])
def get_uom():
    uoms = uom_dao.get_uoms(connection)
    return jsonify(uoms)

@app.route('/insertOrder', methods=['POST'])
def insert_order():
    request_payload = json.loads(request.form['data'])
    order_id = orders_dao.insert_order(connection, request_payload)
    return jsonify({'order_id': order_id})

@app.route('/getAllOrders', methods=['GET'])
def get_all_orders():
    orders = orders_dao.get_all_orders(connection)
    return jsonify(orders)

@app.route('/insertProduct', methods=['POST'])
def insert_product():
    request_payload = json.loads(request.form['data'])
    product_id = products_dao.insert_new_product(connection, request_payload)
    return jsonify({'product_id': product_id})

@app.route('/getOrderDetails/<int:order_id>', methods=['GET'])
def get_order_details(order_id):
    order_details = orders_dao.get_order_details_by_order_id(connection, order_id)
    return jsonify(order_details)

@app.route('/deleteProduct', methods=['POST'])
def delete_product():
    product_id = request.form['product_id']
    deleted = products_dao.delete_product(connection, product_id)
    status = 'success' if deleted else 'not found'
    return jsonify({'status': status, 'product_id': product_id})

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    cursor = connection.cursor()
    query = "SELECT * FROM users WHERE username = %s"
    cursor.execute(query, (username,))
    user = cursor.fetchone()
    cursor.close()

    if user:
        stored_password = user[2]
        if check_password_hash(stored_password, password):
            return jsonify({'status': 'success', 'message': 'Login successful'})
        else:
            return jsonify({'status': 'fail', 'message': 'Incorrect password'})
    else:
        return jsonify({'status': 'fail', 'message': 'User not found'})

if __name__ == '__main__':
    print("Starting server for Grocery Store Management System...")
    app.run(port=5000, debug=True)
