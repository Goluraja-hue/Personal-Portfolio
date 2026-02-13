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

const form = document.getElementById("form");


form.addEventListener("submit",async function(e){
    e.preventDefault();
    const Data = document.querySelectorAll("#form-name");
    const btn = document.querySelector("#sent-btn");
    function abc(){
       Data.forEach((data)=>{
        data.value = "";
    }) 
        btn.textContent = "Sent Successfully";
        btn.style.backgroundColor = "Green";
    }
    
    
    const data = new FormData(form);
    let url = "";
    const response = await fetch("https://formspree.io/f/mlgwjvdz", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    if (response.ok) {
        document.getElementById("status").innerText = "Message sent successfully!"; 
      abc();
    } else {
        document.getElementById("status").innerText = "Error sending message.";
        
  }
});
