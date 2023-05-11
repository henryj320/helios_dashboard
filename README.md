 # helios_dashboard
 
Last update: 2023-04-26 21:46
<br><br>

## helios_dashboard

**Title**: helios_dashboard

**Date Started**: 2023-01-08

**Date Completed (Sprint 1)**: 2023-02-28 (51 days)

**Date Completed (Sprint 2)**: 2023-02-16 (16 days)

**Language**: React

**Overview**: Develop a React frontend using a template. Develop it from scratch making use of a template's components when required. Have separate pages for each Python project. Using axios like you did in the devops sprint to connect to a running API and output the results.

**Result**: The first form of the React Dashboard is now complete. The Dashboard and Muscle Checker pages are fully-functional, but Gym Calendar and RPi Health need to be completed.

View the [changelog](changelog.md) here.

---

## Running the Project

### With Docker
The preferred way to run the React Dashboard is using Docker. This will start up two containers - one for the API and another for the website itself.

Before running the containers, you will need to change the IP within the following files:

- docker-compose.yml
- src/components/Sysvis/Sysvis.js
- src/pages/Muscle_checker.js

If you don't change the IP, a "cannot assign requested address" error will be raised and the website will not link properly to the API. Note that there are plans in place to change "base_url" to be an environment variable to make this process easier.

To run the React Dashboard, simply ` cd ` to the correct directory and then run **` sudo docker compose up -d `**. This will run each of the containers in detached mode (so that they are not attached to a terinal).

To stop the containers, run **` sudo docker compose down `** in the same directory. This will stop all of the containers and delete them. You can check that they are deleted with ` sudo docker ps -a `

If you want to remove the images generated, run ` sudo docker images ` and then remove the individual images with ` sudo docker rmi <image-id> `.

### Without Docker
To run the project, follow these steps:

#### Cloning the Repository
First, ` git clone ` the repository. Open it in a terminal or IDE and ` cd ` into the "helios_dashboad_app" directory.

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
