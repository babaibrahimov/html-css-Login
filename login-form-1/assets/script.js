let btn = document.getElementById('eye');
let PasswordInput = document.getElementById('password');
let body = document.querySelector('body')

let showpassword = true
btn.addEventListener('click', () => {
    
    if (PasswordInput.type === "password") {
        btn.classList.remove('ri-eye-off-line');
        btn.classList.add('ri-eye-line');
        PasswordInput.type = "text";
    } else {
        btn.classList.remove('ri-eye-line');
        btn.classList.add('ri-eye-off-line');
        PasswordInput.type = "password";
    }

})