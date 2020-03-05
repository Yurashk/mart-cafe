// var hiddenElement = document.getElementById("menu");
// var btn = document.querySelector('.scroll-method');

// function handleButtonClick() {
//    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
// }

// btn.addEventListener('click', handleButtonClick);

$(".scroll-method").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#menu").offset().top
    }, 2000);
});