document.body.onload = function () {
    setTimeout(function (){
        var preloader = document.getElementById('preloader-page');
        if (!preloader.classList.contains('done'))
        {
            preloader.classList. add('done');
        }
    }, 2500);
}


//preloader-page  3 line  this id