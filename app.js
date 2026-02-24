const toggle = document.getElementById("modeToggle");
const toc = document.getElementById("toc");
const tocCards = Array.from(document.querySelectorAll(".toc-card"));

const updateToggleLabel = () => {
  const isHidden = toc.classList.contains("hidden");
  toggle.textContent = isHidden ? "Показать оглавление" : "Свернуть оглавление";
};

toggle.addEventListener("click", () => {
  toc.classList.toggle("hidden");
  updateToggleLabel();
});

const runCardAction = (card) => {
  const href = card.dataset.cardHref;
  const message = card.dataset.cardMessage;

  if (href) {
    window.location.href = href;
    return;
  }

  if (message) {
    window.alert(message);
  }
};

tocCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a[href]")) {
      return;
    }
    runCardAction(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      runCardAction(card);
    }
  });
});

updateToggleLabel();
