// script.js
const preloader = document.getElementById("preloader");
const content = document.getElementById("content");

const minTime = 2000; // 2s minimum
const start = Date.now();

window.addEventListener("load", function() {
  const elapsed = Date.now() - start;

  function showPage() {
    preloader.classList.add("hidden");
    // setTimeout(() => {
    //   content.classList.add("visible");
    // }, 800); // wait until fade-out finishes
  }

  if (elapsed < minTime) {
    setTimeout(showPage, minTime - elapsed);
  } else {
    showPage();
  }
});
