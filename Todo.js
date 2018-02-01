var fullDate = new Date() ;
var date = fullDate.toDateString().slice(4).toUpperCase();

var element = document.createElement('div') ;
element.innerHTML = date ;
element.classList.add('date') ;
var parent = document.getElementById('left-half') ;
parent.appendChild(element) ;

var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
  todo : [] ,
  completed : []
}

console.log(data);

function updateObjectData(){
  localStorage.setItem('todoList',JSON.stringify(data)) ;
}

var countDone = 0 ;
var countUndone = 0 ;
var checksvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="61.004px" height="39.14px" viewBox="0 0 61.004 39.14" enable-background="new 0 0 61.004 39.14" xml:space="preserve"> <path class="fill" d="M43.123,39.14H17.882C8.048,39.14,0,30.333,0,19.57l0,0C0,8.807,8.048,0,17.882,0h25.241 c9.834,0,17.881,8.807,17.881,19.57l0,0C61.004,30.333,52.957,39.14,43.123,39.14z"/> <line fill="none" stroke="#61B872" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="42.073" y1="24.175" x2="50.486" y2="14.966"/> <line fill="none" stroke="#ED7161" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="17.647" y1="10.999" x2="17.647" y2="29.417"/> <line fill="none" stroke="#61B872" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="38.343" y1="20.445" x2="42.073" y2="24.174"/> </svg>'

var editsvg =  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="7.973px" height="39.544px" viewBox="0 0 7.973 39.544" enable-background="new 0 0 7.973 39.544" xml:space="preserve"> <g> <g> <path class="fill" d="M0,8.725l7.969,0v22.082l-7.968-0.002L0,8.725z M6.046,0L2.492,0c-1.373,0-2.49,1.221-2.491,2.728v3.727 h7.97l0.002-4.347C7.973,0.94,7.114,0,6.046,0z M3.518,39.219c0.253,0.436,0.841,0.434,1.088-0.01l3.363-6.039l-7.968-0.003 L3.518,39.219z"/> </g> </g> </svg>'

var deletesvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25.222px" height="37.642px" viewBox="0 0 25.222 37.642" enable-background="new 0 0 25.222 37.642" xml:space="preserve"> <g id="Delete__x2F__Trash"> <g> <path class= "fill" d="M3.502,35.087c0,0,0.51,2.555,3.147,2.555h11.923c2.638,0,3.148-2.555,3.148-2.555l2.354-25.051H1.147 L3.502,35.087z M17.196,13.802c0-0.694,0.515-1.255,1.146-1.255c0.634,0,1.147,0.561,1.147,1.255l-1.147,18.82 c0,0.694-0.514,1.256-1.146,1.256s-1.145-0.562-1.145-1.256L17.196,13.802z M11.464,13.802c0-0.694,0.513-1.255,1.147-1.255 c0.634,0,1.147,0.561,1.147,1.255v18.82c0,0.694-0.514,1.256-1.147,1.256c-0.635,0-1.147-0.562-1.147-1.256V13.802z M6.879,12.547 c0.632,0,1.144,0.561,1.144,1.255l1.147,18.82c0,0.694-0.513,1.256-1.147,1.256c-0.63,0-1.144-0.562-1.144-1.256l-1.146-18.82 C5.732,13.108,6.248,12.547,6.879,12.547z M23.388,5.02h-5.045V2.508C18.343,0.606,17.78,0,16.052,0H9.17 C7.584,0,6.879,0.839,6.879,2.508V5.02H1.834C0.819,5.02,0,5.862,0,6.903c0,1.041,0.819,1.882,1.834,1.882h21.554 c1.013,0,1.834-0.842,1.834-1.882C25.222,5.862,24.4,5.02,23.388,5.02z M16.052,5.02H9.17V2.508h6.882V5.02L16.052,5.02z"/> </g> </g> </svg>'

function removeElement(e){
  var parent = this.parentNode.parentNode ;
  var task = this.parentNode ;

  var id = parent.id ;

  if(id=='style-1'){
      data.todo.splice(data.todo.indexOf(task.childNodes[0].value),1) ;
  }
  else {
      data.completed.splice(data.completed.indexOf(task.childNodes[0].value),1) ;
  }

  updateObjectData() ;

  if(id=='style-1'){
    countUndone-- ;
  }
  else {
    countDone-- ;
  }
  var per = (countDone/(countDone+countUndone))*100 ;
  console.log(per);
  if(countDone+countUndone!=0){
    document.getElementById('percentage-bar').style.width = per + '%' ;
  }else {
    document.getElementById('percentage-bar').style.width = '0%' ;
  }
  parent.removeChild(task) ;
}

function checkElement(){
  var parent = this.parentNode.parentNode ;
  var task = this.parentNode ;
  var id = parent.id ;

  if(id=='style-1'){
    data.todo.splice(data.todo.indexOf(task.childNodes[0].value),1) ;
    data.completed.push(task.childNodes[0].value) ;
  }
  else {
    data.completed.splice(data.completed.indexOf(task.childNodes[0].value),1) ;
    data.todo.push(task.childNodes[0].value) ;
  }

  updateObjectData() ;

  if(id=='style-1'){
    countUndone-- ;
    countDone++ ;
    parent.removeChild(task) ;
    task.id = 'checked' ;
    task.childNodes[2].id = 'circle-close';
    document.getElementById('style-2').appendChild(task) ;
  }
  else {
    countDone-- ;
    countUndone++ ;
    parent.removeChild(task) ;
    task.id = 'unchecked' ;
    task.childNodes[2].id = 'circle-open';
    document.getElementById('style-1').appendChild(task) ;
  }
  var per = (countDone/(countDone+countUndone))*100 ;
  console.log(per);
  document.getElementById('percentage-bar').style.width = per + '%' ;
}

var tobedone = document.getElementById('style-1') ;
var addEvent = document.getElementById('add-task') ;
var text = document.getElementById('input-text') ;

function addFunction(task) {
  countUndone++ ;
  var per = (countDone/(countDone+countUndone))*100 ;

  document.getElementById('percentage-bar').style.width = per + '%' ;
  if(task!=''){
    let liElement = document.createElement('li') ;
    liElement.id = 'unchecked' ;
    liElement.className = 'box' ;

    let div1 = document.createElement('input') ;
    div1.id = 'task-name' ;
    div1.value = task ;

    div1.addEventListener('keypress',function(e){
      if(e.keyCode==13){
        div1.blur() ;
      }
    });

    let check = document.createElement('button') ;
    check.classList.add('svgfile') ;
    check.classList.add('check') ;
    check.innerHTML = checksvg ;

    check.addEventListener('click',checkElement) ;

    let circle = document.createElement('div') ;
    circle.id = 'circle-open' ;

    let dlt = document.createElement('button') ;
    dlt.classList.add('svgfile') ;
    dlt.classList.add('delete') ;
    dlt.innerHTML = deletesvg ;

    dlt.addEventListener('click',removeElement) ;

    let edit = document.createElement('button') ;
    edit.classList.add('svgfile') ;
    edit.classList.add('edit') ;
    edit.innerHTML = editsvg ;

    edit.addEventListener('click',function(e){
      div1.focus() ;
    });

    liElement.appendChild(div1) ;
    liElement.appendChild(check) ;
    liElement.appendChild(circle) ;
    liElement.appendChild(edit) ;
    liElement.appendChild(dlt) ;

    tobedone.appendChild(liElement) ;
  }
}
addEvent.addEventListener('click',function(){
  var value = document.getElementById('input-text').value ;
  if(value){
    addFunction(value) ;
    document.getElementById('input-text').value = '' ;
    data.todo.push(value) ;
    updateObjectData() ;
  }
});
text.addEventListener('keypress',function(e){
  var value = document.getElementById('input-text').value ;
  if(e.keyCode==13){
    addFunction(value) ;
    document.getElementById('input-text').value  = '' ;
    data.todo.push(value) ;
    updateObjectData() ;
  }
});
