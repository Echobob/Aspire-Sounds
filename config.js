// Site configuration here...
exports.hostname = function() {
	if (process.env.NODE_ENV == "production") {
		return "aspiresounds.com";
	} else {
		return "localhost";
	}
}();