// Author: De Leon, Kim Alyson R.
// Section: CS - 201
// Activity: Final Website - Pablo Coffee
// Date: October 18, 2024

// Hamburger Function
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar nav ul');
  
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active'); 
    });
  });
  