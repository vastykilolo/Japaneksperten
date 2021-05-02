const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  console.log(scroll);

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })
})
