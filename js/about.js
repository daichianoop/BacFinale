// Artists Slider  
let currentIndex1 = 0;  
let autoSlideInterval1;  

// Function to move the artist slide in a specified direction  
function moveArtistSlide(direction) {  
    const slides = document.querySelectorAll('.artists-slide');  
    const totalSlides = slides.length;  

    // Update the current index  
    currentIndex1 = (currentIndex1 + direction + totalSlides) % totalSlides;  

    // Calculate the offset for the slider  
    const offset = -currentIndex1 * 100; // 100% width for one slide  
     
    // Move the slider  
    document.querySelector('.artists-slider').style.transform = `translateX(${offset}%)`;  

    // Update active class for highlighting  
    slides.forEach((slide, index) => {  
        slide.classList.remove('active');  
        if (index === currentIndex1) {  
            slide.classList.add('active');  
        }  
    });  
}  

// Function to start autoplay for artists  
function startAutoSlide1() {  
    autoSlideInterval1 = setInterval(() => {  
        moveArtistSlide(1);  
    }, 3000); // Change slide every 3 seconds  
}  

// Function to stop autoplay for artists  
function stopAutoSlide1() {  
    clearInterval(autoSlideInterval1);  
}  

// Event listeners for hover to pause autoplay for artists  
const sliderContainer1 = document.querySelector('.artists-slider-container');  
sliderContainer1.addEventListener('mouseenter', stopAutoSlide1);  
sliderContainer1.addEventListener('mouseleave', startAutoSlide1);  

// Start the autoplay when the page loads for artists  
document.addEventListener('DOMContentLoaded', () => {  
    moveArtistSlide(0); // Set initial position  
    startAutoSlide1(); // Start autoplay  
});  
