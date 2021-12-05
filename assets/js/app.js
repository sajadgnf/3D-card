"use strict";
var container = document.querySelector(".container");
var card = document.querySelector(".card");
var sneaker = document.querySelector(".sneaker img");
var title = document.querySelector(".content h1");
var content = document.querySelector(".content p");
var size = document.querySelector(".size");
var Purchase = document.querySelector(".Purchase");
// Moving Animation Event
container.addEventListener("mousemove", function (e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
});
// Animation In
container.addEventListener("mouseenter", function () {
    card.style.transition = "none";
    // Popout
    sneaker.style.transform = "translateZ(200px) rotate(-45deg)";
    title.style.transform = "translateZ(150px)";
    content.style.transform = "translateZ(100px)";
    size.style.transform = "translateZ(70px)";
    Purchase.style.transform = "translateZ(60px)";
});
// Animation Out
container.addEventListener("mouseleave", function () {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    card.style.transition = "all .5s ease";
    // Popback
    sneaker.style.transform = "translateZ(0) rotate(0)";
    title.style.transform = "translateZ(0)";
    content.style.transform = "translateZ(0)";
    size.style.transform = "translateZ(0)";
    Purchase.style.transform = "translateZ(0)";
});
