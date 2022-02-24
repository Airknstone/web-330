gsap.from('.intro-heading', { duration: 0.5, x: -300, opacity: 0 });
gsap.from('.bucket-list li', {
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});
gsap.from('.bucket', { duration: 1, delay: 0.5, opacity: 0 });
gsap.from('.card', {
  opacity: 0,
  stagger: 0.3, // 0.1 seconds between when each ".box" element starts animating
});
