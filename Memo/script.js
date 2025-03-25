// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Clock Function
function showTime() {
  let date = new Date();
  let h = String(date.getHours()).padStart(2, "0");
  let m = String(date.getMinutes()).padStart(2, "0");
  
  let time = `${h}:${m}`;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();

// Loading Page Animation
var tl = gsap.timeline();
tl.from(".loader h3", { x: 40, opacity: 0, duration: 1, stagger: 0.3, delay: 1 })
  .to(".loader h3", { opacity: 0, x: -40, stagger: 0.1 })
  .to(".loader", { opacity: 0, display: "none" });

// General Page Animations
gsap.from(".page-img img", { x: 480, opacity: 0.5, duration: 1, stagger: 0.3, ease: "power4", delay: 2 });
gsap.from(".page-text h1, .page-text p", { y: 80, opacity: 0, duration: 1, stagger: 0.3, ease: "power4", delay: 2 });

// Page 2 Animations

function animateElements(selector, xValue) {
  document.querySelectorAll(selector).forEach((element) => {
    gsap.from(element, {
      x: xValue,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        scroller: "body",
        start: "top 100%",
        end: "top 30%",
        scrub: 3,
      },
    });
  });
}

// Applying Scroll Animations
animateElements(".wrapper-left #img1, .wrapper-left #img2, .wrapper-left #img3, .wrapper-left #img4", -100);
animateElements(".wrapper-right #img5, .wrapper-right #img6, .wrapper-right #img7, .wrapper-right #img8", 100);
animateElements(".wrapper-left #text1, .wrapper-left #text2, .wrapper-left #text3, .wrapper-left #text4", -100);
animateElements(".wrapper-right #text5, .wrapper-right #text6, .wrapper-right #text7, .wrapper-right #text8", 100);

// Page 4 Animations
gsap.from(".page-4 img", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page-4 img",
    scroller: "body",
    start: "top 100%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from(".page-4 h2", {
  x: 70,
  opacity: 0,
  duration: 2,
  stagger: 0.8,
  ease: "power4.out",
  delay: 1,
  scrollTrigger: {
    trigger: ".page-4 h2",
    scroller: "body",
    start: "top 100%",
    end: "top 30%",
    scrub: 3,
  },
});

// Page 4 Paragraph Animation
document.querySelectorAll(".page-4 p").forEach((paragraph, index) => {
  let chars = paragraph.textContent.split("").map(char => `<span>${char}</span>`).join("");
  paragraph.innerHTML = chars;
  gsap.from(paragraph.querySelectorAll("span"), {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 0.05,
    delay: index * 1.5,
    scrollTrigger: {
      trigger: ".page-4 h2",
      scroller: "body",
      start: "top 60%",
      end: "top 50%",
      scrub: 3,
    },
  });
});
