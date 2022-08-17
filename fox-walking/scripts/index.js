const fox = document.getElementById("fox");

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

up.addEventListener("click", function () {
  fox.className = "";
  fox.classList.toggle("goUp");
});

down.addEventListener("click", function () {
  fox.className = "";
  fox.classList.toggle("goDown");
});

left.addEventListener("click", function () {
  fox.className = "";
  fox.classList.toggle("goLeft");
});

right.addEventListener("click", function () {
  fox.className = "";
  fox.classList.toggle("goRight");
});
