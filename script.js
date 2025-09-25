// your JS code here
const container = document.getElementById("container");
const colors = ["#e74c3c", "#3498db", "#2ecc71", "#9b59b6", "#e67e22"];
const squares = 800;

// create 800 squares dynamically
for (let i = 0; i < squares; i++) {
  const square = document.createElement("div"); // use div, not "square"
  square.classList.add("square");

  // events
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square); // append correctly
}

function setColor(element) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  element.style.background = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.background = "#1d1d1d"; // back to dark after 1s
  }, 1000);
}
