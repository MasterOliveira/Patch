var Task = require('../models/task');

module.exports.delete = function (req, res) {
	console.log(req.params.id)

	var task = new Task(req.body);
	console.log(task.name)
	Task.remove({_id: req.params.id}, function (err, result) {
		res.json(result);
	});
}

module.exports.create = function (req, res) {
	
	var task = new Task(req.body);
	console.log(task.name)
	task.save(function (err, result) {
		if (err) return console.error(err);
		res.json(result);
	});
}

module.exports.list = function (req, res) {

	Task.find({}, function (err, result) {
		if (err) return console.error(err);
		res.json(result);
	}); 
}