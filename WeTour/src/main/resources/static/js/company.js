/*snb_block*/
$(document).ready(function() {
	//lnb
	$("ul.lnb_nav li.lnb_menu").each(function(index){
		if( $(this).find("ul.lnb_sub").length )
		{
			$(this).addClass("on_close");
		}else{
			$(this).addClass("off_close");
		}
	});
	var toggle_idx = 999;
	$("ul.lnb_nav li").click(function() {
		$("ul.lnb_nav li.lnb_menu").removeClass("active");
		$("ul.lnb_nav li > ul.lnb_sub").hide();
		$("ul.lnb_nav li.lnb_menu").each(function(index){
			if( $(this).find("ul.lnb_sub").length )
			{
				$(this).removeClass("on_open");
				$(this).addClass("on_close");
			}else{
				$(this).removeClass("off_open");
				$(this).addClass("off_close");
			}
		});
		if( toggle_idx != $(this).index())
		{
			if( $(this).find("ul.lnb_sub").length )
			{
				$(this).find(".lnb_sub").show();
				$(this).removeClass("on_close");
				$(this).addClass("on_open");
			}else{
				$(this).removeClass("off_close");
				$(this).addClass("off_open");
			}
			toggle_idx = $(this).index();
		}else{
			toggle_idx = 999;
		}
		$(window).scroll();
	});

	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		var sclThis = $(".lnb_block");
		var sclfoot = $("#footer");
		var nowscroll = scrollTop + $(".scroll_action").height() + 100 ;
		if (scrollTop > $("#header").height() && nowscroll < sclfoot.offset().top ){
			sclThis.addClass("lnb_fixed");
			sclThis.css({"top":"0"});
		}else if (scrollTop > $("#header").height() && nowscroll > sclfoot.offset().top ){
			sclThis.css({"top":( sclfoot.offset().top - nowscroll - 50 )+"px"});
		}else {
			sclThis.removeClass("lnb_fixed");
		}
	});
});

