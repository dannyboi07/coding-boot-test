const tanyaCard = document.getElementById("card1");
const johnCard = document.getElementById("card2");

const leftBtn = document.getElementById("go-left");
const rightBtn = document.getElementById("go-right");

rightBtn.addEventListener("click", () => {
  tanyaCard.classList.add("card--hide-tanya");
  johnCard.classList.add("card--show-john");

  rightBtn.disabled = true, rightBtn.style.cursor = "default";
  leftBtn.disabled = false, leftBtn.style.cursor = "pointer";
});

leftBtn.addEventListener("click", () => {
  johnCard.classList.remove("card--show-john");
  tanyaCard.classList.remove("card--hide-tanya");

  leftBtn.disabled = true, leftBtn.style.cursor = "default";
  rightBtn.disabled = false, rightBtn.style.cursor = "pointer";
});