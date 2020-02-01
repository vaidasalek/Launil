var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	  document.getElementById("header-bar-hide-after-scroll").style.top = "0px";
  } else {
	  document.getElementById("header-bar-hide-after-scroll").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}
