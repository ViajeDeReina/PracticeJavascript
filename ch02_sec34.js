// String parsing
document.querySelector('.button5').addEventListener('click',(event) => {
    const phoneNumb = document.querySelector('#mobnum').value;

    const trimmedHipen = phoneNumb.replace(/-/g,'');
    alert(`Your mobile number is ${trimmedHipen}.`);

    event.preventDefault();
});