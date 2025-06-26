// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();






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
