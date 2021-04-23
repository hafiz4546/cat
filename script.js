const touch = document.querySelector('.box');
const aud = document.querySelector('.audio')

touch.addEventListener('click', () => {
    document.querySelector('.box').classList.add('box-clicked');
    setTimeout(() => {
        document.querySelector('.box').classList.remove('box-clicked');
    }, 3000);
    aud.play();
})
