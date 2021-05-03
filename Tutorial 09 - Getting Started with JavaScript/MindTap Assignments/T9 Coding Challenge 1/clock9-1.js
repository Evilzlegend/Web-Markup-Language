"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 1

   Clock
   Author: Joshua Tiemens
   Date:   11/18/2020

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/
setInterval("runClock()", 1000);
runClock();
var thisDate = new Date();
var thisDate = thisDay.toLocaleDateString();
var thisDayNum = thisDay.getDay();
var thisWeekday = thisDayNum.getWeekday();
var thisTime = thisDay.toLocaleTimeString();
document.getElementById("date").textContent = thisDate
document.getElementById("wday").textContent = thisWeekday;
document.getElementById("time").textContent = thisTime;

function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}
