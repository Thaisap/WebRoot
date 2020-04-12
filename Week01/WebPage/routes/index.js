var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html');
 
});

/* GET home page. */
router.post('/NewOrder', function(req, res) {
  const Student = req.body;
  console.log (Student)
});


module.exports = router;
