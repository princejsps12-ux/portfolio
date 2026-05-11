import gsap from "gsap";
import { setPaused, scrollToTop } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  scrollToTop();
  setPaused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.15,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info h3",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  loopText(".landing-h2-info", ".landing-h2-info-1");
  loopText(".landing-h2-1", ".landing-h2-2");
}

function loopText(selectorA: string, selectorB: string) {
  const elA = document.querySelector<HTMLElement>(selectorA);
  const elB = document.querySelector<HTMLElement>(selectorB);
  if (!elA || !elB) return;

  gsap.set(elA, { y: 0, opacity: 1 });
  gsap.set(elB, { y: 80, opacity: 0 });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  const hold = 3;

  tl.to({}, { duration: hold })
    .to(elA, { y: -80, opacity: 0, duration: 1, ease: "power3.inOut" }, ">")
    .to(elB, { y: 0, opacity: 1, duration: 1, ease: "power3.inOut" }, "<")
    .to({}, { duration: hold })
    .to(elB, { y: -80, opacity: 0, duration: 1, ease: "power3.inOut" }, ">")
    .to(elA, { y: 80, opacity: 0, duration: 0 }, "<")
    .to(elA, { y: 0, opacity: 1, duration: 1, ease: "power3.inOut" }, "<");
}
