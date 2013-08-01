$ ->
	$(document).foundation()
	# Write scripts here

	if $('#home-bottom')

		turtleCompensate = 0  # Tim, offset +/- goes here
		turtle = $('#home-bottom')
		turtleTop = turtle.offset().top
		turtleHeight = turtle.height()
		turtleScrolling = turtleTop # + turtleHeight - turtleCompensate

		animateTurtle = ()->
			console.log $(window).scrollTop()
			if $(window).scrollTop() > turtleScrolling
				turtle.addClass("animate")
			else
				turtle.removeClass("animate")

		$(window).scroll animateTurtle