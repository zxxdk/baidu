$(document).ready(function(){
  
	
	

	/*$(".one").addClass("style1");
	$(".one").mouseover(function(){
		/*$(this).toggleClass("style1");*/
	 /*  $(this).toggleClass("style2");
	});
	$(".one").mouseout(function(){
	   $(this).toggleClass("style2");
	   $(this).addClass("style1");
	});

	$(".two").addClass("style3");
	$(".two").mouseover(function(){
		$(this).toggleClass("style3");
	   $(this).toggleClass("style4");
	});
	$(".two").mouseout(function(){
	   $(this).toggleClass("style4");
	   $(this).addClass("style3");
	});*/
	$("#u_sp .user-name").mouseover(function(){
		$("div").removeClass("style1");
		$("div").addClass("style2");
	})
	$("#u_sp .user-name").mouseout(function(){
		$("div").toggleClass("style1");
	})

	$("#u_sp .setting-text").mouseover(function(){
		$("div").removeClass("style3");
		$("div").addClass("style4");
	})
	$("#u_sp .setting-text").mouseout(function(){
		$("div").toggleClass("style3");
	})

	$("#u_sp .s_bri").mouseover(function(){
		$(".s_bdbri").removeClass("cur-none");
		$(".s_bdbri").addClass("cur");
        $(".s_bdmainlink a").addClass("cur");
	})
    
    
    $('.s_bdbri').mouseout(function(){
        $(".s_bdbriwrapper").removeClass("cur");
        $(".s_bdbri").addClass("cur-none");
    });
    /*
    $('.s_bri').hover{
        function(){
            $('.s_bdbri').addClass("cur");
        },
        function(){
            $(this).removeClass("cur");
        }
    }*/
    /*
	$("#u_sp .s_bri").mouseout(function(){
		$(".s_bdbri").removeClass("cur");
		$(".s_bdbri").addClass("cur-none");
	})
	*/



    /*
	   $(".s-menus-outer .current").each(function(index){
		  var liNode = $(this);
		  $(this).click(function(){
			
				$("div.cur").removeClass("cur");//将content移除
			    $(".s-menus-outer .current").removeClass("current");
			    $("div").eq(index).addClass("cur");//移到那就加到那个上
			    liNode.addClass("current");
			
		 });


	});//遍历所有的li标签*/

    /*换肤*/
    $(".nav-1000").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    
    });
    $(".nav-1011").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-random").addClass('s-random-bg-block');
    	$(".s-skin-towTabNav").addClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    });
    $(".nav-1001").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    
    });
    $(".nav-1002").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    
    });
    $(".nav-1004").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1004');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    
    });
    $(".nav-1009").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").addClass('s-skin-random-block');
    
    });
    $(".nav-1010").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").addClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');

    
    });
    $(".nav-8888").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-8888');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('content-9999');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    
    });
    $(".nav-9999").click(function(){
    	$(".s-skin-layer-cell").addClass('show-nav-9999');
    	$(".s-skin-layer-cell").removeClass('show-nav-1001');
    	$(".s-skin-layer-cell").removeClass('show-nav-1010');
    	$(".s-skin-layer-cell").removeClass('show-nav-1009');
    	$(".s-skin-layer-cell").removeClass('show-nav-1000');
    	$(".s-skin-layer-cell").removeClass('show-nav-1002');
    	$(".s-skin-layer-cell").removeClass('show-nav-1004');
    	$(".s-skin-layer-cell").removeClass('show-nav-1011');
    	$(".s-skin-layer-cell").removeClass('content-8888');
    	$(".s-random").removeClass('s-random-bg-block');
    	$(".s-skin-towTabNav").removeClass('s-skin-random-block');
    	$(".s-skin-goddessNav").removeClass('s-skin-random-block');
    	$(".s-skin-starNav").removeClass('s-skin-random-block');
    
    });
    /*收起*/
    $(".title").click(function(){
        $(".s-skin-layer").addClass('s-skin-layer-1');
        $(".s-skin-layer").removeClass("s-skin-layer-2");
    });
   /*换肤按钮*/
   $('.s-skin').click(function(){
   	    $(".s-skin-layer").addClass("s-skin-layer-2");
   	    $(".s-skin-layer").removeClass("s-skin-layer-1");
   });
   /*换肤预览*/
   $(".pos-0").hover(
    function(){
    $(".preview-pageUI").css({
        'background':'url("https://ss0.bdstatic.com/l4oZeXSm1A5BphGlnYG/skin_plus/859.jpg?2")'
    })
    })
   $(".pos-1").hover(
    function(){
    $(".preview-pageUI").css({
        'background':'url("https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin_plus/832.jpg?2")'
    }),
    $("body").css({
        'background':'url("https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin_plus/832.jpg?2") no-repeat ',
        'background-size':'cover'
    })
    })
    $(".pos-2").hover(
    function(){
    $(".preview-pageUI").css({
        'background':'url("https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin_plus/833.jpg?2")'
    })
    })
    $(".pos-3").hover(
    function(){
    $(".preview-pageUI").css({
        'background':'url("https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/skin_plus/834.jpg?2")'
    })
    })

	/*下拉*/
	   $(".item1").click(function(){
	    $("#s_content_1").addClass('cur');
	    $('.item1').addClass("cur-color");
	    $("#s_content_1").removeClass("cur-none");
	    $("#s_content_2").addClass("cur-none");
	   	$("#s_content_2").removeClass('current');
	   	$(".item2").removeClass('current');
	   	$(".item2").removeClass('cur-color');
	   	$("#s_content_2").removeClass('cur');
	   	$("#s_content_5").removeClass('cur');
	   	$(".item5").removeClass('cur-color');
	   	$("#s_content_15").removeClass('cur');
	   	$("#s_content_5").addClass('cur-none');
	   	$("#s_content_15").addClass('cur-none');
	   	$(".item15").removeClass('cur-color');
	   });
	    $(".item5").click(function(){
	   	$("#s_content_2").removeClass("current");
	   	$("#s_content_2").removeClass("cur");
	   	$(".item2").removeClass('current');
	   	$(".item2").removeClass('cur-color');
	   	$("#s_content_1").addClass('cur-none');
	   	$("#s_content_1").removeClass("cur");
	   	$(".item1").removeClass('cur-color');
	   	$("#s_content_5").addClass('cur');
	   	$('.item5').addClass("cur-color");
	   	$("#s_content_5").removeClass("cur-none");
	   	$("#s_content_15").addClass('cur-none');
	   	$("#s_content_15").removeClass("cur");
	   	$(".item15").removeClass('cur-color');
	   });
	    $(".item15").click(function(){
	   	$("#s_content_2").removeClass("current");
	   	$("#s_content_2").removeClass("cur");
	   	$(".item2").removeClass('current');
	   	$(".item2").removeClass('cur-color');
	   	$("#s_content_1").addClass('cur-none');
	   	$("#s_content_1").removeClass("cur");
	   	$(".item1").removeClass('cur-color');
	   	$("#s_content_5").addClass('cur-none');
	   	$("#s_content_5").removeClass("cur");
	   	$(".item5").removeClass('cur-color');
	   	$("#s_content_15").addClass('cur');
	   	$("#s_content_15").removeClass("cur-none");
	   	$('.item15').addClass("cur-color");
	   });
	    $(".item2").click(function(){
	    $("#s_content_1").addClass("cur-none");
	    $("#s_content_1").removeClass("cur");
	    $(".item1").removeClass('cur-color');
	   	$("#s_content_2").addClass("cur");
	   	$("#s_content_2").removeClass("cur-none");
        $('.item2').addClass("cur-color");
	   	$("#s_content_5").addClass("cur-none");
	   	$("#s_content_5").removeClass("cur");
	   	$(".item5").removeClass('cur-color');
	   	$("#s_content_15").addClass("cur-none");
	   	$("#s_content_15").removeClass("cur");
	   	$(".item15").removeClass('cur-color');
	   });
        $(".item").click(function(){
        $("#s_content_100").removeClass("cur-none");
        $("#s_content_100").addClass("cur");
        $("#s_content_2").removeClass("current");
        $("#s_content_2").removeClass("cur");
        $(".item2").removeClass('current');
        $(".item2").removeClass('cur-color');
        $("#s_content_1").addClass('cur-none');
        $("#s_content_1").removeClass("cur");
        $(".item1").removeClass('cur-color');
        $("#s_content_5").addClass('cur-none');
        $("#s_content_5").removeClass("cur");
        $(".item5").removeClass('cur-color');
        $("#s_content_15").addClass('cur-none');
        $("#s_content_15").removeClass("cur");
        $('.item').addClass("cur-color");
        });
	    $(".soutu-btn").click(function(){
	    $(".soutu-layer").removeClass("cur-none");
	    $(".soutu-layer").addClass("cur");
	    });
	     $(".soutu-close").click(function(){
	    $(".soutu-layer").removeClass("cur");
	    $(".soutu-layer").addClass("cur-none");
	    });

	/*
	$(".list-icon").click(function(){
		$("#good").eq(0).removeClass().addClass("sec");
	});
	$('.curr').click(function(){
      /*$('.bottom').css("height","80px");*/
      /*$("#good").eq(0).removeClass().addClass("cf");
      });
    */
    $('.to-top').click(function(){
        $('body').scrollTop(0);
    });

});

