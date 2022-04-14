let bg = document.getElementById("bg1");
let ombrella = document.getElementById("ombrella");
let rock = document.getElementById("rock");
let mainText = document.getElementById("main-text");
let menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.top = value * 0.5 + "px";
  ombrella.style.bottom = value * 0.5 + "px";
  rock.style.top = value * 0.5 + "px";
  mainText.style.top = value * 0.5 + "px";
  menu.style.top = value * 0.5 + "px";
});
