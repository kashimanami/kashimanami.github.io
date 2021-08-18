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
	
	//it-book :swiper
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

	$(function() {
		var swiperAlt = $('.swiper-slide-active').children().attr('alt');
		$('.swiperalt').text(swiperAlt);
		$('.swiper-button-next, .swiper-button-prev.swiper-pagination-bullet').click(function(){
			var swiperAlt = $('.swiper-slide-active').children().attr('alt');
			$('.swiperalt').text(swiperAlt);
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
		var setClass = 'sounds' ;// ボタン要素のクラス名
		var setDir = 'voice/' ;// 音声ファイルがあるフォルダ(最後は[/])
		var setStopButtonId = 'stop-button-syncer' ;// 停止ボタンに付けるID
		// クラス名が付いた要素を取得する
		var sounds = document.getElementsByClassName( setClass ) ;
		// 全ての要素にクリックイベントを設定する
		for( var i=0,l=sounds.length ; l>i ; i++ ){
			// クリックイベントの設定
			sounds[i].onclick = function(){
				// ファイル名の取得
				var file = this.getAttribute( 'data-file' ) ;
				// 一度生成したエレメントは生成しない
				if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 ){
					// 生成するエレメントの調整
					var audio = document.createElement( 'audio' ) ;
					// エレメントのIDを指定
					audio.id = file ;
					// ブラウザが[.mp3]に対応している場合は[.mp3]を読み込む
					if( audio.canPlayType( 'audio/mp3' ) ){
						audio.src = setDir + file + '.mp3' ;
					}
					// ブラウザが[.wav]に対応している場合は[.wav]を読み込む
					else if( audio.canPlayType( 'audio/wav' ) ){
						audio.src = setDir + file + '.wav' ;
					}
					// [audio]を生成する
					document.body.appendChild( audio ) ;
				}
				// 初回再生以外だったら音声ファイルを巻き戻す
				stopCurrentSound() ;
				// 音声ファイルを再生[play()]する
				document.getElementById( file ).play() ;
				// 最近再生した音声としてセット
				syncerSounds.currentTime = file ;
				// 初回再生が終わった判定用に[syncerSounds.flag]の値を0から1に変更する
				// エレメントを何度も生成しないようにするため
				syncerSounds.flag[ file ] = 1 ;
				// 終了
				return false ;
			}
		}
		// 前回の音声を停止する関数
		function stopCurrentSound(){
			var currentSound = document.getElementById( syncerSounds.currentTime ) ;
			if( currentSound != null ){
				currentSound.pause() ;
				currentSound.currentTime = 0 ;
			}
		}
	});

});
