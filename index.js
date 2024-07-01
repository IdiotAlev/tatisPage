const jsConfetti = new JSConfetti();
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");



const yBtton = document.querySelector("#yBtton");
yBtton.addEventListener("click", function () {
  jsConfetti.addConfetti({
    emojis: ["💜", "🌼", "💞"],
  });
  modal.classList.add("open");
});

const nBtton = document.querySelector("#nBtton");
nBtton.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  nBtton.style.setProperty("top", randomY + "%");
  nBtton.style.setProperty("left", randomX + "%");
  nBtton.style.setProperty("transform", "translate(-$(randomX)%,-$(randomY)%)");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("open");
});