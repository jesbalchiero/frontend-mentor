document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit');
    const emailError = document.querySelector('#error');
    const errorMsg = document.querySelector('#error-text');

    function validateMail() {
        var email = document.getElementById('mail-input');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)){
            emailError.classList.add('show');
            email.classList.add('error-icon');
            email.style.border = '2px solid var (--clr-soft-red)';
            email.style.color = 'red';
            document.getElementsByName ('mail')[0].placeholder='';
        } else {
            errorMsg.innerHTML = "Thank You!";
            emailError.classList.add('show');
        }
    }

    submitBtn.addEventListener('click', validateMail);
})