var connect = require('connect'),
    http = require('http');

var app = connect()
    .use(connect.favicon())
    .use(connect.logger('dev'))
    .use(require('connect-livereload')({port: 35729}))
    .use(connect.static(__dirname))
    .use(connect.directory(__dirname))
    .use(connect.cookieParser())
    .use(connect.session({ secret: 'my secret here'}))
    .use( function(req, res) {
      res.end('Hello from connect!\n');
    });

http.createServer(app).listen(3000);

livereload = require ('livereload');
server = livereload.createServer({exts: []});
server.watch(__dirname);
