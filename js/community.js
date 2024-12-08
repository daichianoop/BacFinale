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


// Cosplayers Slider  
let currentIndex2 = 0;  
let autoSlideInterval2;  

// Function to move the cosplayer slide in a specified direction  
function moveCosplayerSlide(direction) {  
    const slides = document.querySelectorAll('.cosplayers-slide');  
    const totalSlides = slides.length;  

    // Update the current index  
    currentIndex2 = (currentIndex2 + direction + totalSlides) % totalSlides;  

    // Calculate the offset for the slider  
    const offset = -currentIndex2 * 100; // 100% width for one slide  
     
    // Move the slider  
    document.querySelector('.cosplayers-slider').style.transform = `translateX(${offset}%)`;  

    // Update active class for highlighting  
    slides.forEach((slide, index) => {  
        slide.classList.remove('active');  
        if (index === currentIndex2) {  
            slide.classList.add('active');  
        }  
    });  
}  

// Function to start autoplay for cosplayers  
function startAutoSlide2() {  
    autoSlideInterval2 = setInterval(() => {  
        moveCosplayerSlide(1);  
    }, 3000); // Change slide every 3 seconds  
}  

// Function to stop autoplay for cosplayers  
function stopAutoSlide2() {  
    clearInterval(autoSlideInterval2);  
}  

// Event listeners for hover to pause autoplay for cosplayers  
const sliderContainer2 = document.querySelector('.cosplayers-slider-container');  
sliderContainer2.addEventListener('mouseenter', stopAutoSlide2);  
sliderContainer2.addEventListener('mouseleave', startAutoSlide2);  

// Start the autoplay when the page loads for cosplayers  
document.addEventListener('DOMContentLoaded', () => {  
    moveCosplayerSlide(0); // Set initial position  
    startAutoSlide2(); // Start autoplay  
});  


// Writers Slider  
let currentIndex3 = 0;  
let autoSlideInterval3;  

// Function to move the writer slide in a specified direction  
function moveWriterSlide(direction) {  
    const slides = document.querySelectorAll('.writers-slide');  
    const totalSlides = slides.length;  

    // Update the current index  
    currentIndex3 = (currentIndex3 + direction + totalSlides) % totalSlides;  

    // Calculate the offset for the slider  
    const offset = -currentIndex3 * 100; // 100% width for one slide  
     
    // Move the slider  
    document.querySelector('.writers-slider').style.transform = `translateX(${offset}%)`;  

    // Update active class for highlighting  
    slides.forEach((slide, index) => {  
        slide.classList.remove('active');  
        if (index === currentIndex3) {  
            slide.classList.add('active');  
        }  
    });  
}  

// Function to start autoplay for writers  
function startAutoSlide3() {  
    autoSlideInterval3 = setInterval(() => {  
        moveWriterSlide(1);  
    }, 3000); // Change slide every 3 seconds  
}  

// Function to stop autoplay for writers  
function stopAutoSlide3() {  
    clearInterval(autoSlideInterval3);  
}  

// Event listeners for hover to pause autoplay for writers  
const sliderContainer3 = document.querySelector('.writers-slider-container');  
sliderContainer3.addEventListener('mouseenter', stopAutoSlide3);  
sliderContainer3.addEventListener('mouseleave', startAutoSlide3);  

// Start the autoplay when the page loads for writers  
document.addEventListener('DOMContentLoaded', () => {  
    moveWriterSlide(0); // Set initial position  
    startAutoSlide3(); // Start autoplay  
});

// Editors Slider  
let currentIndex = 0;  
let autoSlideInterval;  

// Function to move the editor slide in a specified direction  
function moveEditorSlide(direction) {  
    const slides = document.querySelectorAll('.editors-slide');  
    const totalSlides = slides.length;  

    // Update the current index  
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;  

    // Calculate the offset for the slider  
    const offset = -currentIndex * 100; // 100% width for one slide  
     
    // Move the slider  
    document.querySelector('.editors-slider').style.transform = `translateX(${offset}%)`;  

    // Update active class for highlighting  
    slides.forEach((slide, index) => {  
        slide.classList.remove('active');  
        if (index === currentIndex) {  
            slide.classList.add('active');  
        }  
    });  
}  

// Function to start autoplay for editors  
function startAutoSlide() {  
    autoSlideInterval = setInterval(() => {  
        moveEditorSlide(1);  
    }, 3000); // Change slide every 3 seconds  
}  

// Function to stop autoplay for editors  
function stopAutoSlide() {  
    clearInterval(autoSlideInterval);  
}  

// Event listeners for hover to pause autoplay for editors  
const sliderContainer = document.querySelector('.editors-slider-container');  
sliderContainer.addEventListener('mouseenter', stopAutoSlide);  
sliderContainer.addEventListener('mouseleave', startAutoSlide);  

// Start the autoplay when the page loads for editors  
document.addEventListener('DOMContentLoaded', () => {  
    moveEditorSlide(0); // Set initial position  
    startAutoSlide(); // Start autoplay  
});