from flask import Flask
from flask_cors import CORS

from models.Listing import Listing

db = dict()

cnt = 0
dataQty = 40

while cnt < dataQty:
    db[cnt] = Listing(cnt)
    cnt += 1

app = Flask(__name__)
CORS(app)

@app.route("/")
def get_all():
    return {
        "msg": "ok",
        "data": [l[1].serialize() for l in db.items()]
     }

if __name__ == '__main__':
    for l in db.items():
        print({"id": l[0], "listing": l[1].__str__()})

    app.run(port=5000, debug=True)
