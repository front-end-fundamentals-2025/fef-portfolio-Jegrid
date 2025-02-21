document
  .getElementById("sandhaven-link")
  .addEventListener("mouseover", mouseOver);
document
  .getElementById("sandhaven-link")
  .addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("sandhaven-link").style.border = "2px solid blue";
}

function mouseOut() {
  document.getElementById("sandhaven-link").style.border = "2px solid white";
}
