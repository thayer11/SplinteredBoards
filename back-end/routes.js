var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');


module.exports = router; 

router.get('/', function (req, res) {
  res.send('hello world');
})