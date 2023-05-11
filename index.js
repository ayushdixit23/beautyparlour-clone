window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-container").style.padding = "20px 10px";
	document.getElementById("header").style.opacity = 0.7;
	document.getElementById("nav-container").style.transition = "0.3s ease-in-out";
  } else {
    document.getElementById("nav-container").style.padding = "35px 10px";
    document.getElementById("header").style.opacity = 1;
  }
}