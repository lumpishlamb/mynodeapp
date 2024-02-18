// your_script.js
var sidemenu = document.getElementById("sidemenu");
var body = document.body;
var overlay = document.getElementById("overlay");

function openmenu() {
    sidemenu.style.left = "0";
    body.style.overflow = "hidden"; // Disable scrolling
    overlay.style.display = "block"; // Show overlay
}

function closemenu() {
    sidemenu.style.left = "-200px";
    body.style.overflow = "auto"; // Restore scrolling
    overlay.style.display = "none"; // Hide overlay
}
