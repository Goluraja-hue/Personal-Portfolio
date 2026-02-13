var tl = gsap.timeline({
    // repeat:-1
});
tl.from(".sidebar",{
    duration:1,
    right:"200vw",
})
tl.to(".front-content",{
    ease: Expo.easeOut,
    duration: 8,
    left:"-200vw",
    delay:3
},"a")
tl.to(".back-content",{
    top :"0vw",
    delay:4,
    ease: Expo.easeInOut,
    duration: 3,
},"a")

gsap.to(".progress-bar-inner",{
    width:"90%",
    duration:1,
    stagger:1,
    delay:1,
})

let button = document.querySelector(".project-btn");
button.setAttribute("href","https://www.googole.com")
// button.addEventListener("click"{
    
// })

console.log(button);