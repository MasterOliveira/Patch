var express 			= require('express')
	, app 				= express()
	, bodyParser		= require('body-parser')
	, mongoose			= require('mongoose')
	, targetsController = require('./server/controllers/task-controller');

mongoose.connect('mongodb://localhost:27017/hello');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/controllers', express.static(__dirname + '/client/js/controllers'));
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function(req,res) { 
	res.sendFile(__dirname + '/client/views/index.html');
});

//Rest API
app.get('/api/task', targetsController.list);
app.post('/api/task', targetsController.create);
app.delete('/api/task/:id', targetsController.delete);

app.listen(3000, function() {
	console.log('Listening!');
});
