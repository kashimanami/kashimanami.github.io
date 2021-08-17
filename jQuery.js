//swiper
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
	
	// voice
var syncerSounds = {
	flag: {} ,currentTime: null ,
} ;
(function(){
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
})() ;

//fadein
//ウィンドウの高さを取得する
var window_h = $(window).height();

//スクロールイベント
$(window).on("scroll", function() {
  
  //スクロールの位置を取得する
  var scroll_top = $(window).scrollTop();
 
  $(".box").each(function() {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 300) {
      $(this).addClass("fadein");　//特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein"); //そうでない場合はクラスを削除
    }
  });
});
