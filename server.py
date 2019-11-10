from flask import Flask, render_template, request
import data_handler


app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        user_name = request.form.get('user_name')
        not_hashed_pw = request.form.get('pw')
        name_status = data_handler.check_if_user_name_exists(user_name)
        print(name_status)
        if name_status:
            message = 'Name already taken'
            return render_template('registration.html', message=message)
        if user_name == '' or not_hashed_pw == '':
            return render_template('registration.html')
        hashed_password = data_handler.hash_password(not_hashed_pw)
        user_name_and_pw = [user_name, hashed_password]
        data_handler.register_user(user_name_and_pw)
        message = 'Registration successful'
        return render_template('registration.html', message=message)

    else:
        return render_template('registration.html')


if __name__ == '__main__':
    app.run(debug=True)
