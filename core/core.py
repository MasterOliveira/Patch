from flask import Flask
app = Flask(__name__)

def main():
	app.debug = True
	app.run()

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
	main()