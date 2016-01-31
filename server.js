var express = require('express');

var app = express();

app.use('/controllers', express.static(__dirname + '/client/js/controllers'));
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function(req,res) { 
	res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(3000, function() {
	console.log('Listening!');
});
