var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	  document.getElementById("header-bar-hide-after-scroll").style.top = "0px";
  } else {
	  document.getElementById("header-bar-hide-after-scroll").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
};


$(document).ready(function() {
    $(".navigation-list > li > a").click(function (e) { // binding onclick
        if ($(this).parent().hasClass('selected')) {
            $(".navigation-list .selected div div").slideUp(100); // hiding popups
            $(".navigation-list .selected").removeClass("selected");
        } else {
            $(".navigation-list .selected div div").slideUp(100); // hiding popups
            $(".navigation-list .selected").removeClass("selected");
            if ($(this).next(".subs").length) {
                $(this).parent().addClass("selected"); // display popup
                $(this).next(".subs").children().slideDown(200);
            }
        }
        e.stopPropagation();
    });
    $("body").click(function () { // binding onclick to body
        $(".navigation-list .selected div div").slideUp(100); // hiding popups
        $(".navigation-list .selected").removeClass("selected");
    });
});
