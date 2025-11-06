const list = document.querySelector<HTMLUListElement>(".team__list");
const button = document.querySelector<HTMLButtonElement>(".team__btn");
const items = document.querySelectorAll<HTMLLIElement>(".team__item");

if (list && button) {
  const getInitialVisible = () => (window.innerWidth < 768 ? 4 : 6);

  button.addEventListener("click", () => {
    const initialVisible = getInitialVisible();
    const isExpanded = list.classList.toggle("show-all");
    button.textContent = isExpanded ? "Скрыть" : "Показать все";

    // Берём все элементы после initialVisible
    [...items].slice(initialVisible).forEach((item) => {
      // Сбрасываем display, чтобы анимация была видимой
      if (isExpanded) item.style.display = "flex";

      const animationClass = isExpanded ? "fadeInUp" : "fadeOutDown";

      const onAnimationEnd = () => {
        // Если закрываем, скрываем элемент после окончания анимации
        if (!isExpanded) item.style.display = "none";
        else button.scrollIntoView({ behavior: "smooth", block: "end" });
        item.removeEventListener("animationend", onAnimationEnd);
      };

      // Добавляем слушатель
      item.addEventListener("animationend", onAnimationEnd);

      // Запускаем анимацию
      item.classList.remove("fadeInUp", "fadeOutDown"); // сброс
      //void item.offsetWidth; // триггер reflow для повторной анимации
      item.classList.add(animationClass);
    });
  });

  // Пересчёт при ресайзе
  window.addEventListener("resize", () => {
    if (!list.classList.contains("show-all")) {
      const initialVisible = getInitialVisible();
      [...items].forEach((item, i) => {
        item.style.display = i < initialVisible ? "flex" : "none";
      });
    }
  });
}
