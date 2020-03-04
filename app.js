//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var exValidator 	= require('express-validator');
var home 			= require('./controllers/home');
var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware
app.use(express.static('public'))
app.use('/abc', express.static('xyz'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use(exValidator());
app.use('/home', home);




//routes
app.get('/', function(req, res){
	res.render('index');
});
app.get('/home', function(req, res){
	res.render('home/Customer_Home');
});


//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
