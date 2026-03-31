

document.addEventListener("DOMContentLoaded", () => {


  /* --------------------------------------------------
     Shared element references
  -------------------------------------------------- */
  const menuImage = document.getElementById("menuImage");
  const menuImageTwo = document.getElementById("menuImageTwo");
  const title = document.getElementById("title");
  const text = document.getElementById("text");
  const openHours = document.getElementById("openHours");

  

  /* ==================================================
     Image Goes up
  ================================================== */
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (menuImage) {
    gsap.from(menuImage, {
      y: 100,
      opacity: 0,
      duration: 4,
      ease: "power2.out"
    });
  }

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (menuImageTwo) {
    gsap.from(menuImageTwo, {
      y: 100,
      opacity: 0,
      duration: 4,
      ease: "power2.out"
    });
  }


  /* ==================================================
     Text/Image Swipe in
  ================================================== */
  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (title) {
    gsap.from(title, {
      x: -150,
      opacity: 0,
      duration: 6,
      ease: "power3.out",
      delay: 0.3
    });
  }

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (text) {
    gsap.from(text, {
      x: -150,
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      delay: 0.3
    });
  }

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded. Check the GSAP <script> tag order.");
  } else if (openHours) {
    gsap.from(openHours, {
      x: -150,
      opacity: 0,
      duration: 8,
      ease: "power3.out",
      delay: 0.3
    });
  }




  


});