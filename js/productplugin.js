

		//Question# 3C: Plugin-2

$(document).ready(function(){
	$.fn.color1=function(){
		this.css("color","Black")
		this.css("text-shadow","None");
		this.css("fontSize","30px");
		this.css("text-decoration","underline");
		this.css("text-transform","capitalize");
		
		this.slideUp(2000);
		this.slideDown(2000);
		this.fadeTo(1000, 0.2);
		this.fadeTo(1000,1);
		
	};
	$(".animation").color1();
	});
	