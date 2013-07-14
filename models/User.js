var mongoose = require('mongoose')
    , schema = mongoose.Schema
    , ObjectId = schema.ObjectId
    , everyauth = require('everyauth')
	, utils = require('./utils');

var userSchema = schema({
	name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		set: utils.lowerCase
	},
	password: {
		type: String,
		required: true
	},
	gravatar: {
		type: String,
		set: utils.lowerCase,
		default: ""
	},
	created: {
		type: Date,
		required: true,
		default: Date.now
	},
	deleted: {
		type: Boolean,
		default: false
	},
	telephone: {
		type: String
	},
	dateOfBirth: Date,
	country: {
		type: ObjectId,
		ref: 'Country' // refers to Country collection
	}
});






var User = mongoose.model('User', userSchema); // user model we define later..
