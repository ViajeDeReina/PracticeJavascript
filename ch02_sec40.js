const phoneNum = document.querySelector('#mobnum2');
const warnMsg = document.querySelector('#warningMsg');

phoneNum.addEventListener('keyup', () => {
    const phoneN = phoneNum.value;
    const trmmedPhoneNum = phoneN.replace(/-/g, '');

    if (/^[0][0-9]{9,10}$/.test(trmmedPhoneNum) === false) {
        warnMsg.innerText = 'Please check again the format of the mobile number.'
    }
    else {
        warnMsg.innerText = '';
    }
});