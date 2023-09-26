

const openNavToggle = document.querySelector('.fa-bars');

const closeNavToggle = document.querySelector('.fa-xmark');

const navLinks = document.querySelector('.nav-links');

const navbar = document.querySelector('.navbar');


closeNavToggle.style.display = 'none';

openNavToggle.addEventListener('click', ()=>{
    navLinks.classList.remove('hidden');
    navbar.style.height = '400px';
    openNavToggle.style.display = 'none';
    closeNavToggle.style.display = 'inline-block';

})

closeNavToggle.addEventListener('click', ()=>{
    navLinks.classList.add('hidden');
    navbar.style.height = 'auto';
    openNavToggle.style.display = 'inline-block';
    closeNavToggle.style.display = 'none';
})