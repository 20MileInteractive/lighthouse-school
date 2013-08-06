$(document).ready(function(){

	$(".accordion section").removeClass("active");

	$("a.reveal-link").click(function(event){
		event.preventDefault();
		$(this).parent().prev("section").toggle("slow");
		if ($(this).text() == "Read More") {
			$(this).text("Show Less")
		} else {
			$(this).text("Read More")
		};
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