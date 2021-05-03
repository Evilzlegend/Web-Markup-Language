"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 3

   Debug
   Author: Joshua Tiemens
   Date: 12/04/2020  


*/

var thisDay = new Date();
var wDay = thisDay.getDay();
var imgSrc = "";

switch (wDay) {

  case 0: imgSrc="sunday.png";
  case 1: imgSrc="monday.png";
  case 2: imgSrc="tuesday.png";
  case 3: imgSrc="wednesday.png";
  case 4: imgSrc="thursday.png";
  case 5: imgSrc="friday.png";
  case 6: imgSrc="saturday.png";
}
var htmlCode = "<img src='" + imgSrc + "' alt='' />";

document.getElementById("banner").innerHTML = htmlCode;

