import "./index.css";

const heading = document.querySelector("h1");
const button = document.querySelector("button");
const searchText = document.querySelector("#movieSearch");

gsap.to(heading, { y: "-20px", yoyo: true, repeat: -1, duration: 0.5 });
gsap.fromTo(
  button,
  { x: "-100px" },
  { x: "100px", yoyo: true, repeat: -1, duration: 0.3 }
);
gsap.to(searchText, { scale: 0.2, yoyo: true, repeat: -1, duration: 0.5 });
