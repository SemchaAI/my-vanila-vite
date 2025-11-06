// src/animations.ts
export async function initScrollAnimations() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils
    .toArray<HTMLElement>(
      ".hero, .services, .proposal, .studies, .work, .team, .contacts, .testimonials"
    )
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
}
