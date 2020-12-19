/* select the rectangle on html file */
const rectangle = document.querySelector('.rectangle');

/* run below when clicking on the button1 */
document.querySelector('.button1').addEventListener('click', onClickButton);

/* changing colour whenever clicking the button1 */
function onClickButton() {
    const randomHue = Math.trunc(Math.random() * 360);
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}