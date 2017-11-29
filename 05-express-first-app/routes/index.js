var express = require('express');
var router = express.Router(); //imports the express router sorta

/* GET home page. */ // the actual routing is in the page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: false });
});

/* GET users listing. */
router.get('/users', function(req, res, next) { // these act as subroutes
  res.send('respond with a resource');
});

router.get('/users/detail', function(req, res, next) { // these act as subroutes
  res.send('detail');
});


module.exports = router;
