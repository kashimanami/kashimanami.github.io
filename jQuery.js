window.addEventListener('DOMContentLoaded', function(){
		var swiper = new Swiper('.swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});


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

	$(function(){
		$('.s_10 .accordion_one .accordion_header').click(function(){
			$(this).next().animate({width:'toggle'});
			$(this).toggleClass("open");
			$('.s_10 .accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
			$('.s_10 .accordion_one .accordion_header').not($(this)).removeClass("open");
			$('.s_10 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
		});
	});

		$(function() {
			var scrollPos;
			$('.container a').click(function() {
				var scrollPos = $(window).scrollTop();
				var imgSrc = $(this).children().attr('src');
				$('.bigimg').children().attr('src', imgSrc);
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
	});
