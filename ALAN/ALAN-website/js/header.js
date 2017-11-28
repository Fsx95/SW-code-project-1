$(document).on("scroll", function() {
	if($(document).scrollTop()>200) {
		$("nav").removeClass("navbar-custom").addClass("navbar-sticky")
	} else {
		$("nav").removeClass("navbar-sticky").addClass("navbar-custom")
	}
});

/*$(document).on("scroll", function() {
	if($(document).scrollTop()>200){
		$("nav").removeClass("navbar-custom").addClass("navbar-sticky"):function(){
            $("navbar-sticky").slideDown()
        }
	} else {
		$("nav").removeClass("navbar-sticky").addClass("navbar-custom")
	}
});*/


/*$(document).scroll(function(){
    if($(document).scrollTop() >= 470) {
        $(this)($("nav").removeClass("navbar-custom").addClass("navbar-sticky")).slideDown()
    } else {
        $("nav").removeClass("navbar-sticky").addClass("navbar-custom")
    }
});*/