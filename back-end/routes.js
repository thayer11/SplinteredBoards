var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var poemController = require('../controllers/poem-Controller');



module.exports = router; 

router.get('/', function (req, res) {
   res.send("TODAY");
})
