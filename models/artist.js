var mongoose = require('mongoose')
    , schema = mongoose.Schema
    , ObjectId = schema.ObjectId
    , mongooseAuth = require('mongoose-auth')
    , models = require('./index');

// Artist prototype
var artistSchema = schema({
    details: { type: ObjectId, ref: 'BaseUser' },
    verified: { type: Boolean, default: false },
});

var Artist = exports.Artist = mongoose.model('Artist', artistSchema);