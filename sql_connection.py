import mysql.connector

__cnx = None

def get_sql_connection():
    global __cnx
    if __cnx is None:
        __cnx = mysql.connector.connect(
            host='localhost',
            port=3306,
            user='root',
            password='free$fire',  # ⬅️ If you set a MySQL password, add it here
            database='gs'
        )
    return __cnx
