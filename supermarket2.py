from flask import Flask, render_template, request

app = Flask(__name__)

users = {}  

@app.route("/")
def main():
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    message = ""
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if username in users and users[username] == password:
            message = "Login successful! Welcome!"
        else:
            message = "Invalid credentials. Try again."
    return render_template("login2.html", message=message)

@app.route("/register", methods=["GET", "POST"])
def craeteacc():
    message = ""
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if username in users:
            message = "Username already taken. Try another."
        else:
            users[username] = password
            message = "Account created successfully! You can now log in."
    return render_template("register.html", message=message)

if __name__ == "__main__":
    app.run();
