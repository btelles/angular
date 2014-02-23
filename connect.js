var express = require('express'),
    http = require('http');

var people = [
  {firstName: 'bob', lastName: 'smith'},
  {firstName: 'tom', lastName: 'smith'},
  {firstName: 'jane', lastName: 'smith'},
  {firstName: 'mindy', lastName: 'smith'}];

var app = express()
    .use(express.favicon())
    .use(express.logger('dev'))
    .use(express.bodyParser())
    .use(require('connect-livereload')({port: 35729}))
    .use(express.static(__dirname))
    .use(express.directory(__dirname))
    .use(express.cookieParser())
    .use(express.session({ secret: 'my secret here'}))

app.get('/users', function(req, res) {
  res.send(people);
});
app.post('/users', function(req, res) {
  people.push(req.body);
  res.send(people);
});

http.createServer(app).listen(3000);

livereload = require ('livereload');
server = livereload.createServer({exts: []});
server.watch(__dirname);
