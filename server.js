
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');

var dbConf = require('./config/db');

var port = process.env.PORT || 8080;

// mongoose.connect(dbConf.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use('/api', require('./app/routes'));

app.get('*', function(req, res, next) {
  res.status(404).sendFile('./public/404.html');
});

app.listen(port, function() {
  console.log('App is running on port ' + port);
});

exports = module.exports = app;
