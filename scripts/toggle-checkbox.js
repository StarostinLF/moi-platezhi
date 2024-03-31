function toggleDisabledState(event) {
  if (event.target && event.target.matches(".payment-card__form-checkbox")) {
    const divContainer = event.target.closest(".payment-card__form-container");

    if (divContainer) {
      const inputs = divContainer.querySelectorAll(
        ".payment-card__form-input, select"
      );

      divContainer.classList.toggle("payment-card__form-container_disabled");
      inputs.forEach(function (input) {
        input.disabled = !input.disabled;
      });
    }
  }
}
