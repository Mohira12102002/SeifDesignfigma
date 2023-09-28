

const openNavToggle = document.querySelector('.fa-bars');

const closeNavToggle = document.querySelector('.fa-xmark');

const navLinks = document.querySelector('.nav-links');

const navbar = document.querySelector('nav');

const heroImg = document.querySelector('.hero-img');


closeNavToggle.style.display = 'none';

openNavToggle.addEventListener('click', ()=>{
    navLinks.classList.remove('hidden');
    navbar.style.position ='absolute';
    navbar.style.width = '100%';
    navbar.style.height = '400px';
    navbar.style.background = 'linear-gradient(270deg, #7743DB 31.64%, #5725E5 66.78%)';
    navbar.style.transition = '1s';
    openNavToggle.style.display = 'none';
    closeNavToggle.style.display = 'inline-block';
    heroImg.style.margin = '100px auto auto auto';
    

})

closeNavToggle.addEventListener('click', ()=>{
    console.log(12);
    navLinks.classList.add('hidden');
    navbar.style.height = 'auto';
    openNavToggle.style.display = 'inline-block';
    closeNavToggle.style.display = 'none';
})