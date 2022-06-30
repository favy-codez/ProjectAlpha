// favours part starts here
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    autoplay:true,
    dots:false,
    arrows:false,
    responsive:{
        1000:{
            items:3,
            nav:false,
        }
    }
})
//favours part ends here
 //Franklin Parts starts here
 const heroB = document.querySelector('.hero-left');
 const heroL = document.querySelector('.hero-right');
 const navLinks = document.querySelector('.nav-links')
 const hamBtn  = document.querySelector('.ham-buger')
 const mainCon = document.querySelector('.hero-section')
 const maincon = document.querySelector('main')
gsap.from(heroB,{
    duration: "2.5",
    ease:"power2.out",
    opacity: 0,
    x:-500
})

gsap.from(heroL,{
    duration: "2.5",
    ease:"power2.out",
    x:500,
    opacity:0
})
hamBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    mainCon.classList.toggle('main-drop')
    maincon.classList.toggle('main-drop')
})

 //Franklin Parts ends here