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

//clock

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();



// loding page
var tl = gsap.timeline()

tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.3,
    delay:1
})

tl.to(".loader h3",{
    opacity:0,
    x:-40,
    stagger:0.1
})

tl.to(".loader",{
    opacity:0
})

tl.to(".loader",{
    display:"none"
})


gsap.from(".page-img img",{
  x:480,
  opacity:0.5,
  duration:1,
  stagger:0.3,
  ease: "power4",
  delay:2,
})

gsap.from(".page-text h1,p",{
    y:80,
    opacity:0,
    duration:1,
    stagger:0.3,
    ease: "power4",
    delay:2,
})


gsap.from(".wrapper-left #img1",{
  x:-100,
 opacity:0,
 duration:1,
 stagger:0.1,
 delay:2,
})

gsap.from(".wrapper-left #img2",{
     x:-100,
    opacity:0,
    duration:1,
    stagger:0.1,
    // delay:2,
    scrollTrigger: {
      trigger: ".wrapper-left #img2",
      scroller:"body",
      start:"top 100%",
      end:"top 30%",
      scrub:3
    }
})

gsap.from(".wrapper-left #img3",{
  x:-100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-left #img3",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-left #img4",{
  x:-100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-left #img4",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #img5",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #img5",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #img6",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #img6",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #img7",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #img7",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #img8",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #img8",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

// page 3 h1

gsap.from(".wrapper-left #text1",{
  x:-100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-left #text1",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})
gsap.from(".wrapper-left #text2",{
  x:-100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-left #text2",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-left #text3",{
  x:-100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-left #text3",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-left #text4",{
  x:-100,
 opacity:0,
 duration:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-left #text4",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #text5",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #text5",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #text6",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #text6",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #text7",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #text7",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

gsap.from(".wrapper-right #text8",{
  x:100,
 opacity:0,
 duration:1,
 stagger:0.1,
 // delay:2,
 scrollTrigger: {
   trigger: ".wrapper-right #text8",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})


// page 4 imgs
gsap.from(".page-4 img",{
  scale:0,
 opacity:0,                           
 duration:1,
 stagger:0.3,
 scrollTrigger: {
   trigger: ".page-4 img",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})

// page 4 h1

gsap.from(".page-4 h2",{
 x:70,
 opacity:0,                           
 duration:2,
 stagger:0.8,
 ease: "power4.out",
  delay: 1,
 scrollTrigger: {
   trigger: ".page-4 h2",
   scroller:"body",
   start:"top 100%",
   end:"top 30%",
   scrub:3
 }
})



// page 4 paragraph
const paragraphs = document.querySelectorAll(".page-4 p");

paragraphs.forEach((paragraph, index) => {
  let chars = paragraph.textContent.split(""); 
  paragraph.innerHTML = ""; 

  chars.forEach((char) => {
    let span = document.createElement("span");
    span.textContent = char;
    paragraph.appendChild(span);
  });
  let spans = paragraph.querySelectorAll("span");
  gsap.from(spans, {
    opacity: 0.2,
    y: 100,
    duration: 1,
    stagger: 0.05,
    delay: index * 0.5,
    scrollTrigger: {
      trigger: ".page-4 h2",
      scroller:"body",
      start:"top 60%",
      end:"top 50%",
      scrub:3,
      // markers:true
    }
  });
});


