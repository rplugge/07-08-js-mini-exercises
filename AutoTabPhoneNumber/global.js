
function autoTab(current, next){
  if (current.getAttribute &&
    current.value.length == current.getAttribute("maxlength")){
    next.focus()
  }
  
  
}