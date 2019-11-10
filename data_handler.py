import connection
import bcrypt


@connection.connection_handler
def register_user(cursor, user_data):
    user_name = user_data[0]
    password = user_data[1]
    cursor.execute("""
                    INSERT INTO users(username, password)
                    VALUES(%(user_name)s, %(password)s);
                   """,
                   {'user_name': user_name,
                    'password': password})


@connection.connection_handler
def list_users(cursor):
    cursor.execute("""
                   SELECT username FROM users; 
                   """)
    every_user = cursor.fetchall()
    return every_user


def hash_password(text_password):
    hashed_bytes = bcrypt.hashpw(text_password.encode('utf-8'), bcrypt.gensalt())
    return hashed_bytes.decode('utf-8')


def verify_password(plain_text_password, hashed_password):
    hashed_bytes_password = hashed_password.encode('utf-8')
    return bcrypt.checkpw(plain_text_password.encode('utf-8'), hashed_bytes_password)


def check_if_user_name_exists(user_name):
    all_users = list_users()
    every_user = []
    for name in all_users:
        every_user.append(name.get('username'))
    if user_name in every_user:
        return True
    else:
        return False