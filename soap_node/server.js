var express = require('express')
var bodyParser = require('body-parser')
var port = 8080


var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/home', function(req, res){
	res.json('welcome to the soap application');
});

app.post('/simpleInterest', function(req,res){
	var principal = req.body.p;
	var years = req.body.n;
	var roi = req.body.r;
	
	try {
		var amount = principal*years*roi/100;
		console.info("simple inetrest: " + amount);
		res.json({"amount": amount});
		
	} catch(err){
		console.error(err.stack);
		res.status(500).json(err.stack)
	}
});


// comment 1

app.listen(port, function(){
	console.info('application started at ' + port);
});