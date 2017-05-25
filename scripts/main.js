$(document).ready(function()
{
	$("#searchBut").on("click", function()
	{
		var strQuery = document.querySelector("#searchQuery").value.split(/\s/g).join("%20");

		$.getJSON("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&titles=" + strQuery, function(wikiSearch)
		{
			try {
				if (wikiSearch.query.pages[-1].missing === "") $("p").text("Page not found, try another!").show().delay(4000).fadeOut();
			}
			catch (err) {
				$("p").load("https://en.wikipedia.org/api/rest_v1/page/html/" + strQuery).show();
			}
		})
	});

	$("#randomBut").on("click", function()
	{
		$("p").load("https://crossorigin.me/https://en.wikipedia.org/wiki/Special:Random");
	});
});
