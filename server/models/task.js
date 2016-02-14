var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	name: String
})

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
