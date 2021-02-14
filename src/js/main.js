"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const enterForms = document.querySelectorAll('.enter .form');
    const recoverPass = document.querySelector('a[recover-pass]');
    
    recoverPass.addEventListener('click', function(e){
        e.preventDefault();
        openForm('form_pass-recovery');
    });

    const registerLink = document.querySelector('.link-registr a');
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        openForm('form_registration');
    });
    function openForm(formClass) {
        enterForms.forEach(item=>item.classList.remove('active'));
        document.querySelector(`.${formClass}`).classList.add('active');
    }
    const loginForm = document.querySelector('.form_login');
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        location.href = '/zayavki.html';
    });
});
