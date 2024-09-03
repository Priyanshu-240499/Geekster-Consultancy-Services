  // Sticky Header on Scroll
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector("nav");
//     if (window.scrollY > 50) {
//       header.classList.add("scrolling-header");
//     } else {
//       header.classList.remove("scrolling-header");
//     }
//   });
  
  // Auto-Resize Textarea
//   (function () {
//     function adjustTextareaHeight(el, offsetTop = 0) {
//       el.style.height = "auto";
//       el.style.height = `${el.scrollHeight + offsetTop}px`;
//     }
  
//     document.addEventListener("DOMContentLoaded", function () {
//       const textareas = ["#hs-tac-message"];
  
//       textareas.forEach((selector) => {
//         const textarea = document.querySelector(selector);
//         if (!textarea) return;
  
//         const overlay = textarea.closest(".hs-overlay");
//         const adjustHeight = () => adjustTextareaHeight(textarea, 3);
  
//         if (overlay) {
//           const overlayInstance = HSOverlay.getInstance(overlay, true);
//           if (overlayInstance) {
//             overlayInstance.element.on("open", adjustHeight);
//           }
//         } else {
//           adjustHeight();
//         }
  
//         textarea.addEventListener("input", adjustHeight);
//       });
//     });
//   })();


window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  const nav = header.querySelector('nav');

  if (window.scrollY > 80) {
    // Apply changes on scroll
    header.classList.add('w-full', 'top-0');
    header.classList.remove('max-w-[66rem]', 'top-4', 'mx-auto');

    nav.classList.remove('rounded-full');
    nav.classList.add('rounded-none');
  } else {
    // Revert back when scrolled to the top
    header.classList.add('max-w-[66rem]', 'top-4', 'mx-auto');
    header.classList.remove('w-full', 'top-0');

    nav.classList.remove('rounded-none');
    nav.classList.add('rounded-full');
  }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('-translate-x-full')) {
            entry.target.classList.remove('-translate-x-full', 'opacity-0');
            entry.target.classList.add('translate-x-0', 'opacity-100');
          } else if (entry.target.classList.contains('translate-x-full')) {
            entry.target.classList.remove('translate-x-full', 'opacity-0');
            entry.target.classList.add('translate-x-0', 'opacity-100');
          }
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.flex.flex-col.items-center');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const slideImage = document.getElementById("slide-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add classes to trigger slide-up effect
            slideImage.classList.remove("translate-y-full", "opacity-0");
            slideImage.classList.add("translate-y-0", "opacity-100");
            observer.unobserve(slideImage); // Stop observing after the first trigger
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in view
    );

    observer.observe(slideImage);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const flipElements = document.querySelectorAll('[data-flip]');
  
    function handleScroll() {
      const triggerHeight = window.innerHeight / 1.5; // 50% of the viewport height
  
      flipElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= triggerHeight) {
          element.classList.remove('rotate-y-180', 'opacity-0');
          element.classList.add('rotate-y-0', 'opacity-100');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  });
    
  document.addEventListener('DOMContentLoaded', function () {
    const flipElements = document.querySelectorAll('[data-flip]');
  
    function handleScroll() {
      const triggerHeight = window.innerHeight / 2; // 50% of the viewport height
  
      flipElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= triggerHeight) {
          element.classList.remove('rotate-y-180', 'opacity-0');
          element.classList.add('rotate-y-0', 'opacity-100');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  });

  




  