/* eslint-disable */
const menu = document.querySelector('.menu-btn');
const hiddenMenu = document.querySelector('.burger-menu');
menu.onclick = () => {
    hiddenMenu.classList.contains('d-none') ? hiddenMenu.classList.remove('d-none') : hiddenMenu.classList.add('d-none');
};
window.onclick = (e) => {
    if (e.target !== menu) {
        hiddenMenu.classList.add('d-none');
    }
};

document.querySelector('.tabs-header').addEventListener('click', fTabs);

function fTabs(event) {
    const dataTab = event.target.getAttribute('data-tab');
    const noActive = document.getElementsByClassName('btn-info');
    const tabBody = document.getElementsByClassName('tab-b');
    if (event.target.className == 'btn-info') {
        for (var i = 0; i < noActive.length; i++) {
            noActive[i].classList.remove('current');
        }
        event.target.classList.add('current');
        for (let i = 0; i < tabBody.length; i++) {
            if (dataTab == i) {
                tabBody[i].style.display = 'block';
            } else {
                tabBody[i].style.display = 'none';
            }
        }
    }
}

let loginForm = document.forms["main-form"].getElementsByTagName("input");
for (i = 0; i < loginForm.length; i++) {
    loginForm[i].addEventListener("blur", validate, false);
};

let contactForm = document.getElementsByClassName("message");
for (i = 0; i < contactForm.length; i++) {
    contactForm[i].addEventListener("blur", validate, false);
};

function validate(event) {
    if (!event.target.validity.valid || !event.target.value) {
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');

    }
}