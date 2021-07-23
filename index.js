Reveal.initialize({ touch: false }).then(() => {
  const currentSlide = Reveal.getCurrentSlide();
  const { h, v, f } = Reveal.getIndices((slide = currentSlide));
  if (h === 0) {
    const instructions = document.getElementsByClassName("instructions");
    instructions[0].style.display = "block";
  }
});

Reveal.addEventListener("slidechanged", function (evt) {
  const { up, down, left, right } = Reveal.availableRoutes();

  const currentSlide = Reveal.getCurrentSlide();
  const { h, v, f } = Reveal.getIndices((slide = currentSlide));

  // Instructions
  if (h === 0 || (down && !up)) {
    const instructions = document.getElementsByClassName("instructions");
    instructions[0].style.display = "none";
    instructions[0].style.display = "block";
  } else {
    const instructions = document.getElementsByClassName("instructions");
    instructions[0].style.display = "none";
  }
});
