from flask import Blueprint, jsonify
from src.models import Users
import json

api = Blueprint('api', __name__)

@api.route("/addtodb/<email>")
def add_user(email):
    if email == "false" or email == "undefined":
        print("User provided is not logged in. (undefined)")
        res = {
            "code": "409",
            "message": "false voids the function"
        }
        return jsonify(res)
    user = Users.query.filter(Users.email.in_([email])).all()
    if not user:
        user = Users(email)
        user.save()
        res = {
            "code": "201",
            "message": f"User created under email {email}"
        }
        return jsonify(res)
    else:
        res = {
            "code": "409",
            "message": "The email provided is in the database" 
        }
        return jsonify(res)


@api.route("/addvehicle/<make>/<model>/<year>/<email>")
def add_vehicle(make, model, year, email):
    user = Users.query.filter(Users.email.in_([email])).all()
    if not user:
        add_user(email)
        user = Users.query.filter(Users.email.in_([email])).all()
    current_user = user[0]
    if not len(current_user.garage):
        # No garage 
        print(f"No garage found for {email}, creating JSON garage object")
        garage = {}
        garage[model] = {}
        garage[model]["year"] = year 
        garage[model]["make"] = make 
        current_user.garage = json.dumps(garage)
        current_user.update()
        print(f"Saved {year} {make} {model} to {email}'s garage")
    else:
        # User has garage
        garage = json.loads(current_user.garage)
        garage[model] = {}
        garage[model]["year"] = year 
        garage[model]["make"] = make 
        current_user.garage = json.dumps(garage)
        current_user.update()
        print(f"Saved {year} {make} {model} to {email}'s garage")
    res = {
        "code": 200,
        "message": f"Saved {year} {make} {model} to {email}'s garage"
    }
    return jsonify(res)

@api.route('/garage/<email>')
def get_garage(email):
    user = Users.query.filter(Users.email.in_([email])).all()
    if not user:
        res = {
            "code": 404,
            "message": "User is not in the DB"
        }
        return jsonify(res)
    if not len(user[0].garage):
        # no garage is made yet (empty)
        return jsonify(user[0].garage)
    garage = json.loads(user[0].garage)
    return jsonify(garage)

@api.route('/removevehicle/<make>/<model>/<year>/<email>')
def remove_vehicle(make, model, year, email):
    user = Users.query.filter(Users.email.in_([email])).all()
    if not user:
        print("User not found, possible backdoor?")
        res = {
            "code": 404,
            "message": "User not found"
        }
        return jsonify(res)
    garage = json.loads(user[0].garage)
    if not model in garage.keys():
        print(f"{model} not found in {email}'s garage, possible backdoor?")
        res = {
            "code": 404,
            "message": "Model not found in user's garage"
        }
        return jsonify(res)
    else:
        del garage[model]
        user[0].garage = json.dumps(garage)
        user[0].update()
        res = {
            "code": 200,
            "message": f"{model} removed from {email}'s garage"
        }
        return jsonify(res)
