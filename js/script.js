// Data for Events
const eventData = [
    {
        title: 'First Online Events',
        description: 'In November 2023, We built the hype for this club with our First Online Event',
        image: 'images/Online_Events.png',
        sliderImages: ['Images/Online_Events.png'],
    },
    {
        title: 'First Anime Meetup Organised by Banaras Anime Club',
        description: 'In the very First Meet up of Banaras Anime Club, in partner with Mysteria, BAC had around 90-100 attendees',
        image: 'images/first_meet_up.jpg',
        sliderImages: ['images/first_meet_up.jpg'],
    },
    {
        title: 'First Anime Movie Release in Varanasi',
        description: 'At the time of Re-release of Suzume in India, BAC organised the First Anime Movie release in Varanasi',
        image: 'images/Suzume_Release.png',
        sliderImages: ['images/Suzume_Release.png'],
    },
    {
        title: 'Got Featured in Otaku Mantra',
        description: 'On 14 Feb, 2024. Banaras Anime Club got featured on Otaku Mantra as the Fastest growing Anime Club of India', 
        image: 'images/Otaku_Mantra.png',
        sliderImages: ['images/Otaku_Mantra.png']
    }
];

// Function to show Event Page
function showEventPage(eventIndex) {
    const event = eventData[eventIndex];
    
    // Set event page title and description
    document.querySelector('.event-page-title').innerText = event.title;
    document.querySelector('.event-page-description').innerText = event.description;
    
    // Set the main event image
    document.querySelector('.event-page-image').src = event.image;

    // Create image slider content
    const sliderContainer = document.querySelector('.image-slider');
    sliderContainer.innerHTML = ''; // Clear previous images
    event.sliderImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'slider-image';
        sliderContainer.appendChild(img);
    });

    // Show the event page
    document.getElementById('eventPage').classList.add('active');
}

// Function to close Event Page
function closeEventPage() {
    document.getElementById('eventPage').classList.remove('active');
}

// Fade-in effect for event containers on page load
document.addEventListener('DOMContentLoaded', () => {
    const eventContainers = document.querySelectorAll('.event-container');

    // Use Intersection Observer for scroll animations
    const options = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class on scroll into view
                entry.target.classList.remove('hidden'); // Remove hidden class
            } else {
                entry.target.classList.add('hidden'); // Add hidden class on scroll out of view
                entry.target.classList.remove('visible'); // Remove visible class
            }
        });
    }, options);

    // Observe each event container
    eventContainers.forEach((container) => {
        observer.observe(container);
        container.classList.add('hidden'); // Initially hide all event containers
    });

    // Initially, fade in the header
    document.querySelector('.main-title').classList.add('visible');
});

// Fill the timeline-line based on scroll position
window.onscroll = function() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document
    const viewportHeight = window.innerHeight; // Height of the viewport

    // Calculate the maximum scrollable height
    const maxScrollableHeight = documentHeight - viewportHeight;

    // Calculate fill height percentage
    const fillHeight = Math.min((scrollPosition / maxScrollableHeight) * 100, 100); // Fill up to 100% of the timeline line

    document.querySelector('.timeline-line-fill').style.height = fillHeight + '%';
};

// Add the CSS classes for animation
const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .hidden {
        opacity: 0 !important;
        transform: translateY(50px) !important;
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`;
document.head.appendChild(style);



// // Voyage Slider JS

// import imagesLoaded from "https://esm.sh/imagesloaded";

// console.clear();

// // -------------------------------------------------
// // ------------------ Utilities --------------------
// // -------------------------------------------------

// // Math utilities
// const wrap = (n, max) => (n + max) % max;
// const lerp = (a, b, t) => a + (b - a) * t;

// // DOM utilities
// const isHTMLElement = (el) => el instanceof HTMLElement;

// const genId = (() => {
//     let count = 0;
//     return () => {
//         return (count++).toString();
//     };
// })();

// class Raf {
//     constructor() {
//         this.rafId = 0;
//         this.raf = this.raf.bind(this);
//         this.callbacks = [];

//         this.start();
//     }

//     start() {
//         this.raf();
//     }

//     stop() {
//         cancelAnimationFrame(this.rafId);
//     }

//     raf() {
//         this.callbacks.forEach(({ callback, id }) => callback({ id }));
//         this.rafId = requestAnimationFrame(this.raf);
//     }

//     add(callback, id) {
//         this.callbacks.push({ callback, id: id || genId() });
//     }

//     remove(id) {
//         this.callbacks = this.callbacks.filter((callback) => callback.id !== id);
//     }
// }

// class Vec2 {
//     constructor(x = 0, y = 0) {
//         this.x = x;
//         this.y = y;
//     }

//     set(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     lerp(v, t) {
//         this.x = lerp(this.x, v.x, t);
//         this.y = lerp(this.y, v.y, t);
//     }
// }

// const vec2 = (x = 0, y = 0) => new Vec2(x, y);

// function tilt(node, options) {
//     let { trigger, target } = resolveOptions(node, options);

//     let lerpAmount = 0.06;

//     const rotDeg = { current: vec2(), target: vec2() };
//     const bgPos = { current: vec2(), target: vec2() };

//     const update = (newOptions) => {
//         destroy();
//         ({ trigger, target } = resolveOptions(node, newOptions));
//         init();
//     };

//     let rafId;

//     function ticker({ id }) {
//         rafId = id;

//         rotDeg.current.lerp(rotDeg.target, lerpAmount);
//         bgPos.current.lerp(bgPos.target, lerpAmount);

//         for (const el of target) {
//             el.style.setProperty("--rotX", rotDeg.current.y.toFixed(2) + "deg");
//             el.style.setProperty("--rotY", rotDeg.current.x.toFixed(2) + "deg");

//             el.style.setProperty("--bgPosX", bgPos.current.x.toFixed(2) + "%");
//             el.style.setProperty("--bgPosY", bgPos.current.y.toFixed(2) + "%");
//         }
//     }

//     const onMouseMove = ({ offsetX, offsetY }) => {
//         lerpAmount = 0.1;

//         for (const el of target) {
//             const ox = (offsetX - el.clientWidth * 0.5) / (Math.PI * 3);
//             const oy = -(offsetY - el.clientHeight * 0.5) / (Math.PI * 4);

//             rotDeg.target.set(ox, oy);
//             bgPos.target.set(-ox * 0.3, oy * 0.3);
//         }
//     };

//     const onMouseLeave = () => {
//         lerpAmount = 0.06;

//         rotDeg.target.set(0, 0);
//         bgPos.target.set(0, 0);
//     };

//     const addListeners = () => {
//         trigger.addEventListener("mousemove", onMouseMove);
//         trigger.addEventListener("mouseleave", onMouseLeave);
//     };

//     const removeListeners = () => {
//         trigger.removeEventListener("mousemove", onMouseMove);
//         trigger.removeEventListener("mouseleave", onMouseLeave);
//     };

//     const init = () => {
//         addListeners();
//         raf.add(ticker);
//     };

//     const destroy = () => {
//         removeListeners();
//         raf.remove(rafId);
//     };

//     init();

//     return { destroy, update };
// }

// function resolveOptions(node, options) {
//     return {
//         trigger: options?.trigger ?? node,
//         target: options?.target
//             ? Array.isArray(options.target)
//                 ? options.target
//                 : [options.target]
//             : [node]
//     };
// }

// // -----------------------------------------------------

// // Global Raf Instance
// const raf = new Raf();

// function init() {
//     const loader = document.querySelector(".loader");

//     const sliders = document.querySelectorAll(".slider");

//     loader.style.opacity = 0;
//     loader.style.pointerEvents = "none";

//     sliders.forEach(initializeSlider);
// }

// function initializeSlider(slider) {
//     const slides = [...slider.querySelectorAll(".slide")];
//     const slidesInfo = [...slider.querySelectorAll(".slide-info")];

//     const buttons = {
//         prev: slider.querySelector(".slider--btn__prev"),
//         next: slider.querySelector(".slider--btn__next")
//     };

//     slides.forEach((slide, i) => {
//         const slideInner = slide.querySelector(".slide__inner");
//         const slideInfoInner = slidesInfo[i].querySelector(".slide-info__inner");

//         tilt(slide, { target: [slideInner, slideInfoInner] });
//     });

//     buttons.prev.addEventListener("click", change(-1, slider));
//     buttons.next.addEventListener("click", change(1, slider));
// }

// function setup() {
//     const loaderText = document.querySelector(".loader__text");

//     const images = [...document.querySelectorAll("img")];
//     const totalImages = images.length;
//     let loadedImages = 0;
//     let progress = {
//         current: 0,
//         target: 0
//     };

//     // update progress target
//     images.forEach((image) => {
//         imagesLoaded(image, (instance) => {
//             if (instance.isComplete) {
//                 loadedImages++;
//                 progress.target = loadedImages / totalImages;
//             }
//         });
//     });

//     // lerp progress current to progress target
//     raf.add(({ id }) => {
//         progress.current = lerp(progress.current, progress.target, 0.06);

//         const progressPercent = Math.round(progress.current * 100);
//         loaderText.textContent = `${progressPercent}%`;

//         // hide loader when progress is 100%
//         if (progressPercent === 100) {
//             init();

//             // remove raf callback when progress is 100%
//             raf.remove(id);
//         }
//     });
// }

// function change(direction, slider) {
//     return () => {
//         let current = {
//             slide: slider.querySelector(".slide[data-current]"),
//             slideInfo: slider.querySelector(".slide-info[data-current]"),
//             slideBg: slider.querySelector(".slide__bg[data-current]")
//         };
//         let previous = {
//             slide: slider.querySelector(".slide[data-previous]"),
//             slideInfo: slider.querySelector(".slide-info[data-previous]"),
//             slideBg: slider.querySelector(".slide__bg[data-previous]")
//         };
//         let next = {
//             slide: slider.querySelector(".slide[data-next]"),
//             slideInfo: slider.querySelector(".slide-info[data-next]"),
//             slideBg: slider.querySelector(".slide__bg[data-next]")
//         };

//         Object.values(current).map((el) => el.removeAttribute("data-current"));
//         Object.values(previous).map((el) => el.removeAttribute("data-previous"));
//         Object.values(next).map((el) => el.removeAttribute("data-next"));

//         if (direction === 1) {
//             let temp = current;
//             current = next;
//             next = previous;
//             previous = temp;

//             current.slide.style.zIndex = "20";
//             previous.slide.style.zIndex = "30";
//             next.slide.style.zIndex = "10";
//         } else if (direction === -1) {
//             let temp = current;
//             current = previous;
//             previous = next;
//             next = temp;

//             current.slide.style.zIndex = "20";
//             previous.slide.style.zIndex = "10";
//             next.slide.style.zIndex = "30";
//         }

//         Object.values(current).map((el) => el.setAttribute("data-current", ""));
//         Object.values(previous).map((el) => el.setAttribute("data-previous", ""));
//         Object.values(next).map((el) => el.setAttribute("data-next", ""));
//     };
// }

// // Start
// setup();