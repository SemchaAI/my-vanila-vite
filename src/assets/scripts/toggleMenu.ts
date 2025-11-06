const burger = document.querySelector<HTMLButtonElement>(".header__burger");
const nav = document.querySelector<HTMLDivElement>(".header__nav");
const overlay = document.querySelector(".overlay");

if (burger && nav && overlay) {
  const body = document.body;

  const closeMenu = () => {
    nav.classList.add("closing");
    nav.classList.remove("active");
    burger.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("scrollControl");

    const handleTransitionEnd = () => {
      nav.classList.remove("closing");
      nav.removeEventListener("transitionend", handleTransitionEnd);
    };

    nav.addEventListener("transitionend", handleTransitionEnd);
  };

  burger.addEventListener("click", () => {
    const isActive = nav.classList.contains("active");

    if (isActive) {
      closeMenu();
    } else {
      burger.classList.add("active");
      nav.classList.add("active");
      overlay.classList.add("active");
      body.classList.add("scrollControl");
    }
    overlay.addEventListener("click", closeMenu);
  });
}

// if (nav.classList.contains("active")) {
//   // начинаем плавное закрытие
//   nav.classList.add("closing");
//   nav.classList.remove("active");
//   overlay.classList.remove("active");
//   body.classList.remove("scrollControl");
//   // после окончания transition убираем visibility
//   const handleTransitionEnd = () => {
//     nav.classList.remove("closing");
//     nav.removeEventListener("transitionend", handleTransitionEnd);
//   };
//   nav.addEventListener("transitionend", handleTransitionEnd);
// } else {
//   // открытие меню
//   nav.classList.add("active");
//   overlay.classList.add("active");
//   body.classList.add("scrollControl");
// }
