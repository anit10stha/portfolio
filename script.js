
// cursor animatin
var body = document.querySelector("body");
var cursor = document.querySelector("#cursor");

body.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
})

// for animation of icons, heading and paragraph
gsap.from(".right-social a i",{
    x:200,
    y:0,
    opacity: 0,
    duration: 1.5,
    delay: 1,
    stagger: 0.5
})

// gsap.from(".heading",{
//     x:200,
//     y:2000,
//     opacity: 0,
//     duration: 1.5,
//     delay: 3,
//     stagger: 1
    
// })

// gsap.from(".paragraph",{
//     x:-200,
//     y:200,
//     opacity: 0,
//     duration: 1.5,
//     delay: 3,
//     stagger: 1
// })


// back circle animation to webdevelopment text
var circle = document.querySelector(".circle");

var h1 = document.querySelector("h1");

window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .3,
        ease: Expo
    })
})

h1.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        scale: 5,
        filter: "blur(1px)",
    })

    gsap.to("h1",{
        color: "orange",
        duration: .1,
        // y: "-5vw"
    })
})

h1.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1,
        filter: "blur(0px)"
    })

    gsap.to("h1",{
        color: "white",
        duration: .1,
        // y: 0
    })
})
    