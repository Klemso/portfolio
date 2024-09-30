// Nav links
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
};


// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    // Check if the clicked target is not the menu icon or the nav links
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Darkmode button
const body = document.querySelector('body')
const dm_btn = document.querySelector('.dm_btn')
const icon = document.querySelector('.btn_icon')

dm_btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    if(body.classList.contains('darkmode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout( () =>{
        icon.classList.remove('animated');
    }, 500)
})

// BTP Arrow animation

window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.btp_arrow');
    if (window.scrollY > 200) {  // Show after scrolling 200px
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});