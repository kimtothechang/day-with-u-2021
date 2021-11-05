const images = [
  "0.jpeg",
  "1.png",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
];

const chosenImage = images[0 + Math.floor(Math.random() * 3)];

const bgImage = document.querySelector("#body");

body.style = `background-image: url("img/${chosenImage}")`;

//Momentum-App-Clone-Coding-Script
/*
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = `bgImage`;

document.body.appendChild(bgImage);
*/
