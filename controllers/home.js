var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');
var multer=require('multer');


var storage= multer.diskStorage({

	destination: function(req,file,cb){
		cb(null,'public/')
	},
	filename: function(req,file,cb){
		cb(null,Date.now() + file.originalname)
	}

})

var upload=multer({storage: storage})

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
			 res.redirect('home/Customer_Home ',{propertylist: results});
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
			   res.redirect('home/Customer_Home');
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
	
	 var user=
     {
     	username: req.cookies['username']
     };
	
			        userModel.getProfile(user,function(results){

		
			if(results.length > 0)
			{
			      res.render('home/Customer_Upload', {profile: results});
		    }
		     else
		    {
			 //res.redirect('Customer_Home');
			   res.redirect('home/Customer_Upload');
		    }
		   
		});
});


router.post('/Customer_Upload',upload.single('image'),function(req,res,next){
       //var fileinfo=req.file.filename;
       var user=
      {
     	username: req.cookies['username'],
     	title: req.body.title,
        property_area :req.body.place,
        type: req.body.type,
        style: req.body.style,
        property_price: req.body.price,
        bed: req.body.bed,
        bath: req.body.bath,
        feet: req.body.feet,
        floor: req.body.floor,
        description: req.body.description,
        image:req.file.filename
      };
       userModel.UploadProperty(user,function(status){

		
			if(status)
			{
			      res.redirect('/home/Customer_Edit');
		    }
		     else
		    {
			 
			   res.redirect('/home/Customer_Upload');
		    }
		   
		});
})





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
			 
			   res.redirect('/home/Customer_Home');
		    }
		   
		});
	 
	  

});


//Customer_Sold/Rent

router.get('/Customer_Edit/:property_id', function(req, res){

	
var user=
     {
     	username:req.cookies['username'],
     	id:req.params.property_id
     };
	
	userModel.UpdateStatus(user,function(status){

		
			if(status)
			{
			      res.redirect('/home/Customer_Profile');
		    }
		     else
		    {
			 
			   res.redirect('/home/Customer_Home');
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

			 res.redirect('/home/Customer_Home');

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






//Change_Password

router.get('/Change_Password', function(req, res){
var user=
     {
     	username: req.cookies['username']
     };
	
			        userModel.getProfile(user,function(results){

		
			if(results.length > 0)
			{
			      res.render('home/Change_Password', {profile: results});
		    }
		     else
		    {
			 
			   res.redirect('home/Change_Password');
		    }
		   
		});
});

router.post('/Change_Password', function(req, res){

	if( req.body.npass==req.body.cpass){
var user=
     {
     	npass: req.body.npass,
     	
     	username: req.cookies['username']
     };
	
			 userModel.UpdatePassword(user,function(status){

		
			if(status)
			{

			      res.redirect('/login');
		    }
		     else
		    {
			 
			   res.redirect('home/Change_Password');
		    }
		   
		});

			}


   else{
        
        req.checkBody('cpass','Passwords do not match.').equals(req.body.npass);
   	    const err = req.validationErrors();

   	    if(err)
   	    {		

                res.render('home/Change_Password', {errors: err});

        }
        else
   		res.redirect('/home/Change_Password');
   }
   
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
			 
			   res.redirect('home/Customer_Home');
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
			 
			   res.redirect('home/Customer_Home');
		    }
		   
		});
});



module.exports = router;

