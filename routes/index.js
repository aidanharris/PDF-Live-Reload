var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/file/:file', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/proxy/', function(req, res) {
  console.log('req.param(\'file\'): ' + req.param('file'));
  res.sendfile(req.param('file'));
});

module.exports = router;
