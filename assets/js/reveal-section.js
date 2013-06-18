$(document).ready(function(){

	$("a.reveal-link").click(function(event){
		event.preventDefault();
		$(this).parent().prev("section").show("slow");
		$(this).hide();
		$(this).parent().next().children("a").delay(800).show(400);
		});


	$("a.reveal-section-link").click(function(event){
		event.preventDefault();
		$(this).parent().parent().children("*.hide").slideToggle(200);
		if ($(this).text() == "Show More")
       	$(this).text("Show Less")
    	else
       		$(this).text("Show More");
		});

});