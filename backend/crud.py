import psycopg2


def get_student_data():

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            name,
            placement_score,
            career_match,
            skill_readiness,
            hiring_probability
        FROM students
        LIMIT 1
    """)

    student = cursor.fetchone()

    conn.close()

    return student