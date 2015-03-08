var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');


var config = require('./config');

// config
(function() {
	app.set('view engine', config.view_engine);
	app.set('views', config.views_dir);
	app.engine('html', require('ejs').renderFile);
	app.use(express.static(__dirname, '.'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
}());

// setup router
var routes = express.router;
var home = function(req, res) {
	if (config.debug) {
		var context = req.dataProcessed;
		res.render('test.html', context);
	}
	else {
		/*
		var context = req.dataProcessed;

		res.render('text.html', {
			username: "Matrix",
			passwd: "123123",
			age: "666"
		});
		*/
	}
}

var post = function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	var json = JSON.parse(req.body.tbl);
	var html = "#tbl " + req.body.tbl + "<br/>"
			 + "username: " + json.username + "<br/>"
			 + "password: " + json.password + "<br/>"
			 + "#tbl2 " + req.body.tbl2 + "<br/>";
	res.write(html);
	res.end();
}

app.get('/', home);
app.post('/demo', post);
app.listen(3000);