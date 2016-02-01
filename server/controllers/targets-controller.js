var Target = require('../models/target');

module.exports.delete = function (req, res) {
	console.log(req.params.id)

	var target = new Target(req.body);
	console.log(target.name)
	Target.remove({_id: req.params.id}, function (err, result) {
		res.json(result);
	});
}

module.exports.create = function (req, res) {
	
	var target = new Target(req.body);
	console.log(target.name)
	target.save(function (err, result) {
		if (err) return console.error(err);
		res.json(result);
	});
}

module.exports.list = function (req, res) {

	Target.find({}, function (err, result) {
		if (err) return console.error(err);
		res.json(result);
	}); 
}