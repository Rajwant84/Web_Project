

		//Question# 3C: Plugin-1

 $(document).ready(function(){
	$.fn.color2=function(){
		this.css("color","red");
		this.css("fontSize","60px");
		this.css("text-decoration","underline");
		this.css("text-transform","capitalize");
		this.css("backgroundColor","#000000");
		this.hide(800);
		this.show(800);
		
		
	};
	
	
	$(".magictime").color2();
	
	});
	
	
	
