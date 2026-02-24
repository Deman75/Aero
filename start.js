const buttons = Array.from(document.querySelectorAll("[data-aircraft-select]"));
const panels = Array.from(document.querySelectorAll("[data-aircraft-panel]"));
const typeLabel = document.getElementById("aircraftTypeLabel");

const labels = {
  wing: "Летающее крыло",
  classic: "Классическая схема",
};

const setAircraftType = (type) => {
  buttons.forEach((button) => {
    const active = button.dataset.aircraftSelect === type;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  panels.forEach((panel) => {
    const visible = panel.dataset.aircraftPanel === type;
    panel.classList.toggle("hidden", !visible);
  });

  if (typeLabel) {
    typeLabel.textContent = labels[type];
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setAircraftType(button.dataset.aircraftSelect);
  });
});

setAircraftType("wing");
