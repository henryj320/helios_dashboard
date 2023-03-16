# react_dashboard
Last update: 2023-02-27 23:58
<br><br>

## Changelog for react_dashboard

### Sprint 1

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
        - ` python ../api.py ` in the terminal.
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
41. Making the API visible across the network
    - Probably not necessary - Both will be hosted on the RPi.
        - Still useful.
    - Also set the port to 4,000 to try and stop issues with React.
42. Making the GET and PUT methods
    - GET to output the JSON with a given string.
    - PUT to update the insert_calendar_text.txt file.
    - Tested both. Worked fine!
        - Header: content-type     application/json
    - Backend for muscle_checker is now ready.
43. Adding the front-end for muscle_checker
    - npm install axios
        - Hangs.
    - Deleted package-lock.json
    - Deleted node-modules
    - npm install
        - Hangs.
    - npm cache clear --force
    - Still hangs...
    - npm -v
        - 8.19.3
    - npm install -g npm@latest
        - Hangs
    - npm set strict-ssl false
    - npm install
        - Still hangs
        - network request to https://registry.npmjs.org/axios failed, reason: connect ETIMEDOUT 2606:4700::6810:1923:443
        - network In most cases you are behind a proxy or have bad network settings.
        - network If you are behind a proxy, please make sure that the
        - npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
    - ping registry npmjs.org
        - To check it is reachable
    - ping google.com
        - Failed
    - ping 8.8.8.8
        - Worked
    - Is [this](https://askubuntu.com/questions/886359/ping-8-8-8-8-works-but-ping-www-google-com-doesnt) the issue?
    - Recovered package-lock.json and node-modules
    - Tried it on the work laptop
        - npm install works fine.
        - Can I just move the axios files across?
            - Seems to still run like that
44. Trying to add axios to React
    - pip install flask-cors
    - CORS(app) seems to work
    - Setting state to update with response
        - cannot use state because it doesnt extend component.
    - Using useState instead
45. Came up with an idea for how muscle_checker should be laid out:
    - Grid-like pattern like the main page.
        - One grid item per muscle group (push, pull, legs, misc)
            - Contains exercises for that group in a table
                - Exercise (dropdown)
                - Muscle (autofill from exercise)
                - Delete button
            - "Add" button to add more exercises
        - "Add"  button to add more muscle groups
        - Alternative grid item to just paste the calendar content into (START WITH THIS)
    - This could then be converted into the required format.
44. Adding the muscle checker page backend
    - ERR_BLOCKED_BY_CLIENT means that Brave blocked it
    - ERR_EMPTY_RESPONSE means that you are trying to connect to localhost instead of 192.168...
    - Getting a URL argument to know whether entering the page for the first time, or after data is filled
    - Made the basic form
    - Made a submit button
    - TODO:
        - Write a muscle_checker function to update the .txt file
        - Make a JS function to call it with POST
        - Add that to the returnMuscles() method
        - Output the response
    - Made a new function in muscle_checker_script.py to update insert_calendar_text.txt
    - Trying to call the PUT method.
        - {"text": "hey"}
    - GET seems to happen before PUT. Need to make it sync
    - All sorted. Works now, just looks terrible
45. Drew a design for the muscle checker page
46. Trying to add the elements.
    - Taking some time.
    - Weird issue with having inline items - set them to "display: flex".
    - Added a sidebar with working links.
    - Muscle checker page is now finished for the large scaling.
        - Except for pictures
47. Added GitHub link to the sidebar.
48. Current status:
    - Dashboard
        - Everything visible and working in "xl" scaling.
        - Images not customised yet.  **TODO**
    - Muscle Checker
        - API calls working.
        - One item for intial, another for results.
        - Form-style input not added yet. Only option is pasting the calendar code.
        - Tick and Cross images not added yet.  **TODO**
    - RPi Health
        - Current static example content.
        - No graphs added yet.
    - Sidebar
        - Created and works on "xl" scaling.
        - Spacing either side could be improved  **TODO**.
    - GitHub
        - Link added
49. Making the minor changes
    - Increasing the margins for items in the sidebar.
        - Just added margins
    - Setting the images
        - Using temporary ones for now
        - Changed the colour to #1B1F23. Looks really nice

---
## Running the App

- ` cd ` into the "react_dashboard_app" directory.
- ` npm start ` in one terminal.
- In another terminal:
    - ` . ../venv/bin/activate `
    - ` python ../api.py `

---

49. Making the minor changes
    - Increasing the margins for items in the sidebar.
        - Just added margins
    - Setting the images
        - Using temporary ones for now
        - Changed the colour to #1B1F23. Looks really nice
50. Merging the branch in.
51. Fixing the scaling
    - "md" Rpi_health needs to be split to two rows
    - Scaling on Home.js is much better
    - One idea: Why even have the description of the apps?
        - Just have the image and name in a table
        - Followed that idea. Looks a lot better!
    - Everything fixed in Dashboard
        - Potentially the RPi health scaling isnt perfect, but that's changing anyway
    - Everything fixed in Muscle Checker
        - Except maybe background repeat
52. Adding animations
    - Decided to do it with CSS. Easier.
    - Added colour change, rescale and rotation.
53. Code cleanup
    - Removing commented code, spaces, etc.
54. Trying to run it on the RPi
    - Added to the README how to run it
    - ` npm start `
        - "/usr/bin/node: bad option: --openssl-legacy-provider"
            - Solution apparently is: ` npm install node --reinstall-packages-from=node `.
    - "hwmon hwmon1: Undervoltage detected!"
        - Restarting the Rpi
    - Setting webadmin as the owner
        - su
        - sudo chown webadmin react_dashboard_app
        - su webadmin
    - npm start
        - "EACCES: permission denied, open '.../node_modules/.cache/.eslintcache'
            - ` rm /home/webadmin/Git_Repos/react_dashboard/react_dashboard_app/node_modules/.cache/.eslintcache `
            - Nope, that didnt fix it.
            - Created a *.eslintignore* file and added "*" to it.
                - That worked!
    - Running the api
        - Alt + F2 to open another terminal.
        - API did not have permission
            - ` chown -R webadmin:webadmin react_dashboard `
    - Need to add "," on Muscle Checker page between items.

### Sprint 2

55. Adding rpi_health to api.
    - ` . venv/bin/activate `.
    - ` python ../api.py `.
    - Fixed bug where uptime didn't work properly if days running < 1.
    - Adding it to api.py
    - Splitting into GET and POST
        - GET the current health metrics
        - POST the current health metrics into *records.json* and then return *records.json*
    - Tested they work with HTTP Client extension.
56. Calling rpi_health in React.
    - Added it to Rpi_health.js
    - Completely working, except it does say uptime is "1 days"
57. Making the rpi_health images
    - Drew them out
    - Making them on Pinta
        - Not very good. Switching to paint.net
    - Switched to Windows
    - Finished temp and cpu.
    - Keeps saying something is running on another port
        - ` fuser -k 4000/tcp `
58. Adding the layout
    - Pictures added
    - API calls made
    - Progress bars added
        - Temp
        - CPU Usage
        - Memory Usage
    - Added the title
59. Adding the other links (strava, youtube, google calendar)
