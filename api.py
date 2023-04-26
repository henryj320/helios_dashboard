"""API called in React Dashboard for sysvis and Muscle_Checker."""

from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

import helios_dashboard_app.scripts.muscle_checker.muscle_checker_script as mc

import helios_dashboard_app.scripts.sysvis.sysvis as rh


app = Flask(__name__)
api = Api(app)

CORS(app)


class Muscle_checker(Resource):
    """A class to contain the GET, POST, DELETE and PUT HTTP methods for the Muscle Checker script.

    Args:
        Resource (_type_): Lets Flask know that this class in an endpoint.
    """

    def get(self):
        """GET the JSON response from muscle_checker."""
        # Runs muscle_checker and sets data to the output JSON.
        # data = mc.run('./scripts/muscle_checker/insert_calendar_text.txt')
        data = mc.run('helios_dashboard_app/scripts/muscle_checker/insert_calendar_text.txt')

        return {'data': data}, 200  # 200 OK code.

    def put(self):
        """Update insert_calendar_text.txt ready to be used."""
        parser = reqparse.RequestParser()  # reqparse is used to parse arguments.

        parser.add_argument('text', required=True)  # text argument contains the text to add to insert_calendar_text.

        args = parser.parse_args()  # Parses the arguments into type dictionary.

        success = mc.update_txt_file(args['text'])  # Runs the script.

        success = True

        data = {
            'text': args['text'],
            'success': success
        }

        return {'data': data}, 200


api.add_resource(Muscle_checker, '/muscle_checker')  # Links the class to the /muscle_checker endpoint.


class sysvis(Resource):
    """A class to contain the GET, POST, DELETE and PUT HTTP methods for the sysvis script.

    Args:
        Resource (_type_): Lets Flask know that this class in an endpoint.
    """

    def get(self):
        """GET the latest health metrics only. No records.json update."""
        data = rh.get_health()  # Collects the latest health metrics and then returns all entries in records.json.

        return {'data': data}, 200  # 200 OK code.

    def post(self):
        """POST the latest health metrics and then returns all entries in records.json."""
        data = rh.run()  # Collects the latest health metrics and then returns all entries in records.json.

        return {'data': data}, 200  # 200 OK code.


api.add_resource(sysvis, '/sysvis')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="1004")  # Runs the Flask app.
