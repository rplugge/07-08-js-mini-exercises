var d = document.getElementById("header");



function scrollFunction() {
  var position = window.scrollY;
  if (position > 250 && d.className != "header tiny") {
    d.className = d.className + " tiny";
  } else if (position == 0) {
    d.className = "header";
  }
}



window.onscroll = scrollFunction;