"use strict";

///////////////////////////
const celsiusElement = document.getElementById("celsius");
const fahrenheitElement = document.getElementById("fahrenheit");
const kelvinElement = document.getElementById("kelvin");
const btnClear = document.getElementById("btn-clear");
const allInput = document.querySelectorAll(".input");

btnClear.addEventListener("click", function () {
  allInput.forEach((input) => (input.value = ""));
});
