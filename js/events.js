let currentIndex = 0; // Track the current slide index  

function moveSlide(direction) {  
    const slides = document.querySelectorAll('.slide'); // Select all slides  
    const totalSlides = slides.length; // Get the total number of slides  

    // Update the current index based on the direction of movement  
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;  

    // Calculate the offset for the slider  
    const offset = -currentIndex * 100; // Move by 100% for each slide  
    
    // Move the slider  
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;  
}  

// Optional: Auto slide every 5 seconds  
setInterval(() => {  
    moveSlide(1);  
}, 5000);