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


//text hover effect
var boxes = document.querySelectorAll(".box");
var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    crsr.style.left = event.pageX + "px";
    crsr.style.top = event.pageY + "px";
});

boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var att = elem.getAttribute("data-image");
        crsr.style.width = "470px";
        crsr.style.height = "370px";
        crsr.style.borderRadius = "0";
        crsr.style.backgroundImage = `url(${att})`;
    });

    elem.addEventListener("mouseleave", function() {
        crsr.style.width = "0px";
        crsr.style.height = "0px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = "none";
    });
});



//shery js starts from here

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, .5, 0.120, .1)",
  duration: .8,
});