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
 const hero = document.querySelector('.hero-left');
const heroL = document.querySelector('.hero-right');
gsap.from(hero,{
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
 //Franklin Parts ends here