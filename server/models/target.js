var mongoose = require('mongoose');

// var targetSchema = mongoose.Schema({
// 	name: String
// })

// var Target = mongoose.model('Target', targetSchema);

// module.exports = Target;

module.exports = mongoose.model('Target', {
	name: String
});