const open = document.querySelector(".open-icon");
const close = document.querySelector(".close-icon");
const menuWrap = document.querySelector(".navigation");

open.addEventListener("click", function () {
  menuWrap.classList.add("active");
});
close.addEventListener("click", function () {
  menuWrap.classList.remove("active");
});
