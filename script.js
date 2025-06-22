window.onload = function() {
    var viewers = document.querySelectorAll('spline-viewer');
    viewers.forEach(function(viewer) {
        var shadowRoot = viewer.shadowRoot;
        if (shadowRoot) {
            var logo = shadowRoot.querySelector('#logo');
            if (logo) {
                logo.remove();
            }
        }
    });
};


//shery js starts from here

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, .5, 0.120, .1)",
  duration: .8,
});

Shery.makeMagnet("a, .page1 .card", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".page1 h1, .circle-hover, .page3 .circle-hover h1", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .6,
})





//image generation
const IMAGE_SIZE_CONFIG = {
  minWidth: 200,
  maxWidth: 300,
  minHeight: 200,
  maxHeight: 300,
  minDiff: 50
};

const popImages = document.querySelector('.pop-images');
const numImages = 20;
for (let i = 0; i < numImages; i++) {
  let width, height;
  do {
    width = Math.floor(Math.random() * (IMAGE_SIZE_CONFIG.maxWidth - IMAGE_SIZE_CONFIG.minWidth + 1)) + IMAGE_SIZE_CONFIG.minWidth;
    height = Math.floor(Math.random() * (IMAGE_SIZE_CONFIG.maxHeight - IMAGE_SIZE_CONFIG.minHeight + 1)) + IMAGE_SIZE_CONFIG.minHeight;
  } while (Math.abs(width - height) < IMAGE_SIZE_CONFIG.minDiff);

  const img = document.createElement('img');
  img.src = `https://picsum.photos/${width}/${height}`;
  img.className = 'pop-img';
  popImages.appendChild(img);
}

//lenis js

const lenis = new Lenis({
    duration: 1.2,
    lerp: 1.5,
    smoothWheel: true,
    orientation: "vertical",
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//GSAP

gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char) => {

  const text = new SplitType(char, { types: 'chars, words' });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 90%",
      end: "top 0%",
      scrub: true,
      markers: false,
    },
    x: 20,
    y: 10,
    opacity: 0.1,
    stagger: 0.03,
    ease: "power2.out", 
  })
});

//PAGE 3
document.addEventListener("DOMContentLoaded", function () {
  const circle = document.querySelector('.circle-hover');
  const container = document.querySelector('.pop-images');
  const images = document.querySelectorAll('.pop-img');
  const exploreH1 = document.querySelector('.circle-hover h1');

  if (circle && container && images.length && exploreH1) {
    function randomPosition() {
      const rect = container.getBoundingClientRect();
      const x = Math.random() * (rect.width - 100);
      const y = Math.random() * (rect.height - 100);
      return { x, y };
    }

    circle.addEventListener('mouseenter', () => {
      images.forEach((img, i) => {
        const { x, y } = randomPosition();
        gsap.set(img, {
          x: circle.offsetLeft + circle.offsetWidth / 2 - 50 - container.offsetLeft,
          y: circle.offsetTop + circle.offsetHeight / 2 - 50 - container.offsetTop,
          opacity: 0,
          scale: 0.5,
          rotate: gsap.utils.random(-90, 90),
          filter: "blur(16px)"
        });
        gsap.to(img, {
          x: x,
          y: y,
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "expo.out",
          delay: i * 0.04
        });
      });
    });

    circle.addEventListener('mouseleave', () => {
      images.forEach((img, i) => {
        gsap.to(img, {
          x: circle.offsetLeft + circle.offsetWidth / 2 - 50 - container.offsetLeft,
          y: circle.offsetTop + circle.offsetHeight / 2 - 50 - container.offsetTop,
          opacity: 0,
          scale: 0.5,
          rotate: gsap.utils.random(-90, 90),
          filter: "blur(16px)",
          duration: 0.5,
          ease: "expo.in",
          delay: i * 0.02
        });
      });
    });

    exploreH1.addEventListener('mouseenter', () => {
      gsap.to(circle, {
        background: "radial-gradient(circle at 50% 50%, #fff 0%, #f5f5f5 80%, #333 100%)",
        boxShadow: "0 12px 48px 0 rgba(44,0,117,0.10), 0 0 0 0 #fff0",
        scale: 1.04,
        borderRadius: "50%",
        duration: 0.9,
        ease: "power2.out"
      });
      gsap.to(exploreH1, {
        color: "#181818",
        duration: 0.7,
        ease: "power2.out"
      });
      lenis.scrollTo(circle, { offset: -100, duration: 1, easing: t => 1 - Math.pow(1 - t, 3) });
    });

    exploreH1.addEventListener('mouseleave', () => {
      gsap.to(circle, {
        background: "transparent",
        boxShadow: "0 8px 32px rgba(44, 0, 117, 0.15)",
        scale: 1,
        borderRadius: "50%",
        duration: 0.9,
        ease: "power2.inOut"
      });
      gsap.to(exploreH1, {
        color: "#fff",
        duration: 0.7,
        ease: "power2.inOut"
      });
    });
  }
});