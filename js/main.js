var open = document.getElementById("hamburger");
var changeIcon = true;

open.addEventListener("click", function () {
  var overlay = document.querySelector(".overlay");
  var nav = document.querySelector("nav");
  var icon = document.querySelector(".menu-toggle i");
  overlay.classList.toggle("menu-open");
  nav.classList.toggle("menu-open");

  if (changeIcon) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");

    changeIcon = false;
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    changeIcon = true;
  }
});
// loader
const loader = document.querySelector(".loader");
window.onload = function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
      loader.style.overflow = "hidden";
    }, 500);
  }, 1500);
};
// Can also be used with $(document).ready()
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
// hhhh
function myFunction() {
  var x = document.getElementById("demo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// language
function myMenu() {
  var x = document.getElementById("lang");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// encyc
                function openNav() {
                    document.getElementById("myEncyc").style.height = "100%";
                }

                function closeNav() {
                    document.getElementById("myEncyc").style.height = "0%";
                }