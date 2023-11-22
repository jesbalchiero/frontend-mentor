let toggle = document.querySelector('.toggle--input');
let cssLink = document.getElementById('light-theme');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        cssLink.href = './css/dark-theme.css';
    } else {
        cssLink.href = './css/light-theme.css';
    }
});
