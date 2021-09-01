window.addEventListener('DOMContentLoaded', function(){
	//hover for smart phone
	$(function () {
		var userAgent = navigator.userAgent;
		var item = $("a").add("button");
		if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
			item.on("touchstart", function () {
				$(this).addClass("hover");
			});
			item.on("touchend", function () {
				$(this).removeClass("hover");
			});
		} else {
			item.hover(
				function () {
					$(this).addClass("hover");
				},
				function () {
					$(this).removeClass("hover");
				}
			);
		}
	});
	
	//section :parallax
	var parallaxBkImg = function(){
		$(window).on('load resize', function() {
			$(window).on('load scroll', function(){
				var $winTop = $(window).scrollTop();
				var $target = $('.cd-fixed-bg');
				var $winWidth = $(window).width();
				if($winWidth < 736) {
					$target.each(function(index){
						var $position = $winTop - $target.eq(index).offset().top;
						if($winTop > $target.eq(index).offset().top - 800) {
							$target.eq(index).css({
								'background-position-y': $position * .4
							});
						}
					});
				}
			});
		});
	}();
	
	//history :slidein
	$(window).scroll(function (){
		$('.slidein').each(function(){
			var elemPos = $(this).offset().top,
			scroll = $(window).scrollTop(),
			windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass('scrollin');
			}
		});
	});
	
	//it-book :slider
	$(function(){
		$('.slider').not('.slick-initialized').slick({
			dots:true,
			autoplay: true,
			autoplaySpeed: 3000,
		});
	});
		
	  
	//comics :accordion
	$(function(){
		$('.s_10 .accordion_one .accordion_header').click(function(){
			$(this).next().animate({width:'toggle'});
			$(this).toggleClass("open");
			$('.s_10 .accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
			$('.s_10 .accordion_one .accordion_header').not($(this)).removeClass("open");
			$('.s_10 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
		});
	});
	
	//cosplay,pictures :modal
	$(function() {
		var scrollPos;
		$('.container a').click(function() {
			var scrollPos = $(window).scrollTop();
			var imgSrc = $(this).children().attr('src');
			var imgAlt = $(this).children().attr('alt');
			$('.bigimg').children().attr('src', imgSrc);
			$('.bigimgalt').text(imgAlt);
			$('.modal').fadeIn();
			$('body,html').css('overflow-y', 'hidden');
			return false
		});
		$('.close-btn').click(function() {
			$('.modal').fadeOut();
			$('body,html').css('overflow-y', 'visible');
			$(window).scrollTop(scrollPos);
			return false;
		});
	});

	// voice :play button
	var syncerSounds = {
		flag: {} ,currentTime: null ,
	} ;
	$(function(){
		var setClass = 'sounds' ;
		var setDir = 'voice/' ;
		var sounds = document.getElementsByClassName( setClass ) ;
		for( var i=0,l=sounds.length ; l>i ; i++ ){
			sounds[i].onclick = function(){
				var file = this.getAttribute( 'data-file' ) ;
				if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 ){
					var audio = document.createElement( 'audio' ) ;
					audio.id = file ;
					if( audio.canPlayType( 'audio/mp3' ) ){
						audio.src = setDir + file + '.mp3' ;
					}
					else if( audio.canPlayType( 'audio/wav' ) ){
						audio.src = setDir + file + '.wav' ;
					}
					document.body.appendChild( audio ) ;
				}
				stopCurrentSound() ;
				document.getElementById( file ).play() ;
				syncerSounds.currentTime = file ;
				syncerSounds.flag[ file ] = 1 ;
				return false ;
			}
		}
		function stopCurrentSound(){
			var currentSound = document.getElementById( syncerSounds.currentTime ) ;
			if( currentSound != null ){
				currentSound.pause() ;
				currentSound.currentTime = 0 ;
			}
		}
	});

});
