var mongoose = require('mongoose');
var PoemSchema = mongoose.Schema({
	question: String,
});
module.exports = mongoose.model('Poem', PoemSchema);
