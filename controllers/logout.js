var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){

	//req.session.username = null;
	res.clearCookie('username');
	res.redirect('/');
});

module.exports = router;

