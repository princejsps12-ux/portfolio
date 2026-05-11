import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  _originalText?: string;
}

gsap.registerPlugin(ScrollTrigger);

function splitWords(el: ParaElement): HTMLSpanElement[] {
  if (!el._originalText) el._originalText = el.innerText;
  el.innerHTML = "";
  const words = el._originalText.split(/\s+/).filter(Boolean);
  const spans: HTMLSpanElement[] = [];
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    el.appendChild(span);
    spans.push(span);
    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });
  return spans;
}

function splitChars(el: ParaElement): HTMLSpanElement[] {
  if (!el._originalText) el._originalText = el.innerText;
  el.innerHTML = "";
  return Array.from(el._originalText).map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? " " : char;
    span.style.display = "inline-block";
    el.appendChild(span);
    return span;
  });
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll<ParaElement>(".para");
  const titles = document.querySelectorAll<ParaElement>(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para) => {
    para.classList.add("visible");
    if (para.anim) para.anim.progress(1).kill();
    const words = splitWords(para);
    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title) => {
    if (title.anim) title.anim.progress(1).kill();
    const chars = splitChars(title);
    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });
}
