const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
	name: String,
	size: Number,
	key: String,
	url: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Upload', UploadSchema)