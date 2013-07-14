$("document").ready(function() {
	$("#client, #artist").click(function() {
		window.location = $(this).attr("href")
	});
	
	$(".client, .artist").mousemove(function(event) {
		var $client = $(".client");
		var $artist = $(".artist");
		var artWidth = $artist.width();
		var coord = event.pageX;
		if (coord < artWidth) {
			var diff = (artWidth - coord) / artWidth;
			$artist.css({
				"box-shadow": "inset -"+(2+diff)+"px 0 "+(3+diff*6)+"px #000"
			})
		} else {
			var diff = (coord - artWidth) / artWidth;
			$client.css({
				"box-shadow": "inset "+(2+diff)+"px 0 "+(3+diff*6)+"px #000"
			})
		}
	});
})