var mongoose = require('mongoose')
    , schema = mongoose.Schema
    , ObjectId = schema.ObjectId
    , mongooseAuth = require('mongoose-auth')
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
		set: utils.toLowerCase,
		default: ""
	},
	created: {
		type: Date,
		required: true,
		default: Date().now
	},
	deleted: {
		type: Boolean,
		default: false
	}
	telephone: {
		type: String
	},
	dateOfBirth: {
		type: Date
	},
	country: {
		type: ObjectId
		ref: 'Country' // refers to Country collection
	}
});
var User; // user model we define later..

userSchema.plugin(mongooseAuth, {
	everymodule: { // make User model available to all authentication methods
		everyauth: {
			User: function() {
				return User;
			}
		}
	},
	password: {
		loginWith: 'email', // users login with email
		
		everyauth: {
			// define paths here
			getLoginPath: '/login',
			postLoginPath: '/login',
			loginView: 'login.jade',
			getRegisterPath: '/register',
			postRegisterPath: '/register',
			registerView: 'register.jade',
			loginSuccessRedirect: '/',
			registerSuccessRedirect: '/',
			
			//authenticate: function(login, password) {
				// Custom authentication method here...
			//}
		}
	}
})
