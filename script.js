// JavaScript & Animation
// This file contains small interactive features used by the webpage.


// Wait until the HTML document has completely loaded before running the code.
// This ensures all page elements exist before JavaScript tries to access them.
document.addEventListener("DOMContentLoaded", () => {

  // Update footer year automatically

  // Find the HTML element with the id "year"
  // This element is located in the footer of the page.
  const yearEl = document.getElementById("year");

  // Check that the element exists before trying to modify it.
  // This prevents errors if the element is missing.
  if (yearEl) {

    // Get the current year from the user's system clock
    // and insert it into the footer.
    yearEl.textContent = new Date().getFullYear();

  }

});