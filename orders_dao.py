from products_dao import get_all_products


from datetime import datetime
from sql_connection import get_sql_connection

# (rest remains unchanged)


def insert_order(connection, order):
    cursor = connection.cursor()

    # Insert into orders
    order_query = (
        "INSERT INTO orders (customer_name, total, datetime) "
        "VALUES (%s, %s, %s)"
    )
    order_data = (order['customer_name'], order['grand_total'], datetime.now())
    cursor.execute(order_query, order_data)
    order_id = cursor.lastrowid
    connection.commit()

    # Insert into order_details
    order_details_query = (
        "INSERT INTO order_details (order_id, product_id, quantity, total_price) "
        "VALUES (%s, %s, %s, %s)"
    )

    order_details_data = []
    for order_detail_record in order['order_details']:
        order_details_data.append([
            order_id,
            int(order_detail_record['product_id']),
            float(order_detail_record['quantity']),
            float(order_detail_record['total_price'])  # FIXED HERE
        ])

    cursor.executemany(order_details_query, order_details_data)
    connection.commit()

    return order_id

def get_order_details_by_order_id(connection, order_id):
    cursor = connection.cursor()

    query = (
        "SELECT od.product_id, p.name, od.quantity, od.total_price "
        "FROM order_details od "
        "JOIN products p ON od.product_id = p.products_id "
        "WHERE od.order_id = %s"
    )
    cursor.execute(query, (order_id,))

    response = []
    for (product_id, product_name, quantity, total_price) in cursor:
        response.append({
            'product_id': product_id,
            'product_name': product_name,
            'quantity': quantity,
            'total_price': total_price
        })

    return response


def get_all_orders(connection):
    cursor = connection.cursor()
    query = ("Select * from orders")
    cursor.execute(query)

    response = []
    for (order_id, customer_name, total, dt) in cursor:
        response.append({
            'order_id': order_id,
            'customer_name': customer_name,
            'total': total,
            'datetime': dt.isoformat() if isinstance(dt, datetime) else '',
        })

    return response



if __name__ == "__main__":
    connection = get_sql_connection()
    print(get_all_orders(connection))


