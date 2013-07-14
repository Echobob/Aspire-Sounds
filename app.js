var express = require('express')
	, http = require('http')
	, path = require('path')
	, mongoose = require('mongoose')
	, everyauth = require('everyauth')
	, models = require('./models')
	, config = require('./config');

var app = express();

// all environments
app.set('port', config.port);
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
    res.render('landingpage/index', { layout: 'landingpage/layout',
		title: "Landing Page | Aspire Sounds"
	});
});
app.get ('/client', function(req, res) {
	
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
