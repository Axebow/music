const hero_image = document.querySelector("#hero-image");

hero_image.addEventListener("mousemove", (e) => {
    hero_image.style.backgroundPositionX = (-e.offsetX*0.1) + "px";
});