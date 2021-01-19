const secondElement = document.querySelector('#seconds');
var inputSecond = 0;
var goalTime = 0;

const button = document.querySelector('.button8');

button.addEventListener('click', () => {
    inputSecond = Number(document.getElementById('secs').value);
    goalTime = new Date().getTime() + (inputSecond * 1000);
    console.log(inputSecond);
    console.log(typeof(inputSecond));
    console.log(goalTime);
    document.querySelector('#inputSec').innerText = inputSecond;
    update();
});

function update() {
    const currentTime = new Date().getTime();
    const leftTime = goalTime - currentTime;

    if (leftTime <= 0) {
        secondElement.innerText = 'TIME\'S UP!';
        return;
    }

    secondElement.innerText = (leftTime / 1000).toFixed(2);
    requestAnimationFrame(update);
}