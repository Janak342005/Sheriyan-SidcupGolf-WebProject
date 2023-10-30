let cur = document.querySelector(".cursor");
let curB = document.querySelector(".cursor-blur");
let h4all = document.querySelectorAll(".nav h4");

document.addEventListener("mousemove", function(dets){
    cur.style.left = dets.x  +"px"
    cur.style.top = dets.y +"px"
    curB.style.left = dets.x - 150 +"px"
    curB.style.top = dets.y - 150 +"px"
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cur.style.scale = 3
        cur.style.border = "0.5px solid white"
        cur.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cur.style.scale = 1
        cur.style.border = "0px solid #95c11e"
        cur.style.backgroundColor = "#95c11e"
    })
})

gsap.to(".nav",{
    backgroundColor : "black",
    height: "90px",
    duration : 0.5,
    scrollTrigger:{
        trigger: ".nav",
        scroller: "body",
        // markers: "true",
        start: "top -8%",
        end: "top -10%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers: true,
        start:"top -15%",
        end: "top -70%",
        scrub: 3,
        // duration: 0.5

    }
})

gsap.from(".aboutUs  img,.about-us-in",{
    y:50,
    opacity:0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".aboutUs",
        scroller:"body",
        // markers: true,
        start:"top 60%",
        end:"top 58%",
       scrub: 3
    }
})


gsap.from("#colon1",{
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers: true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers: true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})