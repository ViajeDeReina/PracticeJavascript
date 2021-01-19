let textarea = document.querySelector('.textarea');
let string_num = document.querySelector('.string_num');

document.querySelector('.button3').addEventListener('click', onClickButton);

function onClickButton() {
    const inputText = textarea.value;
    string_num.innerText = inputText.length;
}