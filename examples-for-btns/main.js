"use strict";
let extraPerDay = 0;

const tollTag = document.getElementById("tollTag").checked;
if (tollTag == true) {
  extraPerDay += 3.95;
}

const gps = document.getElementById("gps").checked;
if (gps == true) {
  extraPerDay += 4.95;
}

const roadside = document.getElementById("roadside").checked;
if (roadside == true) {
  extraPerDay += 2.95;
}

let autoRadioBtn = document.getElementById("auto");
let homeRadioBtn = document.getElementById("home");
let basePremium = 0;
if (autoRadioBtn.checked) {
  basePremium = 175.0;
} else if (homeRadioBtn.checked) {
  basePremium = 395.0;
} else {
  // it must be life!
  basePremium = 225.0;
}
