var mongoose = require('mongoose')
    , schema = mongoose.Schema
    , ObjectId = schema.ObjectId
    , models = require('./index');

var followsSchema = schema({
    source: { type: ObjectId, ref: "BaseUser" },
    destination: { type: ObjectId, ref: "BaseUser" }
});

var Follows = exports.Follows = mongoose.model("Follows", followsSchema);