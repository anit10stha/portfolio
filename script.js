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
