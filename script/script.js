const contactName = document.getElementById('contactName');
const snackbar = document.getElementById('snackbar');

function saveGameName(name) {
    localStorage.setItem('name', JSON.stringify(name));
}

function savedInfo() {
    snackbar.innerHTML = `Thank you ${contactName.value}!`;
    snackbar.classList.add('show');

    setTimeout(() => {
        snackbar.classList.remove('show');
        window.location.reload();
    }, 2500);
}


