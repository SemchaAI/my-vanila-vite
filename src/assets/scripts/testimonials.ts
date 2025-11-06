import EmblaCarousel from "embla-carousel";
import type { EmblaOptionsType } from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton";

const OPTIONS: EmblaOptionsType = {
  align: window.innerWidth < 768 ? "start" : "center",
  dragFree: true,
  startIndex: 1,
};

const emblaNode = document.querySelector<HTMLElement>(".embla");
if (emblaNode) {
  const viewportNode = emblaNode.querySelector<HTMLElement>(".embla__viewport");
  const prevBtnNode = emblaNode.querySelector<HTMLElement>(
    ".embla__button-prev"
  );
  const nextBtnNode = emblaNode.querySelector<HTMLElement>(
    ".embla__button-next"
  );
  const dotsNode = emblaNode.querySelector<HTMLElement>(".embla__dots");

  if (viewportNode && prevBtnNode && nextBtnNode && dotsNode) {
    const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
      emblaApi,
      prevBtnNode,
      nextBtnNode
    );
    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
      emblaApi,
      dotsNode
    );

    emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
    emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
  }
}
