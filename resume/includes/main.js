const skillArray = [95, 70, 75, 95, 90, 50];
let i = 0;

document.getElementById("show-skills").onmouseover = function () {
    
    var bars = document.getElementsByClassName("skills-bar");
    var width = 1;
    var interval = setInterval(frame, 10);
    function frame() {
      for(i=0; i<6; i++) {
        while(width <= skillArray[i]) {
            width++;
            bars[i].style.width = width + "%";
        }
        clearInterval(interval);
        width = 1;
      }
    }
}

document.getElementById("show-skills").onmouseout = function () {
    
  var bars = document.getElementsByClassName("skills-bar");
  var width = 1;
  var interval = setInterval(frame, 10);
  function frame() {
    for(i=0; i<6; i++) {
      while(width >= 1) {
          width--;
          bars[i].style.width = width + "%";
      }
      clearInterval(interval);
      width = 1;
      bars[i].style.width = width + "%";
    }
  }
}
