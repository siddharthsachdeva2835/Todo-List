var fullDate = new Date() ;
var date = fullDate.toDateString().slice(4).toUpperCase();

var element = document.createElement('div') ;
element.innerHTML = date ;
element.classList.add('date') ;
var parent = document.getElementById('left-half') ;
parent.appendChild(element) ;
