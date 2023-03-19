const prev = document.getElementById('prev')
const next = document.getElementById('next')
const images = document.getElementById('images')
const imagesCount = images.children.length-1
let selectSlide = 0


const plus = () => {
  if (selectSlide > imagesCount*-1) {
    const child = images.children[0]
    selectSlide--;
    console.log(selectSlide);
    child.style.marginLeft = selectSlide*400 +'px'
    console.log('prev');
    console.log(child.style.marginLeft);
  }
}

const minus = () => {
  if (selectSlide < 0) {
    const child = images.children[0]
    selectSlide++;
    console.log(selectSlide);
    child.style.marginLeft = selectSlide*400 +'px'
    console.log('next');
    console.log(child.style.marginLeft);
  }
}


next.addEventListener('click', plus)
prev.addEventListener('click', minus)