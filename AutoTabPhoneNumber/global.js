var areacode = document.getElementById("areacode");

// function areacode_function() {
//   autoTab(areacode, document.phone.prefix);
// }



function autoTab(){
  if (this.value.length == this.getAttribute("maxlength")){
      this.nextElementSibling.focus();
  }
}





areacode.addEventListener("keyup", autoTab);

// document.getElementById("areacode").onKeyup = autoTab(areacode, document.phone.prefix);

