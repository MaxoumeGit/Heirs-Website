import "../main.scss";

const logo = document.getElementById("logo");

document.onmousemove = ev => {
  const positionX = (window.innerWidth / 2 - ev.x) / 4;
  const positionY = -ev.y / 5;
  console.log(positionX, positionY);
  logo.style.transform = `translate(${positionX}px, ${positionY}px)`;
};
