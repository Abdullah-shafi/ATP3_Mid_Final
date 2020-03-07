//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var exValidator 	= require('express-validator');
var home 			= require('./controllers/home');
var login 			= require('./controllers/login');
var logout			= require('./controllers/logout');
var app = express();
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');

//configuration
app.set('view engine', 'ejs');

router.use(express.static('./public'))
router.use('/abc', express.static('xyz'));

//middleware
app.use(express.static('public'))
app.use('/abc', express.static('xyz'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use(exValidator());
app.use('/home', home);
app.use('/login', login);
app.use('/logout', logout);




//routes


app.get('/', function(req, res){	
	
		userModel.getAll(function(results){
			if(results.length > 0)
			{
			      res.render('index', {propertylist: results});
		    }
		    else
		    {
			 res.render('index', {propertylist: results});
		    }
			
		});
	
});

//Property_details_nonreg
app.get('/Property_details_nonreg/:property_id', function(req, res){
	var user = {
		id: req.params.property_id
	};

	userModel.getProperty(user, function(results){
		if(results.length > 0){
			res.render('Property_details_nonreg', {propertylist: results});
		}else{
			res.redirect('Property_details_nonreg/'+req.params.property_id);
		}
	});
});

app.post('/Property_details_nonreg/:property_id', function(req, res){
	
	var user = {
		id: req.params.property_id
	};

	userModel.getProperty(user, function(results){
		if(results.length > 0){
			res.render('Property_details_nonreg', {propertylist: results});
		}else{
			res.redirect('Property_details_nonreg/'+req.params.id);
		}
	});
})


//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
