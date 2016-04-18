var express 			= require('express')
	, app 				= express()
	, bodyParser		= require('body-parser')
	, mongoose			= require('mongoose')
	, taskController 	= require('./server/controllers/task.controller');

mongoose.connect('mongodb://mongo:27017/hello');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/controllers', express.static(__dirname + '/client/js/controllers'));
app.use('/services', express.static(__dirname + '/client/js/services'));
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function(req,res) { 
	res.sendFile(__dirname + '/client/views/index.html');
});

//Rest API
app.get('/api/task', taskController.list);
app.post('/api/task', taskController.create);
app.delete('/api/task/:id', taskController.delete);

app.listen(3000, function() {
	console.log('Listening!');
});
