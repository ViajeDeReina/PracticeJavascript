const familyName = document.querySelector('#familyName');
const firstName = document.querySelector('#firstName');
const fullName = document.querySelector('#fullName');

document.querySelector('.button6').addEventListener('click', onClickButton);

function onClickButton() {
    const family = familyName.value;
    const first = firstName.value;

    fullName.innerHTML = `${family}${first}`
}