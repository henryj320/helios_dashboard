from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS


# from ..muscle_checker.muscle_checker_script import *
# import muscleChecker

import react_dashboard_app.scripts.muscle_checker.muscle_checker_script as mc

app = Flask(__name__)
api = Api(app)

CORS(app)


class Muscle_checker(Resource):
    """A class to contain the GET, POST, DELETE and PUT HTTP methods for the Muscle Checker script.

    Args:
        Resource (_type_): Lets Flask know that this class in an endpoint.
    """

    def get(self):
        """GETs the JSON response from muscle_checker."""

        test_string = "Bench Press:\nTricep Pull-Downs:\nAbs for 8:\nSquats:"

        # Runs muscle_checker and sets data to the output JSON.
        data = mc.run_string(test_string)

        return {'data': data}, 200  # 200 OK code.


    def put(self):
        """Updates insert_calendar_text.txt ready to be used."""
        parser = reqparse.RequestParser()  # reqparse is used to parse arguments.

        parser.add_argument('text', required=True)  # text argument contains the text to add to insert_calendar_text.

        args = parser.parse_args()  # Parses the arguments into type dictionary.

        success = mc.update_txt_file(args['text'])  # Runs the script.

        data = {
            'text': args['text'],
            'success': success
        }

        return {'data': data}, 200


api.add_resource(Muscle_checker, '/muscle_checker')  # Links the class to the /muscle_checker endpoint.


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="4000")  # Runs the Flask app.
