const bodyhtml = document.getElementsByTagName("body")[0];

const setColor = (name) => {
  bodyhtml.style.backgroundColor = name
}

const redbutton = document.getElementById("red");
redbutton.addEventListener("click", () => setColor("red"));

const bluebutton = document.getElementById("blue");
bluebutton.addEventListener("click", () => setColor("blue"));

const greenbutton = document.getElementById("green");
greenbutton.addEventListener("click", () => setColor("green"));

const randombutton = document.getElementById("random321");
randombutton.addEventListener("click", () => setColor (randomcolor()));


function randomcolor() {
  const random1 = Math.round(Math.random() * 255);
  const random2 = Math.round(Math.random() * 255);
  const random3 = Math.round(Math.random() * 255);
  return `rgb(${random1}, ${random2}, ${random3})`;
}

