// Set the date we're counting down to
var countDownDate = new Date("may 15, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js
// FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js FOr Locomotive js

function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  
  locomotiveScroll();

  gsap.from(".nav ,.section1",{
    y:-500,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"power3.out"
  })
  gsap.from(".section1 .l",{
    x:-500,
    opacity:0,
    duration:1,
    delay:0.6,

    stagger:0.2,
    ease:"power3.out"
  })
  gsap.from(".section1 .r",{
    x:500,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.2,
    ease:"power3.out"
  })
  gsap.from(".section2 h1,.section2 p,.section2 .best ",{
    y:-50,
    opacity:0,
    duration:1,
    // delay:1,
    stagger:0.5,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".section2",
        scroller: "#main",
        start:"top 80%",
        end:"bottom 80%",
        // scrub:true,
        // markers:true,
        // toggleActions:"restart none none none"
    }
  })
  gsap.from(".section3",{
    y:-50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".section3",
        scroller: "#main",
        start:"top 80%",
        end:"bottom 80%",
        // scrub:true,
        // markers:true,
        // toggleActions:"restart none none none"
    }
  })
  gsap.from(".section4",{
    y:-50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".section4",
        scroller: "#main",
        start:"top 80%",
        end:"bottom 80%",
        // scrub:true,
        // markers:true,
        // toggleActions:"restart none none none"
    }
  })
  gsap.from(".section5",{
    y:-50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".section5",
        scroller: "#main",
        start:"top 80%",
        end:"bottom 80%",
        // scrub:true,
        // markers:true,
        // toggleActions:"restart none none none"
    }
  })








