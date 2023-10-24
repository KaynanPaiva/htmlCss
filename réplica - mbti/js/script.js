window.onscroll = function () {
  var navbar = document.getElementById("header");
  if (window.scrollY > 0) {
    navbar.style.top = "0";
    navbar.style.boxShadow = "0 2px 16px rgba(0, 0, 0, 0.09)";
  } else {
    navbar.style.top = "0";
    navbar.style.boxShadow = "none";
  }
};

function () {
  var main = document.getElementsByTagNameNS("main")
}