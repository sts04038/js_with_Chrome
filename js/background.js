const images = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpeg'];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

const chosenImage = images[3];

const bgImage = document.createElement('img');

document.body.style.backgroundImage = `url(img/${chosenImage})`;

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage); //append는 body 맨 뒤에, prepend는 body 맨 앞에 붙는다.
