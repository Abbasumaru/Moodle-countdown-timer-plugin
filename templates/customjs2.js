$(document).ready(function(){
//Comment or not line 3 to enable or disable right click for inspection
disableSelection(document.body);
div_h();
});
///Line 7 - 11 disables ctrl + shift + for inspection 
function div_h(){
  document.getElementById('examtimer_tree0').style.display = 'none';
  document.getElementById('controlbutton').style.display = 'none';
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});

//disable the right click on the screen
function disableSelection(target){
$(function() {
$(this).bind("contextmenu", function(e) {
e.preventDefault();
});
});
if (typeof target.onselectstart!="undefined") //For IE
 target.onselectstart=function(){return false}
else if (typeof target.style.MozUserSelect!="undefined") //For Firefox
 target.style.MozUserSelect="none"
else //All other route (For Opera)
 target.onmousedown=function(){return false}
target.style.cursor = "default";
}

//used this function to get the ID from the url
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// save the ID gotten from the url and save it here
var id = getParameterByName('id'); // 6

//the function responsible for the timer countdown
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
  };
}

function initializeClock(id, endtime) {

      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
          var t = getTimeRemaining(endtime);

          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);



          if (t.total <= 0) {

              //hide the timer and message once the timer is done
              document.getElementById('clockdiv').style.display = 'none';
              document.getElementById('msg').style.display = 'none';
              //display the button and the files once the timer is done.
              document.getElementById('examtimer_tree0').style.display = 'block';
              document.getElementById('controlbutton').style.display = 'block';
              clearInterval(timeinterval);
          }

      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
}

function warming_up(){
  //display the timer
  document.getElementById('examtimer').style.display = 'block';
  document.getElementById('msg').style.display = 'block';
  //get the date set from the view.php
  var deadline = document.getElementById('due').innerText;
  initializeClock('clockdiv', deadline);



}

//Delay the javascript by seconds to allow the page to load for inbetween slightly faster and slower computer systems
window.setTimeout(warming_up,500);
