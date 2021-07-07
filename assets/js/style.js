$(document).ready(function(){
    $('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

    });
});

//pet shop start
function show_shop_sidebar() {
    document.getElementById('shop_sidebar').classList.remove("d-none");
}
function hide_shop_sidebar() {
    document.getElementById('shop_sidebar').classList.add('d-none','d-md-block');
}
//pet shop end