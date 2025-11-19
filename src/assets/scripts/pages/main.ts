import "@/assets/css/base/_normalize.scss";
import "@/assets/css/base/_variables.scss";
import "@/assets/css/base/_fonts.scss";
import "@/assets/css/base/_animations.scss";
import "@/assets/css/base/_utils.scss";
import "@/assets/css/base/_global.scss";

import "@/assets/css/btn.scss";
import "@/assets/css/links.scss";
import "@/assets/css/heading.scss";
import "@/assets/css/header.scss";
import "@/assets/css/sections/hero.scss";
import "@/assets/css/sections/brands.scss";
import "@/assets/css/sections/services.scss";
import "@/assets/css/sections/proposal.scss";
import "@/assets/css/sections/studies.scss";
import "@/assets/css/sections/work.scss";
import "@/assets/css/sections/team.scss";
import "@/assets/css/sections/testimonials.scss";
import "@/assets/css/sections/contacts.scss";
import "@/assets/css/footer.scss";

// js

import "@/assets/scripts/toggleMenu";
import "@/assets/scripts/team";
import "@/assets/scripts/testimonials";

window.addEventListener("load", async () => {
  if ("IntersectionObserver" in window) {
    const { initScrollAnimations } = await import("../gsap");
    initScrollAnimations();
  }
});

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils
//   .toArray<HTMLElement>(
//     ".services, .proposal, .studies, .work, .team, .contacts, .testimonials"
//   )
//   .forEach((section) => {
//     gsap.from(section, {
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         toggleActions: "play none none reverse",
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//     });
//   });
