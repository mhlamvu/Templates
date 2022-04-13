let textWrapper = document.querySelector(".title")

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g, "<span class='letter'>$&</span>"
)

anime.timeline().add({
  targets: ".title .letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 3000 + 40 * i
})

gsap.to(".box", .5, {
  y: "-50%",
  ease: Expo.easeInOut,
  delay: 0
})

gsap.from("img", 1, {
  scale: "2",
  ease: Expo.easeInOut,
  delay: 0
})

gsap.to(".wrapper-image", 2, {
  width: "400",
  height: "500",
  ease: Expo.easeInOut,
  delay: 1
})

gsap.from(".image", 0.4, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 2
})

gsap.to(".left", 2, {
  x: "-270",
  rotation: -12,
  ease: Expo.easeInOut,
  delay: 1.3
})

gsap.to(".right", 2, {
  x: "250",
  rotation: 10,
  ease: Expo.easeInOut,
  delay: 1.3
})

gsap.staggerFrom(".menu > div, .hero-container > div", 2, {
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut,
  delay: 1.5
}, 0.1)