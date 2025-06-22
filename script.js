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

Shery.makeMagnet(".page1 h1", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .6,
})

// Shery.textAnimate(".page2 .h1-animate", {
//     style: 1,
//     y: 100,
//     delay: 0.05, // reduced delay for faster animation
//     duration: 0.5, // reduced duration for faster animation
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 2.2,
// })


//lenis js

// Initialize Lenis
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