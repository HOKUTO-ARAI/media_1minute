$(function(){
	$(".btn-gnavi").on("click", function(){
		// ハンバーガーメニューの位置を設定するための変数
		var rightVal = 0;
		if($(this).hasClass("open")) {
			// 「open」クラスを持つ要素はメニューを開いた状態に設定
			rightVal = -250;
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).removeClass("open");
		} else {
			// 「open」クラスを持たない要素はメニューを閉じた状態に設定 (rightVal は0の状態 )
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).addClass("open");
		}

		$("#global-navi").stop().animate({
			left: rightVal
		}, 200);
	});
});








	

$(function(){

	$('.w1').on({'mouseenter': function(){
		$('.c1').stop().slideDown("slow");
	},
	'mouseleave': function(){
		$('.c1').stop().slideUp("slow");
	},
	});
	
	$('.w2').on({'mouseenter': function(){
		$('.c2').stop().slideDown("slow");
	},
	'mouseleave': function(){
		$('.c2').stop().slideUp("slow");
	},
	});
	
	$('.w3').on({'mouseenter': function(){
		$('.c3').stop().slideDown("slow");
	},
	'mouseleave': function(){
		$('.c3').stop().slideUp("slow");
	},
	});
	
	$('.w4').on({'mouseenter': function(){
		$('.c4').stop().slideDown("slow");
	},
	'mouseleave': function(){
		$('.c4').stop().slideUp("slow");
	},
	});
	
		});


		ScrollReveal().reveal('.anime',{
			duration:1000,
			viewFactor:0.1,
			opacity: 0.3,
			origin: "bottom",
			distance: "10px",
			reset:true,
		});
		