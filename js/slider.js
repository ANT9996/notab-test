let prev = document.getElementById("prev");
let next = document.getElementById("next");
let images = document.getElementById("images");
let selectSlide = 0;
let ms = 7; // Скорость перехода
let step = 10;
let width = document.querySelector(".slider").clientWidth;

let margin = (htmlElem) => {
  return parseInt(htmlElem.style.marginLeft || '0px')
}

let disableButtons = () => {
  let dots = document.getElementsByClassName("dot");
  next.classList.add("disable");
  prev.classList.add("disable");
  for (const dot of dots) {
    dot.classList.add("disable");
  }
};
let enableButtons = () => {
  let dots = document.getElementsByClassName("dot");
  next.classList.remove("disable");
  prev.classList.remove("disable");
  for (const dot of dots) {
    dot.classList.remove("disable");
  }
}

let interval;
let changeInterval = (direction, index, marginStep = 10) => interval = setInterval(() => {
  console.log(margin(images), -(width * index))
  console.log(direction)
  if (margin(images) === -(width * index)) {
    document.getElementById("dot_" + selectSlide).classList.remove("activeSlide");
    selectSlide = index;
    document.getElementById("dot_" + selectSlide).classList.add("activeSlide");
    clearInterval(interval)
    enableButtons()
  } else {
    direction
        ? images.style.marginLeft = (margin(images) - marginStep) + "px"
        : images.style.marginLeft = (margin(images) + marginStep) + "px"
  }
}, 0);

// Функция для перемещения по точкам
let changeSlide = (index) => {
  disableButtons()
  width = document.querySelector(".slider").clientWidth;
  let changeType = index > selectSlide
  changeInterval(changeType, index, 10)
};

// Проверка на наличие изображений
if (document.getElementById("images").children.length > 0) {
  
  // Сокращение лишних изображений (если больше 10)
  if (images.children.length > 10) {
    for (let i = images.children.length-1; i > 9; i--) {
      console.log(images.children[i]);
      images.children[i].remove()
    }
  }
  // Дублирование первого элемента в конец
  images.innerHTML += images.children[0].outerHTML;
  //  Длина без последнего элемента
  let imagesCount = images.children.length - 1;
  
  // Рендер точек для перемещения
  let dotsBlock = document.getElementById("dots");
  for (let index = 0; index < imagesCount; index++) {
    dotsBlock.innerHTML +=
    `<div id="dot_${index}" class="dot ${index === 0 ? "activeSlide" : ""}" onclick="changeSlide(${index})"></div>`;
  }
  

  
  // Переход по клику на кнопку (next)
  let plus = () => {
    width = document.querySelector(".slider").clientWidth;
    if (selectSlide >= imagesCount - 1) {
      disableButtons();
      let start = 0;
      let interval = setInterval(() => {
        if (start >= width) {
          document.getElementById("dot_" + selectSlide).classList.remove("activeSlide");
          selectSlide = 0;
          document.getElementById("dot_" + selectSlide).classList.add("activeSlide");
          clearInterval(interval);
          images.style.marginLeft = -(width * imagesCount) + 'px'
          enableButtons()
        } else {
          images.style.marginLeft = -((selectSlide === 0 ? 0 : selectSlide) * width + start) + "px";
          start += step;
        }
      }, ms);
    } else {
      disableButtons();
      let start = 0;
      let interval = setInterval(() => {
        if (start > width) {
          document.getElementById("dot_" + selectSlide).classList.remove("activeSlide");
          selectSlide++;
          document.getElementById("dot_" + selectSlide).classList.add("activeSlide");
          clearInterval(interval);
          images.style.marginLeft = -(width * selectSlide) + 'px'
          enableButtons()
        } else {
          images.style.marginLeft = -((selectSlide === 0 ? 0 : selectSlide) * width + start) + "px";
          start += step;
        }
      }, ms);
    }
  };

    // Переход по клику на кнопку (prev)
  let minus = () => {
    width = document.querySelector(".slider").clientWidth;
    console.log(width);
    if (selectSlide === 0) {
      disableButtons();
      document.getElementById("dot_" + selectSlide).classList.remove("activeSlide");
      selectSlide = imagesCount - 1;
      document.getElementById("dot_" + selectSlide).classList.add("activeSlide");
      images.style.marginLeft = -selectSlide * width + "px";
      enableButtons();
      return;
    }
    disableButtons();
    document.getElementById("dot_" + selectSlide).classList.remove("activeSlide");
    selectSlide--;
    document.getElementById("dot_" + selectSlide).classList.add("activeSlide");
    images.style.marginLeft = -selectSlide * width + "px";
    enableButtons();
  };

  next.addEventListener("click", plus);
  prev.addEventListener("click", minus);
} else { // Если нет изображений
  document.getElementById("images").innerHTML = "<h1>Добавьте изображения</h1>";
}
