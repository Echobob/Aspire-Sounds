var mongoose = require('mongoose')
    , schema = mongoose.Schema
    , ObjectId = schema.ObjectId
    , mongooseAuth = require('mongoose-auth');

var userSchema = schema({
    name: String,
    surname: String,
    username: String,
    email: String, // used to login?
    password: { type: String, required: true },
    // artist
    artist: {
        registered: { type: Boolean, default: false },
        
    }
});
userSchema.plugin(mongooseAuth, {
    facebook: true // expand on this
});

var User = exports.User = new mongoose.model('User', userSchema);