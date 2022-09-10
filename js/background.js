const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

// const bgImg = document.createElement("img");
// bgImg.src = `image/${chosenImg}`;

// document.body.appendChild(bgImg);

const body = document.getElementById("background");
body.style.backgroundImage = `url(image/${chosenImg})`;