 # react_dashboard
Last update: 2023-02-27 23:59
<br><br>

## react_dashboard

**Title**: react_dashboard

**Language**: React

**Overview**: Develop a React frontend using a template. Develop it from scratch making use of a template's components when required. Have separate pages for each Python project. Using axios like you did in the devops sprint to connect to a running API and output the results.

**Result**: The first form of the React Dashboard is now complete. The Dashboard and Muscle Checker pages are fully-functional, but Gym Calendar and RPi Health need to be completed.

**Running the Project**: To run the project, follow these steps:
1. Run "git clone ...".
2. cd in the "react_dashboad_app" directory
3. In one terminal, run the React app:
``` bash
sudo apt install nodejs
sudo apt install npm

npm install
npm start
```
If you receive the error: "/usr/bin/node: bad option: --openssl-legacy-provider" then run ` npm install node --reinstall-packages-from=node `.


4. In another terminal, run the API with:
``` bash
python3 -m venv venv
. venv/bin/activate

pip install -r requirements.txt

python3 ../api.py
```
You will also need to change the "base_url" parameter inside of "src/pages/*Muscle_checker.js*" to be the correct IP:Port pair.

View the [changelog](changelog.md) here.
