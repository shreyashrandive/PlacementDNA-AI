import psycopg2

try:
    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    print("Database Connected Successfully!")

    conn.close()

except Exception as e:
    print("Connection Error:")
    print(e)