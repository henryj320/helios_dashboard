 # react_dashboard
Last update: 2023-02-27 23:59
<br><br>

## react_dashboard

**Title**: react_dashboard

**Date Started**: 2023-01-08

**Date Completed**: 2023-02-28 (51 days)

**Language**: React

**Overview**: Develop a React frontend using a template. Develop it from scratch making use of a template's components when required. Have separate pages for each Python project. Using axios like you did in the devops sprint to connect to a running API and output the results.

**Result**: The first form of the React Dashboard is now complete. The Dashboard and Muscle Checker pages are fully-functional, but Gym Calendar and RPi Health need to be completed.

View the [changelog](changelog.md) here.

---

### Running the Project

To run the project, follow these steps:

#### Cloning the Repository
First, ` git clone ` the repository. Open it in a terminal or IDE and ` cd ` into the "react_dashboad_app" directory.

#### Running the React App
You will need two terminals - one to run the React app and another to run the backend API. In one terminal, run the React app using the commands below:
``` bash
sudo apt install nodejs  # Required packages to use React.
sudo apt install npm

npm install  # Installs all packages required by the app.
npm start  # Runs the app.
```
If you receive the error: "*/usr/bin/node: bad option: --openssl-legacy-provider*" then run ` npm install node --reinstall-packages-from=node `.

#### Running the API
First, you will need to change the "base_url" parameter inside of "src/pages/*Muscle_checker.js*" to be the correct IP:Port pair. This needs to be the IP:Port pair that the API is run on. If you do not know the IP:Port pair, follow the steps below, change the file and then rerun the API.

In another terminal, you will need to run the API. Run:
``` bash
python3 -m venv venv  # Creates and runs a new virtual environment.
. venv/bin/activate

pip install -r requirements.txt  # Installs the packages required by the backend.

python3 ../api.py  # Runs the API.
```
