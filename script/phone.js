const phoneNumber = document.getElementById('phone');

function showPhone() {
    if (phoneNumber.style.visibility == 'hidden') {
        phoneNumber.style.visibility = 'visible';
    } else {
        phoneNumber.style.visibility = 'hidden';
    }
}