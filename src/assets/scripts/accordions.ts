document.querySelectorAll(".accordion__item").forEach((item) => {
  const header = item.querySelector<HTMLDivElement>(".accordion__header");
  const toggle = item.querySelector<HTMLButtonElement>(".accordion__toggle");

  if (header && toggle) {
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      document.querySelectorAll(".accordion__item").forEach((i) => {
        i.classList.remove("active");
        const toggle = i.querySelector<HTMLButtonElement>(".accordion__toggle");
        if (toggle) toggle.textContent = "+";
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
        toggle.textContent = "−";
      } else {
        item.classList.remove("active");
        toggle.textContent = "+";
      }
    });
  }
});
