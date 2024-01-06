// Задание 1

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let container = document.getElementById("container");

for (let i = 0; i < 100; i++) {
  let div = document.createElement("div");
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";

  let number = getRandomNumber(1, 100);
  div.textContent = number;

  if (number < 31) {
      div.classList.add("green");
  } else if (number > 70) {
      div.classList.add("red");
  }

  container.appendChild(div);
}

// Задание 2

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  let red = getRandomNumber(0, 255);
  let green = getRandomNumber(0, 255);
  let blue = getRandomNumber(0, 255);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function rgbToHex(rgb) {
  let values = rgb.match(/\d+/g);
  let hex = "#";
  for (let i = 0; i < values.length; i++) {
      let hexValue = parseInt(values[i]).toString(16);
      hex += (hexValue.length === 1) ? "0" + hexValue : hexValue;
  }
  return hex;
}

function getColorTone(rgb) {
  let values = rgb.match(/\d+/g);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
      sum += parseInt(values[i]);
  }
  let tone = "";
  if (sum < 255) {
      tone = "black";
  } else if (sum > 765) {
      tone = "white";
  } else if (sum < 382) {
      tone = "black";
  } else {
      tone = "white";
  }
  return tone;
}

function getTextColor(rgb) {
  let values = rgb.match(/\d+/g);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
      sum += parseInt(values[i]);
  }
  let textColor = (sum < 382) ? "#fff" : "#000";
  return textColor;
}

function createColorDiv() {
  let div = document.createElement("div");
  let color = getRandomColor();
  let hex = rgbToHex(color);
  let tone = getColorTone(color);
  let textColor = getTextColor(color);
  
  div.style.backgroundColor = color;
  div.style.color = textColor;
  div.textContent = "RGB: " + color + "\n" +
      "HEX: " + hex + "\n" +
      "Оттенок: " + tone;
  
  document.getElementById("colorDiv").appendChild(div);
}

createColorDiv();