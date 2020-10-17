//https://codepen.io/ddanielcruzz/pen/LYZYEOa

const hexagon = document.querySelector("#grid li");
const hexagonRect = hexagon.getBoundingClientRect();

hexagon.addEventListener("mousemove", (evt) => {
  const x = (evt.x - hexagonRect.left) / hexagonRect.width;
  const dx = -(x - 0.5);
  const y = (evt.y - hexagon.top) / hexagonRect.height - 0.5;
  hexagon.style.transform = `perspective(1000px) rotateY(${dx * 45}deg) rotateX(${
    y * 45
  }
  deg) `;
});

hexagon.addEventListener("mouseleave", () => {
  hexagon.style.transform = "none";
});
