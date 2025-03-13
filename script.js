// Находим все кнопки «Показать детали»
const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(button => {
  button.addEventListener("click", () => {
    const detailsParagraph = button.nextElementSibling;

    if (detailsParagraph.classList.contains("hidden")) {
      detailsParagraph.classList.remove("hidden");
      button.textContent = "Скрыть детали";
    } else {
      detailsParagraph.classList.add("hidden");
      button.textContent = "Показать детали";
    }
  });
});
