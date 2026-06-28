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

def delete_student(student_id):

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM students WHERE id = %s",
        (student_id,)
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "Student Deleted Successfully"
    }   

def update_student(student_id, student):

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE students
        SET
            name=%s,
            email=%s,
            placement_score=%s,
            career_match=%s,
            skill_readiness=%s,
            hiring_probability=%s
        WHERE id=%s
        """,
        (
            student.name,
            student.email,
            student.placement_score,
            student.career_match,
            student.skill_readiness,
            student.hiring_probability,
            student_id
        )
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "Student Updated Successfully"
    }

def get_dashboard_stats():

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    cursor.execute("""
        SELECT COUNT(*)
        FROM students
    """)

    total_students = cursor.fetchone()[0]

    cursor.execute("""
        SELECT AVG(placement_score)
        FROM students
    """)

    avg_score = cursor.fetchone()[0] or 0

    cursor.execute("""
        SELECT AVG(hiring_probability)
        FROM students
    """)

    avg_hiring = cursor.fetchone()[0] or 0

    cursor.execute("""
        SELECT COUNT(*)
        FROM students
        WHERE placement_score >= 70
    """)

    placement_ready = cursor.fetchone()[0]

    conn.close()

    return {
        "total_students": total_students,
        "avg_score": round(avg_score, 2),
        "avg_hiring": round(avg_hiring, 2),
        "placement_ready": placement_ready
    }

def get_chart_data():

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
            placement_score
        FROM students
        ORDER BY placement_score DESC
    """)

    students = cursor.fetchall()

    conn.close()

    result = []

    for student in students:
        result.append(
            {
                "name": student[0],
                "placement_score": student[1]
            }
        )

    return result

def get_director_insights():

    conn = psycopg2.connect(
        host="localhost",
        database="placementdna",
        user="postgres",
        password="admin123"
    )

    cursor = conn.cursor()

    # Total Students
    cursor.execute("SELECT COUNT(*) FROM students")
    total_students = cursor.fetchone()[0]

    # Placement Ready Students
    cursor.execute("""
        SELECT COUNT(*)
        FROM students
        WHERE placement_score >= 70
    """)
    placement_ready = cursor.fetchone()[0]

    # Students Needing Attention
    cursor.execute("""
        SELECT COUNT(*)
        FROM students
        WHERE placement_score < 70
    """)
    needs_attention = cursor.fetchone()[0]

    # Average Placement Score
    cursor.execute("""
        SELECT AVG(placement_score)
        FROM students
    """)
    avg_score = cursor.fetchone()[0] or 0

    # Top Performer
    cursor.execute("""
        SELECT
            name,
            placement_score
        FROM students
        ORDER BY placement_score DESC
        LIMIT 1
    """)

    top_student = cursor.fetchone()

    conn.close()

    return {
        "total_students": total_students,
        "placement_ready": placement_ready,
        "needs_attention": needs_attention,
        "avg_score": round(avg_score, 2),
        "top_student": top_student[0] if top_student else "N/A",
        "top_score": top_student[1] if top_student else 0
    }

