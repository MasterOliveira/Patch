var express 			= require('express')
	, app 				= express()
	, bodyParser		= require('body-parser')
	, mongoose			= require('mongoose')
	, targetsController = require('./server/controllers/targets-controller');

mongoose.connect('mongodb://localhost:27017/hello');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/controllers', express.static(__dirname + '/client/js/controllers'));
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function(req,res) { 
	res.sendFile(__dirname + '/client/views/index.html');
});

//Rest API
app.get('/api/targets', targetsController.list);
app.post('/api/targets', targetsController.create);
app.delete('/api/targets/:id', targetsController.delete);

app.listen(3000, function() {
	console.log('Listening!');
});
