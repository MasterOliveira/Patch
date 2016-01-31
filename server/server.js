var express = require('express')

var app = express();

app.use('/', function(req,res) {
	res.send('Sup, dude');
});

app.listen(3000, function() {
	console.log('Listening!');
});
