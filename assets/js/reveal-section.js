$(document).ready(function(){

	$("a.reveal-link").click(function(event){
		event.preventDefault();
		$(this).parent().prev("section").show("slow");
		$(this).hide();
		$(this).parent().next().children("a").delay(800).show(400);
		});
});