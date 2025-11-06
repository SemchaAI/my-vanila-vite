import type { EmblaCarouselType } from "embla-carousel";

export const addDotBtnsAndClickHandlers = (
  emblaApi: EmblaCarouselType,
  dotsNode: HTMLElement
): (() => void) => {
  let dotNodes: HTMLElement[] = [];

  const addDotBtnsWithClickHandlers = (): void => {
    dotsNode.innerHTML = emblaApi
      .scrollSnapList()
      .map(
        (_, index) => `
        <button class="embla__dot" type="button" aria-label="Go to slide ${
          index + 1
        }">
          <svg class="embla__dot-svg" width="14" height="14">
            <use xlink:href="/images/sprites/icons.svg#dot"></use>
          </svg>
        </button>`
      )
      .join("");

    const scrollTo = (index: number): void => {
      emblaApi.scrollTo(index);
    };

    dotNodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener("click", () => scrollTo(index), false);
    });
  };

  const toggleDotBtnsActive = (): void => {
    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    dotNodes[previous].classList.remove("embla__dot_selected");
    dotNodes[selected].classList.add("embla__dot_selected");
  };

  emblaApi
    .on("init", addDotBtnsWithClickHandlers)
    .on("reInit", addDotBtnsWithClickHandlers)
    .on("init", toggleDotBtnsActive)
    .on("reInit", toggleDotBtnsActive)
    .on("select", toggleDotBtnsActive);

  return (): void => {
    dotsNode.innerHTML = "";
  };
};
