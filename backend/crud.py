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

def create_student(student):

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO students
        (
            name,
            email,
            placement_score,
            career_match,
            skill_readiness,
            hiring_probability
        )
        VALUES (%s, %s, %s, %s, %s, %s)
        """,
        (
            student.name,
            student.email,
            student.placement_score,
            student.career_match,
            student.skill_readiness,
            student.hiring_probability
        )
    )

    conn.commit()

    conn.close()

    return {
        "message": "Student Created Successfully"
    }

def get_all_students():

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            id,
            name,
            email,
            placement_score,
            career_match,
            skill_readiness,
            hiring_probability
        FROM students
        ORDER BY id
    """)

    students = cursor.fetchall()

    cursor.close()
    conn.close()

    return students