var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var poemController = require('../controllers/poem-Controller');


<<<<<<< HEAD

module.exports = router
=======
module.exports = router; 

router.get('/', function (req, res) {
   res.send("TODAY");
})
>>>>>>> 94912fa6074b86a8d9e45e38ae29dd8b4e4a6b77
