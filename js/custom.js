// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// Simple example
const menuBtn = document.querySelector('.custom_menu-btn');
const sliderSection = document.querySelector('.slider_section');

if (sliderSection) {
  // Dark slider = add dark-menu
  menuBtn.classList.add('dark-menu');
}

// Detect when the slider is in view
window.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector('.custom_menu-btn');
  const sliderSection = document.querySelector('.slider_section');
  const infoSection = this.document.querySelector('info_section');

  if (!menuButton || !sliderSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Slider is visible: make menu lines light (white) for dark background
        menuButton.classList.remove('light');
        menuButton.classList.add('dark');
      }
      else {
        // Slider is NOT visible: make menu lines dark for light background
        menuButton.classList.remove('dark');
        menuButton.classList.add('light');
      }
    });
  }, {
    root: null,
    threshold: 0.1 // Adjust as needed
  });

  observer.observe(sliderSection);
});





// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

function openHome() {
    document.getElementById("formi");
    
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function() {
  "use strict";

  /* Preloader */
  setTimeout(function() {
    $('.loader_bg').fadeToggle();
  }, 1500);

  // …other site-wide code goes here
});



  //  Scroll To Top 
  $(window).on('scroll',function () {
    if ($(this).scrollTop() > 300) {
      $('.return-to-top').fadeIn();
    } else {
      $('.return-to-top').fadeOut();
    }
  });
  $('.return-to-top').on('click',function(){
      $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
  
function openLiveOverlay() {
  document.querySelector('.liveOverlay').style.display = 'flex';
}

function closeLiveOverlay() {
  const overlay = document.querySelector('.liveOverlay');
  const iframe = overlay.querySelector('iframe');

  // Stop the video by resetting src
  const currentSrc = iframe.src;
  iframe.src = ''; // Clear first
  iframe.src = currentSrc;

  // Hide overlay
  overlay.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  const watchBtn = document.querySelector('.watchLiveBtn');
  if (watchBtn) {
    watchBtn.addEventListener('click', openLiveOverlay);
  }

  const closeBtn = document.querySelector('.closeOverlayBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLiveOverlay);
  }
});

// Modal logic for church event flyers
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", function () {
      const src = this.getAttribute("data-src") || this.querySelector("img").src;
      modalImg.src = src;
      modal.style.display = "flex"; // key to flex layout
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });
});

// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = `<i class="fas fa-${newTheme === 'dark' ? 'moon' : 'sun'}"></i>`;
});

// Initialize theme icon
const initialTheme = body.getAttribute('data-theme') || 'dark';
themeToggle.innerHTML = `<i class="fas fa-${initialTheme === 'dark' ? 'moon' : 'sun'}"></i>`;

