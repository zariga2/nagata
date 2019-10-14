var scrollAnimationElm = document.querySelectorAll(".sa");
var scrollAnimationFunc = function() {
    console.log(scrollAnimationElm.length);
    for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (
            window.innerHeight >
            scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
        ) {
            $(scrollAnimationElm[i]).css("transition", "all 0.8s ease");
            scrollAnimationElm[i].classList.add("show");
        }
    }

    let top = document.getElementById("top");
    let youtube = document.getElementById("youtube");
    if (top && youtube) {
        if (window.innerHeight > youtube.getBoundingClientRect().top) {
            $(top).css("transition", "all 0.3s ease");
            $(top).removeClass("show");
        }
    }
};
window.addEventListener("load", scrollAnimationFunc);
window.addEventListener("scroll", scrollAnimationFunc);
