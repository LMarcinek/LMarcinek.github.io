$("body").css("overflow", "hidden");

$('#left-arrow').on('click', function () {
    $('#side-left').animate({
        left: '0',
    }, 1000)
    $('.arrow').hide();
})


$('#side-left').on('click', function () {
    $('#side-left').animate({
        left: '-100%',
    }, 1000)
    $('.arrow').show()
})



$('#top-arrow').on('click', function () {
    $('#side-top').animate({
        top: '0',
    }, 1000)
    $('.arrow').hide();
});

$('#side-top').on('click', function () {
    $('#side-top').animate({
        top: '-100%',
    }, 1000)
    $('.arrow').show()
})



$('#right-arrow').on('click', function () {
    $('#side-right').animate({
        right: '0',
    }, 1000)
    $('.arrow').hide();
})


$('#side-right').on('click', function () {
    $('#side-right').animate({
        right: '-100%',
    }, 1000)
    $('.arrow').show()
})




$('#down-arrow').on('click', function () {
    $('#side-down').animate({
        top: '0',
    }, 1000)
    $('.arrow').hide();
});

$('#side-down').on('click', function () {
    $('#side-down').animate({
        top: '100vh',
    }, 1000)
    $('.arrow').show()
})



///////move by button


const move = (e) => {
    console.log(e.keyCode)



    switch (e.keyCode) {
        case 37:
            $('#side-left').animate({
                left: '0',
            }, 1000)
            $('.arrow').hide();
            
            break;

        case 38:
            $('#side-top').animate({
                top: '0',
            }, 1000)
            $('.arrow').hide();
            break;

        case 39:
            $('#side-right').animate({
                right: '0',
            }, 1000)
            $('.arrow').hide();

            break;

        case 40:
            $('#side-down').animate({
                top: '0',
            }, 1000)
            $('.arrow').hide();
            break;
        case 32:

            break;



    }

}

window.addEventListener("keydown", move);



// preloader

var preloaderEl = document.querySelector('#preloader')
setTimeout(function () {
    preloaderEl.classList.add('preloader-hidding')
    preloaderEl.classList.add('preloader-hiden');
    preloaderEl.classList.remove('preloader-hidding');
}, 1000)