"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 3

   Clock Face
   Author: Joshua Tiemens
   Date:   11/20/2020


*/
function moveHands() {
  var nowTime = new Date();
  
  //var timeStr = currentDay.toLocaleTimeString();

  var nowSeconds = nowTime.getSeconds();
  var nowMinutes = nowTime.getMinutes();
  var nowHours = nowTime.getHours();
  // window.alert(nowHours);

  var secondsAngle = nowSeconds * 6;
  var minutesAngle = (nowMinutes + nowSeconds / 60) * 6;
  var hoursAngle = (nowHours + nowSeconds / 3600 + nowMinutes / 60) * 30;


  rotateHand(secondsAngle, "seconds");
  rotateHand(minutesAngle, "minutes");
  rotateHand(hoursAngle, "hours");
}

moveHands();
setInterval("moveHands()", 1000);

function rotateHand(angle, hand) {
  document.getElementById(hand).style.transform = "rotate(" + angle + "deg)";
}
