var express 	= require('express');
var router 		= express.Router();
router.use(express.static('./public'))
router.use('/abc', express.static('xyz'));

//home
router.get('/Customer_Home', function(req, res){
	res.render('home/Customer_Home');
});


//profile
router.get('/Customer_Profile', function(req, res){
	res.render('home/Customer_Profile');
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
	res.render('home/Customer_Edit');
});


//Customer_Delete
router.get('/Customer_Delete', function(req, res){
	res.render('home/Customer_Delete');
});

//Edit_Profile
router.get('/Customer_Edit_Profile', function(req, res){
	res.render('home/Customer_Edit_Profile');
});

//Customer_Delete
router.get('/Change_Password', function(req, res){
	res.render('home/Change_Password');
});



module.exports = router;

