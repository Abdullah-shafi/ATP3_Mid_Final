var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');


router.use(express.static('./public'))
router.use('/abc', express.static('xyz'));




router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/');
	}else{
		next();
	}
});
//home

router.get('/Customer_Home', function(req, res){	
	
		userModel.getAll(function(results){
			if(results.length > 0)
			{
			      res.render('home/Customer_Home', {propertylist: results});
		    }
		    else
		    {
			 res.render('Not_complete ');
		    }
			
		});
	
});



//profile
router.get('/Customer_Profile', function(req, res){



     var user=
     {
     	username: req.cookies['username']
     };
	//if(req.cookies['username'] != null){
			        userModel.getProfile(user,function(results){

		
			if(results.length > 0)
			{
			      res.render('home/Customer_Profile', {profile: results});
		    }
		     else
		    {
			 //res.redirect('Customer_Home');
			   res.render('home/Customer_Profile', {profile: results});
		    }
		   
		});
	  // }

	  

});


//FeedBack
router.get('/Customer_Feedback', function(req, res){
	res.render('home/Customer_Feedback');
});


//Customer_upload
router.get('/Customer_Upload', function(req, res){
	res.render('home/Customer_Upload');
});


//Customer_edit
router.get('/Customer_Edit', function(req, res){

	
var user=
     {
     	username: req.cookies['username']
     };
	
			        userModel.getProperty2(user,function(results){

		
			if(results.length > 0)
			{
			      res.render('home/Customer_Edit', {propertylist: results});
		    }
		     else
		    {
			 
			   res.render('home/Customer_Home');
		    }
		   
		});
	 
	  

});


//Customer_Delete
router.get('/Customer_Delete', function(req, res){
	
	var user=
     {
     	username: req.cookies['username']
     };
	//if(req.cookies['username'] != null){
			        userModel.getProperty2(user,function(results){

		
			if(results.length > 0)
			{
			      res.render('home/Customer_Delete', {propertylist: results});
		    }
		     else
		    {
			 //res.redirect('Customer_Home');
			   res.render('home/Customer_Home');
		    }
		   
		});
	  // }

});


router.get('/Customer_Delete/:property_id', function(req, res){
	
	var user = {
		id: req.params.property_id
	};

	userModel.delete(user, function(status){
		if(status){
			res.redirect('/home/Customer_Delete');
		}else{
			res.redirect('home/Customer_Delete/'+req.params.id);
		}
	});
})






//Customer_Delete
router.get('/Change_Password', function(req, res){
	res.render('home/Change_Password');
});



//Customer_Edit_F
router.get('/Customer_Edit_F/:property_id', function(req, res){
	var user = {
		id: req.params.property_id
	};

	userModel.getProperty(user, function(results){
		if(results.length > 0){
			res.render('home/Customer_Edit_F');
		}else{
			res.redirect('/home/Property_Edit_F/'+req.params.id);
		}
	});
});






//Property_details
router.get('/Property_details/:property_id', function(req, res){
	var user = {
		id: req.params.property_id
	};

	userModel.getProperty(user, function(results){
		if(results.length > 0){
			res.render('home/Property_details', {propertylist: results});
		}else{
			res.redirect('/home/Property_details/'+req.params.id);
		}
	});
});

router.post('/Property_details/:property_id', function(req, res){
	
	var user = {
		id: req.params.property_id
	};

	userModel.getProperty(user, function(results){
		if(results.length > 0){
			res.render('home/Property_details', {propertylist: results});
		}else{
			res.redirect('/home/Property_details/'+req.params.property_id);
		}
	});
})





//Customer_Edit_Profile

router.get('/Customer_Edit_Profile', function(req, res){

   
     var user=
     {
     	username: req.cookies['username']
     };
	
			        userModel.getProfile(user,function(results){

		
			if(results.length > 0)
			{
			      res.render('home/Customer_Edit_Profile', {profile: results});
		    }
		     else
		    {
			 
			   res.render('home/Customer_Edit_Profile');
		    }
		   
		});
});

router.post('/Customer_Edit_Profile', function(req, res){

   
     var user=
     {
     	id:req.body.id,
     	username:req.cookies['username'],
     	name:req.body.name,
     	email:req.body.email,
     	phone:req.body.phone
     };
	
			userModel.updateProfile(user,function(status){

		
			if(status)
			{
			      res.redirect('/home/Customer_Profile');
		    }
		     else
		    {
			 
			   res.render('home/Customer_Edit_Profile');
		    }
		   
		});
});



module.exports = router;

