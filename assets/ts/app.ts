const container = document.querySelector(".container") as HTMLDivElement;
const card = document.querySelector(".card") as HTMLDivElement;
const sneaker = document.querySelector(".sneaker img") as HTMLImageElement;
const title = document.querySelector(".content h1") as HTMLParagraphElement;
const content = document.querySelector(".content p") as HTMLParagraphElement;
const size = document.querySelector(".size") as HTMLImageElement;
const Purchase = document.querySelector(".Purchase") as HTMLImageElement;

// Moving Animation Event
container.addEventListener("mousemove", (e: any) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animation In
container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
  // Popout
  sneaker.style.transform = "translateZ(200px) rotate(-45deg)";
  title.style.transform = "translateZ(150px)";
  content.style.transform = "translateZ(100px)";
  size.style.transform = "translateZ(70px)";
  Purchase.style.transform = "translateZ(60px)";
});

// Animation Out
container.addEventListener("mouseleave", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all .5s ease";
  // Popback
  sneaker.style.transform = "translateZ(0) rotate(0)";
  title.style.transform = "translateZ(0)";
  content.style.transform = "translateZ(0)";
  size.style.transform = "translateZ(0)";
  Purchase.style.transform = "translateZ(0)";
});
