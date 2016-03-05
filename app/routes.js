var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('Hello');
});

router.get('*', function(req, res, next) {
  res.status(404).send({Error: true, Message: 'Resource Not Found.'});
});
module.exports = router;
