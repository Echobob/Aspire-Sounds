$("document").ready(function() {
	$("#client, #artist").click(function() {
		window.location = $(this).attr("href")
	});
})