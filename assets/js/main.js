/**
* Template Name: Restaurantly
* Author: Ashraf K.
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Mobile nav toggle
   */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

// // Function to select element(s)
// const select = (el, all = false) => {
//   el = el.trim()
//   if (all) {
//     return [...document.querySelectorAll(el)] // Return all matching elements as an array
//   } else {
//     return document.querySelector(el) // Return the first matching element
//   }
// }

// // Function to add event listener (as we discussed before)
// const on = (type, el, listener, all = false) => {
//   let selectEl = select(el, all)
//   if (selectEl) {
//     if (all) {
//       selectEl.forEach(e => e.addEventListener(type, listener))
//     } else {
//       selectEl.addEventListener(type, listener)
//     }
//   }
// }

// // Function to toggle the navbar
// const toggleNavbar = () => {
//   const navbar = select('#navbar') // Get the navbar element
//   const toggleButton = select('.mobile-nav-toggle') // Get the toggle button
  
//   // Toggle the 'navbar-mobile' class to open/close the menu
//   navbar.classList.toggle('navbar-mobile')
  
//   // Toggle between 'bi-list' (hamburger icon) and 'bi-x' (close icon)
//   toggleButton.classList.toggle('bi-list')
//   toggleButton.classList.toggle('bi-x')
// }

// // Attach click event listener to the toggle button
// on('click', '.mobile-nav-toggle', toggleNavbar)