$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_10 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerの横幅を開いたり閉じたりする。
    $(this).next().animate({width:'toggle'});
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.s_10 .accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
    $('.s_10 .accordion_one .accordion_header').not($(this)).removeClass("open");
    $('.s_10 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
  });
});