# react_dashboard
Last update: 2023-02-12 00:28
<br><br>

## Changelog for react_dashboard

1. Created the project and README.

Following the tutorial [here](https://reactjs.org/docs/create-a-new-react-app.html):

2. Checking whether NPX (Package runner that comes with npm) or NPM are installed.
    - ` npm `
    - ` npx `
    - Neither are installed. 
3. Downloading the latest version of NodeJS 18.13.0 LTS.
    - ` sudo snap install node --classic `
4. Checking whether NPX and XPM are installed. Yep!
5. ` cd Git_Repos/python_projects/react_dashboard/initial_learning_react_app/ `
6. Creating the app.
    - ` npx create-react-app first_app `
    - Taking a while. Created 97 MB of files.
        - 96 MB of it are in node_modules
7. Running the app.
    - ` npm start `
    - Error: Could not find *package.json*.
    - ` cd first_app `
    - ` npm start `
    - Working fine! Sweet. Running at http://localhost:3000/.
8. Deciding a template from [here](https://www.creative-tim.com/templates/react-free?page=1)
    - Best is Material Dashboard 2 - [here](https://www.creative-tim.com/product/material-dashboard-react).
9. Trying to run it
    - Downloaded it
    - ` npm start `
    - sh: 1: react-scripts: not found
    - ` npm install`
    - Grabbing dependencies
    - ` npm start `
    - Worked but a lot of errors
10. Fixing the errors
    - Error: EMFILE: too many open files
    - Just closed things. Now works
11. Looking into how it works
    - App.js
    - index.js
        - Runs App.js
    - Look into "src/examples"
    - Lots of things in the *package.json*
    - Dashboard is in src/layouts/dashboard/index.js
    - Worth seeing how it goes to one
12. How to view on another computer?
    - ` HOST=0.0.0.0 npm start `
    - Then I can connect to it with 192.168.1.101:3000
    - You can also set a specific port: ` HOST=0.0.0.0 PORT=5000 npm start `
13. Drawn rough designs
14. Made the new app
    - ` npx create-react-app react_dashboard_app `
    - ` cd react_dashboard_app `
    - ` npm start `
15. Creating the folders inside of src
    - "assets" - Images, themes, etc.
    - "components" - React components.
16. Adding the DefaultNavbar
    - Not going to work like that. Need to make this itself and then clean it up.
17. Moving onto using MUI
    - ` npm install @mui/base `
    - ` npm install @mui/icons-material `
    - Trying to add a sidebar
    - Getting errors
    - Updated "react-scripts": "^0.9.5" to "react-scripts": "^4.0.3" in *package.json* and then ` npm install `.
    - Changed line to "start": "react-scripts --openssl-legacy-provider start"
    - ` npm install @emotion/react `
    - ` npm install @emotion/styled `
    - ` npm install @emotion/core `
    - Still getting "Module not found: Can't resolve '@emotion/styled'"
    - ` rm -rf node_modules `
    - ` rm -f package-lock.json `
    - ` npm cache clean --force `
    - ` npm install `
    - Still getting "Module not found: Can't resolve '@emotion/styled'"
    - ` npm install @mui/material @mui/styled-engine-sc styled-components `
    - Restarted everything again. Still no luck
    - Could you duplicate the Material Dashboard 2 *package.json*?
        - Doing that
        - ` rm -rf ... `
        - Yay! no error
18. Looking into using more component libraries
    - Lots of good options
    - [here](https://x-team.com/blog/best-react-component-libraries/)
    - Best options:
        - React Admin - Looks perfect for a Dashboard
        - Bootstrap
        - MUI
        - Evergreen
        - Headless UI
        - visx - Great for graphs.
19. Making a React Admin website - [here](https://marmelab.com/react-admin/Tutorial.html)
    - ` npx create-react-app react_admin_library_app `
    - ` cd react_admin_library_app `
    - ` npm install react-admin `
    - ` npm install ra-data-json-server `
    - ` npm start `
    - Updating App.tsx (actually App.js)
        - 'React' must be in scope when using JSX  react/react-in-jsx-scope
            - Just add the import React back
        - You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (53:40)
    - ` rm -rf node_modules `
    - ` rm -f package-lock.json `
    - ` npm cache clean --force `
    - ` npm install `
    - Lots of issues
    - Converting from .js to .tsx
    - Remove everything
    - ` npm install `
    - Module not found: ./App
    - Giving up on React Admin website
20. Maybe better to do it from scratch
    - Learn more about React components
    - Figure out how to use env variables: transparency, light/dark mode, primary colour, etc.
    - How will I make everything gridded?
        - MUI Grid container and grid item
21. Trying Grids on first_app
    - [here](https://mui.com/material-ui/react-grid/)
    - Adding Grid
    - Adding imports
    - Adding dependencies to package.json
        ` npm install @mui/material @emotion/react @emotion/styled `
    - Error in ./~/@mui/material/node/styles/createTransitions.js
        - Updated react-scripts from 0.9.5 to 4.0.3
        - "start": "react-scripts --openssl-legacy-provider start"
    - sx keeps on coming up. What is it?
        - Define custom styles that have access to the theme
        - Using preoperties that are not CSS
        - E.g.
            - Borders
            - Colours in terms of a theme
        - [here](https://mui.com/system/getting-started/the-sx-prop/)
    - Can set a constant to apply same styling to everything
    - Set a layout that I am happy with.
    - Can you just set two divs like normal HTML, one for navbar, one for everything else?
22. Next step:
    - Create two divs, one for sidebar, one for everything else
    - Create blank grid items similar to that on:
    https://demos.creative-tim.com/material-dashboard-react/#/dashboard
23. On Golden Pass day (1st Feb 2023). Time to get a basic structure.
    - Error: ENOSPC: System limit for number of file watchers reached
        - Opening the terminal
        - ` echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p `
    - Useful to know that it runs over the network so you can view it on the work laptop without issue
    - <Grid> not showing.
    - ` rm -rf node_modules `
    - ` rm -f package-lock.json `
    - ` npm cache clean --force `
    - ` npm install `
    - Nope, didnt do anything
    - I forgot to add a Grid Item
24. Added some Grid Items
    - Figured out how to add margins (using [sx={{}}](https://mui.com/system/getting-started/the-sx-prop/))
    - Figured out drop shadows
25. How do I do overlayed images on the grid items?
    - Figured it out. Just using relative positioning
    - 60px images
    - width: '4rem',
      height: '4rem',
      position: 'relative',
      left: '7.5%',
      top: '-75%',
26. Figured out changing layout based on size
    -  xs, sm, md, lg, and xl
    - Change styling based on size
27. Closing branch "feature/running_react_template".
28. Testing that react_dashboard still runs with python_projects split into separate repos
    - ` npm start `
    - Wow, that just worked. Great stuff!
29. ` sudo apt update ` and `sudo apt upgrade ` on the RPi.
    - Its been a while.
30. Learning making a moving .svg
    - Complicated. I'll work on it at a later point.
31. Add the static content for the page
    - Adding the first 3 - Muscle Checker, Gym Calendar and GitHub
        - Set sizes: xs, sm, md, lg, xl and xxl.
        - Focus on making it look good in size "xl" and then make it work for the other sizes.
        - Making them look good in "lg".
        - Making them look good in "md".
        - Making them look good in "sm".
        - Still not done for "xs" but unlikely to be needed yet.
    - Added a background colour to the Grid Items.
32. Added Raspberry Pi Health
    - Not completely happy with scaling
    - Instead of using "rem", maybe try "vw" (viewpot width) amd "vh".
        - I'll look into it more in the future.
33. Making the Muscle Checker and Gym Calendar pages
    - npm install react-router-dom
    - Adding routes to index.js
    - Added links to them on the dashboard.
    - Fixed the text-decoration by removing it in App.css
34. Adding a sidebar
    - npm install react-pro-sidebar
    - Nevermind, developed my own
    - Need to fix the scaling
    - Buttons are added but no links yet
35. Converting the scaling to vw and vh.
    - Should help with the scaling.
    - "sm" isn't scaling well, but the rest are acceptable
    - Why not change Raspberry Pi Health to its own Grid?
        - Maybe in future. Just a placeholder for now.
36. Fix the thick bar issue and the images.
    - Turns out the <hr> bars were invisible with just the border showing.
    - Everything is now complete with the appearance except for the smaller scaling.
        - Consider the scaling more carefully
        - Complete change to the scale when the vw gets too low.
37. Setting up the endpoints.
    - Need to set up endpoints in Python. How does that work?
        - https://towardsdatascience.com/the-right-way-to-build-an-api-with-python-cd08ab285f8f
        - Could use a Flask API (like data-submission/webapi.file_api.py).
        - Could be on the level above so it holds 2 resources - muscle_checker and gym_calendar.
        - Add GET method and POST method.
    - Need to call to that endpoint using axios.
38. Making an endpoint
    - Could make one endpoint that imports autogenerate_gym_calendar and muscle_checker.
        - Then we wouldn't need to make changes to the actual scripts.
    - pip install flask-restful
    - imported everything
        - reqparse is used to parse parameters for POST requests
    - Added a Muscle_checker class for the methods
    - Ran the API with app.run()
    - Tested it worked:
        - http://127.0.0.1:5000/muscle_checker
            - Internal server error
                - Unimplemented errror. Good!
        - http://127.0.0.1:5000/shouldnt_work
            - Good! Because that means our endpoint is recognised.
    - Added a GET method
    - Downloaded "HTTP Client" VS Code extension
        - "..." -> New HTTP Request
    - Added a POST method
        - Struggling with:
            - "userID": "Missing required parameter in the JSON body or the post body or the query string"
            - I cannot figure out how to send that as a HTTP Request
            - Got it!
                - Needed to add a header:
                    - content-type
                    - application/json

                    - Body is:
                        - {"userID": "0011", "Person": null}
        - Somehow the payload isnt correct
            - curl http://127.0.0.1:5000/muscle_checker -d "userID=0011"
            - That worked
    - Adding a PUT method.
        - Looks identical to POST
    - Adding a DELETE method
        - Again, exactly the same.
39. Making muscle_checker pip installable
    - So that I can then import it
    - Followed my "Using Click" tutorial.
    - Creating a VE
    - Activating the ve
    - cd ../muscle_checker/
    - pip install -e .
        - Installed muscle_checker
    - cd ../react_dashboard/react_dashboard_app
    - May not work with the "-" in the name
        - pip uninstall muscle-checker
        - Removed the "-" in setup.py
        - . ../react_dashboard/venv/bin/activate
    - pip install -e .
    - pip install flask
    - pip install flask-restful
    - ModuleNotFoundError: No module named 'muscleChecker'
        - Added an entry point to setup.py
        - python -m pip install -e .
    - Still cannot import it. May be easier just to have a version of it locally.
40. Making a duplicate of muscle checker
    - Added it in scripts
    - Renamed run() to muscle_checker_run()
    - Running it on a GET request.
        - NameError: name 'muscle_checker_run' is not defined
        - mc.muscle_checker_run()
    - Changed reference in the script to all_muscles.json
    - GET method now outputs the data from muscle_checker


