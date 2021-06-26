/* global require, process */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('dist/myBlog/assets/database.json');
const middlewares = jsonServer.defaults({
  static: 'dist',
  noCors: false
});
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);


//Install express server
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static('./dist/myBlog'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/myBlog/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);