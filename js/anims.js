document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin,TextPlugin, )

  // nav bar scroll to
  const navLinks = document.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      gsap.to(window, {
        scrollTo: targetId,
        duration: 0.5,
      });
    });
  });

  // title
  const timeline = gsap.timeline({defaults: {duration: 1}})
  , splitted = new SplitText('.home-title', {type: "words"})
    words = splitted.words;

  timeline
      .from(words, { y: '-100%', ease: 'bounce'})

  // home page button down
  gsap.to('.home-link' ,{
    duration: 0.8,
    y: 8, 
    ease: "power1.inOut", 
    yoyo: true,
    repeat: -1 
  });

});

// 



