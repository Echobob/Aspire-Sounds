// Site configuration here...
exports.port = process.env.PORT || 3000;

if (process.env.NODE_ENV == "production") {
	exports.mongoose = "mongodb://aspiresounds:somepassword@127.0.0.1/aspiresounds";
	exports.hostname = "aspiresounds.com";
} else {
	exports.mongoose = "mongodb://127.0.0.1/aspiresounds";
	exports.hostname = "127.0.0.1";
}