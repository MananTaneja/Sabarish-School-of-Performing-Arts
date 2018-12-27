filterselection("all") 
function filterselection(c){
  var x, i;
  x = document.getElementsByClassName("column");
  if(c=="all") c="";
  for(i = 0; i < x.length; i++){
    removeClass(x[i], "show");
    if (x[i].className.indexof(c) > -1) {
        addClass(x[i], "show");}
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i=0; i<arr2.length;i++) {
      if(arr1.indexof(arr2[i]) == -1) { 
          element.className += " " + arr2[i];
      }
  }
}

function removeClass(element, name) {
    var i, arr2, arr1;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i<arr2.length;i++) {
        while(arr1.indexof(arr2[i]) > -1) {
            arr1.splice(arr1.indexof(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btncontainer = document.getElementById("myBtnCointainer");
var btns = btncontainer.getElementsByClassName("btn");
for(var i = 0 ; i < btns.length; i++ ){
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}