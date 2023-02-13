from flask import Flask
from flask_restful import Resource, Api, reqparse
import ast

app = Flask(__name__)
api = Api(app)


class Muscle_checker(Resource):
    """A class to contain the GET, POST, DELETE and PUT HTTP methods for the Muscle Checker script.

    Args:
        Resource (_type_): Lets Flask know that this class in an endpoint.
    """

    def get(self):
        """Request for some information."""
        data = "Example data"
        return {'data': data}, 200  # 200 OK code.


    def post(self):
        """Request to insert new data."""
        parser = reqparse.RequestParser()  # reqparse is used to parse arguments.

        parser.add_argument('userID', required=True)  # Adds 'userID' as a required argument.
        parser.add_argument('name', required=False)

        args = parser.parse_args()  # Parses the arguments into type dictionary.

        data = {
            'userID': args['userID'],
            'Person': args['name']
        }

        # ... Do something with data

        return {'data': data}, 200
    

    def put(self):
        """Request to amend some data."""
        parser = reqparse.RequestParser()  # reqparse is used to parse arguments.

        parser.add_argument('userID', required=True)  # Adds 'userID' as a required argument.
        parser.add_argument('name', required=False)

        args = parser.parse_args()  # Parses the arguments into type dictionary.

        data = {
            'userID': args['userID'],
            'Person': args['name']
        }

        # ... Do something with data

        return {'data': data}, 200


    def delete(self):
        """Request to amend some data."""
        parser = reqparse.RequestParser()  # reqparse is used to parse arguments.

        parser.add_argument('userID', required=True)  # Adds 'userID' as a required argument.
        parser.add_argument('name', required=False)

        args = parser.parse_args()  # Parses the arguments into type dictionary.

        data = {
            'userID': args['userID'],
            'Person': args['name']
        }

        # ... Do something with data

        return {'data': data}, 200




api.add_resource(Muscle_checker, '/muscle_checker')  # Links the class to the /muscle_checker endpoint.


if __name__ == '__main__':
    app.run()  # Runs the Flask app