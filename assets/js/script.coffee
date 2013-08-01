$ ->
	$(document).foundation()
	# Write scripts here

	if $('#home-bottom')

		win = $(window)
		el  = $('#home-bottom')

		animateTurtle = ()->

			winPos = win.scrollTop() + win.height()
			elPos = el.offset().top + el.height()
			console.log elPos
			if winPos > elPos
				el.addClass("animate")
			else
				el.removeClass("animate")

		$(window).scroll animateTurtle