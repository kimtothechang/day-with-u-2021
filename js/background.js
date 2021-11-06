const images = ["0.jpeg", "1.png", "2.jpeg", "3.jpg", "4.jpeg"];

const chosenImage = images[0 + Math.floor(Math.random() * 5)];

const bgImage = document.querySelector("#body");

body.style = `background-image: url("img/${chosenImage}")`;

//Momentum-App-Clone-Coding-Script
/*
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = `bgImage`;

document.body.appendChild(bgImage);
*/
