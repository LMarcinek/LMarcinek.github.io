var $headerArrow = '<div id="left-arrow" class="arrow"><i class="fas fa-angle-left "></i></div>'
+        '<div id="top-arrow" class="arrow"><i class="fas fa-angle-up"></i></div>'+
        '<div id="right-arrow" class="arrow"><i class="fas fa-angle-right"></i></div>'+
        '<div id="down-arrow" class="arrow"><i class="fas fa-angle-down"></i></div>'






$('#close-side-left').click(function(){
    $('#side-left').animate({
        left: '-100%',
    }, 1000)
//    $('header').append($headerArrow)
})

$('#left-arrow').click(function(){
    $('#side-left').animate({
        left:'0',
    }, 1000)
//    $('.arrow').remove();
})