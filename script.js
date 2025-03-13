document.addEventListener("DOMContentLoaded", () => {
    // Contact Button
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', () => {
      alert("Thanks for your interest! You can reach me at: mit.dkharin@gmail.com");
    });
  
    // Carousel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');
  
    let currentSlide = 0;
  
    function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    }
  
    // Next Button
    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    });
  
    // Previous Button
    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  });
  