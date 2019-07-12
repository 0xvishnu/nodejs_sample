var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function (req,res) {

  let firstname = req.body.first;
  let lastname = req.body.last;

  res.render('output', {first:firstname,last : lastname})

})

res.redirdct



module.exports = router;
