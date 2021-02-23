"use strict";

window.addEventListener("DOMContentLoaded", () => {
    //открытие формы воостановления пароля
    const enterForms = document.querySelectorAll('.enter .form');
    const recoverPass = document.querySelector('a[recover-pass]');

    if (recoverPass) {
        recoverPass.addEventListener('click', function (e) {
            e.preventDefault();
            openForm('form_pass-recovery');
        });
    }
    // форма регистрации
    const registerLink = document.querySelector('.link-registr a');
    if (registerLink) {
        registerLink.addEventListener('click', function (e) {
            e.preventDefault();
            openForm('form_registration');
        });
    }
    //открытие формы
    function openForm(formClass) {
        if (enterForms) { enterForms.forEach(item => item.classList.remove('active')); }
        document.querySelector(`.${formClass}`).classList.add('active');
    }
    //форма входа
    const loginForm = document.querySelector('.form_login');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            location.href = 'zayavki.html';
        });
    }
    // регулирование ширину инпутов
    const formInput = document.querySelectorAll('.form-profile input');
    if (formInput) {
        formInput.forEach(item => {
            setInputSize(item);
            item.addEventListener('change', () => {
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

    //табы в анкете
    const tabHeaderItems = document.querySelectorAll('.form-profile__tabs-header span');

    if (tabHeaderItems) {
        tabHeaderItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                const tabItems = document.querySelectorAll('.form-profile__tabs-item');
                tabItems.forEach(item => item.classList.remove('active'));
                tabHeaderItems.forEach(item => item.classList.remove('active'));
                item.classList.add('active');
                tabItems[i].classList.add('active');
            });
        });
    }
    //вызово формы для добавления сотрудника
    const btnCallModal = document.querySelector('[call-modal]');

    if (btnCallModal) {
        btnCallModal.addEventListener('click', () => {
            openForm('modal_add-person');
        });
    }
    //открытие доп информации в заявках
    const aplicTableRow = document.querySelectorAll('.aplication-table .table__row');

    if (aplicTableRow) {
        aplicTableRow.forEach(item => {
            item.addEventListener('click', function (e) {
                e.stopPropagation();
                if (e.target.closest('[data="info"]')) {
                    this.classList.toggle('active');
                    this.nextSibling.classList.toggle('active');
                }
                if (e.target.closest('[data="chat"]')) {
                    this.classList.toggle('active');
                    this.nextSibling.nextSibling.classList.toggle('active');
                }
            });
        });
    }

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
    if (window.innerWidth <= 768) {
        const sotrTableMobile = document.querySelector('.sotrudniki-table_mobile');
        if (sotrTableMobile) {
            sotrTableMobile.addEventListener('click', (e) => {
                if (e.target.closest('.table__title')) {
                    (e.target).parentElement.classList.toggle('active');
                    /* e.stopPropagation();
                    console.log(e.currentTarget);
                    console.log(e.target); */
                }
            });
        }
    }
    if (window.innerWidth <= 992) {
        const sotrTableMobile = document.querySelector('.aplication-table_mobile');
        if (sotrTableMobile) {
            sotrTableMobile.addEventListener('click', function (e) {
                if (e.target.closest('.table__title')) {
                    (e.target).parentElement.classList.toggle('active');
                }

            });
            const aplItem = sotrTableMobile.querySelectorAll('.aplication-table__item');
            aplItem.forEach(item => {
                item.addEventListener("click", function (e) {
                    if (e.target.closest('span[data="info"]')) {
                        e.stopPropagation();
                        this.querySelector('.info-table').classList.toggle('active');
                    }
                    if (e.target.closest('span[data="chat"]')) {
                        e.stopPropagation();
                        this.querySelector('.chat-table').classList.toggle('active');
                    }
                });
            });
        }
    }
});
