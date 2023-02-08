# react_dashboard
Last update: 2023-02-06 23:10
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
        - Focus on making it look good in size "xl" and then make it work for the other sizes.
