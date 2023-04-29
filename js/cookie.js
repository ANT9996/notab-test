let closeCookie = () => {
    console.log('click')
    let blocks = document.getElementsByClassName('cookie');
    for (const block of blocks) {
        block.classList.add('close');
    }
}

let setEvent = () => {
    const buttons = document.getElementsByClassName('cookie__button');
        console.log(buttons)
    for (const button of buttons) {
        button.addEventListener('click', closeCookie)
    }
}

setEvent()