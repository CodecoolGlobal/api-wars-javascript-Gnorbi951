from flask import Flask, render_template, request, re


app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')

@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        print('lol not implemented yet')
        return redire
    else:
        return render_template('registration.html')


if __name__ == '__main__':
    app.run(debug=True)
