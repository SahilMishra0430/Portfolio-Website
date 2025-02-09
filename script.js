Shery.makeMagnet(
  '.age,.location, .aboutcontent, .progress-bar-container img, .pimagebox, .contentbox' /* Element to target.*/,
  {
    //Parameters are optional.
    ease: 'cubic-bezier(0.23, 1, 0.320, 1)',
    duration: 1,
  }
);

// Shery.mouseFollower();

const follower = document.querySelector('.follower');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  // Update the follower's position to match the mouse pointer
  follower.style.left = `${clientX + scrollX}px`;
  follower.style.top = `${clientY + scrollY}px`;
});


Shery.textAnimate('.herotext h3' /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: 'cubic-bezier(0.23, 1, 0.320, 1)',
  multiplier: 0.1,
});

// Function to handle scroll-triggered animations
const sections = document.querySelectorAll('section');

function handleScroll() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Trigger the animation on scroll
document.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// percentage animation
