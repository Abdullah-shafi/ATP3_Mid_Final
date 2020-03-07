var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password
		};

		userModel.validate(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
				res.redirect('home/Customer_Home');
			}

			else{
				
				
				//res.redirect('/login');


		req.checkBody('password','*username/password is incorrect').len(100, 600);
   	    const err = req.validationErrors();

   	    if(err)
   	    {		

                res.render('login', {errors: err});

        }
        else
   		res.redirect('login');

			}
		});
});

module.exports = router;

