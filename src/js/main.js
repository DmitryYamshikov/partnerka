"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const enterForms = document.querySelectorAll('.enter .form');
    const recoverPass = document.querySelector('a[recover-pass]');

    if (recoverPass) {
        recoverPass.addEventListener('click', function (e) {
            e.preventDefault();
            openForm('form_pass-recovery');
        });
    }

    const registerLink = document.querySelector('.link-registr a');
    if (registerLink) {
        registerLink.addEventListener('click', function (e) {
            e.preventDefault();
            openForm('form_registration');
        });
    }
    function openForm(formClass) {
        enterForms.forEach(item => item.classList.remove('active'));
        document.querySelector(`.${formClass}`).classList.add('active');
    }
    const loginForm = document.querySelector('.form_login');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            location.href = '/zayavki.html';
        });
    }

    const formInput = document.querySelectorAll('.form-profile input');
    if (formInput) {
        formInput.forEach(item => {
            setInputSize(item);
            item.addEventListener('change', ()=>{
                const btn = document.querySelector('.form-profile .btn');
                console.log(btn);
                btn.removeAttribute('disabled');
            });
        });
        
    }

    function setInputSize(input) {
        let x = input.value.length;
        input.setAttribute('size', x);
        input.style.width = `${x * 11}px`;
    }

    const tabHeaderItems = document.querySelectorAll('.form-profile__tabs-header span');

    if (tabHeaderItems) {
        tabHeaderItems.forEach((item,i)=>{
            item.addEventListener('click', () => {
                const tabItems = document.querySelectorAll('.form-profile__tabs-item');
                tabItems.forEach(item => item.classList.remove('active'));
                tabHeaderItems.forEach(item => item.classList.remove('active'));
                item.classList.add('active');
                tabItems[i].classList.add('active');
            });
        });
    }
});
