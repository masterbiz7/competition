$(function() {
	 if ($(window).width() == 540 ) {
	 	$(".fixed-menu").css("top", "-1000px");
	 } else {
	 	$(".fixed-menu").css("top", "0");
	 }

	var flag = 0;
	$(".hamburger-menu").click(function() {
		if(flag==0) {
		$(".hidden-menu__items")
		.css("display", "flex")
		.css("top", "70px");
		
		flag = 1;
	} else {
		$(".hidden-menu__items").css("top", "-5000px");
		flag = 0;
	}
	});
});


