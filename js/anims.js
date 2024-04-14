const navLinks = document.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    console.log('erm its:' + targetId)
    
    gsap.to(window, {
      scrollTo: targetId,
      duration: 0.5,
    });
  });
});

function bobbing(){
  var image = document.getElementsByClassName("home-link");

  gsap.to(image,{
    duration: 0.8,
    y: 8, 
    ease: "power1.inOut", 
    yoyo: true,
    repeat: -1 
  })
}
bobbing();