import "@/assets/css/base/_normalize.scss";
import "@/assets/css/base/_fonts.scss";
import "@/assets/css/base/_animations.scss";
import "@/assets/css/base/_utils.scss";
import "@/assets/css/base/_global.scss";

import "@/assets/css/btn.scss";
import "@/assets/css/links.scss";
import "@/assets/css/heading.scss";
import "@/assets/css/header.scss";
import "@/assets/css/pages/contacts.css";
import "@/assets/css/sections/marqueBrand.scss";
import "@/assets/css/footer.scss";

// js

import "@/assets/scripts/toggleMenu";
import "@/assets/scripts/accordions";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.utils
  .toArray<HTMLElement>(".hero, .services, .proposal, .studies")
  .forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
