# Nathanilescas.github.io
This Repository is for my portfolio website

DOWNLOADING THE PROGRAMS ENVIRONMENT:

When I start this project I used NVM (Node Version Manager) to help me build an environment for the project.
    - link: https://github.com/nvm-sh/nvm

After downloading the NVM I installed Node 10 with NVM command
    - $ nvm install 10 : Node10 was the LTS version so it could be compatible with older features
I made it the default version
    - $ nvm alias default 10 : this ensure that whenever you enter the enironment, you'll be using Node10

I used NPM version 6 (globally) to ensure that all my project will be using that version 
    - $ npm install -g npm@6 : the -g flag means it's installing it globally

** IMPORTANT ** - to check if it downloaded, use these two code. It should display the version in the console
    - $ npm --version
    - $ node --version 





SETTING UP THE PROJECT: 

root/Configs: Now lets initialize the project with a package.json file. . A package defines various attributes of the application. One such important attribute is a list of other packages that the application depends upon.
    - I went to my root/Configs fold and initialized it there using this npm command
    - $ npm init  --> output: package.json

root/Configs: I install the express version 4 package
    - $ npm install express@4 --> output:  dir(node_modules) and package-lock.json

root/Configs: I install the babel/core version7 and the babel command line
    - $ npm install --save-dev @babel/core@7 @babel/cli@7 : ** NOTE ** - I decided not to make babel/cli@7(command line) global, to keep everything within this package
    - To check the download use: $ node_modules/.bin/babel --version

root/Configs: I installed babel/preset-react@7 to be able to convert my app.jsx file into pure JS
    - $ npm install --save-dev @babel/preset-react@7
    - (optional) converting it manually :
        $ npx babel <file being converted> --presets @babel/react --out-dir <placement of file>

root/Configs: I downloaded one last package because some browsers don't support the syntax and transfoms, and this package allows babel to automatically figure out
    - $ npm install --save-dev @babel/preset-env@7
        I created a .babelrc file to target the following browsers"@babel/preset-env", 
        {
        "targets": {
          "ie": "11",
          "edge": "15",
          "safari": "10",
          "firefox": "50",
          "chrome": "49"
        }
