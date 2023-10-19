window.onload = function() {
    var btnToggle = document.querySelector(".toggle");
    btnToggle.addEventListener("click", function(event) {
      const html = document.querySelector('html')
      if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        event.target.innerHTML = "Dark"
      } else {
        html.classList.add("dark")
        event.target.innerHTML = "Light"
      }
    });
  };

  /*document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelector('.slides');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slideWidth = slides.querySelector('.slide').clientWidth;
    const slidesLength = slides.querySelectorAll('.slide').length;
    let slideIndex = 0;
  
    function moveSlides() {
      slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
      slideIndex++;
      if (slideIndex >= slidesLength) {
        slideIndex = 0;
      }
    }
    
    setInterval(moveSlides, 100);
    // rest of the code here
  });*/
 
  

 
  
