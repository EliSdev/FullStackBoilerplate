
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var path            = require('path');

var dbConf = require('./config/db');

var port = process.env.PORT || 3000;

// mongoose.connect(dbConf.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/api', require('./app/routes'));
app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
  res.redirect("/");
});

app.listen(port, function() {
  console.log('App is running on port ' + port);
});

exports = module.exports = app;
