var express = require('express');
var router = express.Router();
var practice = require('../query-practice')

router.get('/', function(req, res, next) {
  res.redirect('/movies');
});

module.exports = router;
