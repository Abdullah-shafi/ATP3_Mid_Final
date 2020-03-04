var express 	= require('express');
var router 		= express.Router();


//home
router.get('/', function(req, res){
	res.render('home/Customer_Home');
});


//profile
router.get('/', function(req, res){
	res.render('home/Customer_Home');
});
module.exports = router;

