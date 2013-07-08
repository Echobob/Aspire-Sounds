var express = require('express')
	, http = require('http')
	, path = require('path')
	, mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view cache', true);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
//app.use(express.csrf()); // csrf protection
app.use(express.methodOverride());
app.use(function(req, res, next) {
	// request middleware
	
	next();
});
app.use(app.router);
app.use("/", express.static(path.join(__dirname, 'public'))); // serve static files

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
	app.set('view cache', false);
}

app.get ('/', function(req, res) {
    res.render('index', { title: "Test page" });
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
