
Introduction
------------
Using React's standard create-react-app scaffolding application is of great
convenience, but it's a bit mysterious as to what it actually does, and it
creates a huge set of dependencies that aren't needed for a minimal React application.

This React application was created by hand by following the steps here:

https://www.adrianprieto.com/building-a-react-js-app-from-scratch-in-10-steps/

It creates a more minimal application so that one can better understand what is happening.

Procedure
---------
```
mkdir by-hand
cd by-hand
npm install --save babel
npm install --save babel-cli
npm init
npm install --save webpack
npm install --save webpack-dev-server
npm install --save react
npm install --save react-dom
npm install --save babel-code
npm install --save babel-loader@7
npm install --save babel-preset-react
npm install --save babel-preset-2015
touch index.html App.js main.js webpack.config.js index.js
```

Edit the contents of the files per the description outlined in the above link

Start the application using:

```
npm start
```
