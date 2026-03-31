/*
  JavaScript & Animation — Worksheet Examples (1–6)

  IMPORTANT:
  - Normally run ONE example at a time.
  - Examples 5 and 6 can run together because they animate different images.
  - Make sure Examples 2–4 remain commented out (they animate the same element).
*/

document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------------
     Shared element references
  -------------------------------------------------- */
  const menuImage = document.getElementById("menuImage");



  /* ==================================================
     Example 5 — First GSAP Animation (Menu image)
     (ENABLED)
  ================================================== */
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (menuImage) {
    gsap.from(menuImage, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  }


  /* ==================================================
     Example 6 — Second GSAP Animation (Cocktails image)
     (ENABLED)
  ================================================== */
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (cocktailImage) {
    gsap.from(cocktailImage, {
      x: -150,
      opacity: 0,
      duration: 6,
      ease: "power3.out",
      delay: 0.3
    });
  }

});