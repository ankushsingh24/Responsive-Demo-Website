const list = document.querySelector(".invisible");
const toggle_btn = document.querySelector(".hamburger");

toggle_btn.addEventListener("click", () => {
  list.classList.toggle("visible");
});
