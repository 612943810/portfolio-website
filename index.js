document.addEventListener('DOMContentLoaded', function() {
    let navbarQuery=document.querySelector('.navbar');
    let navLinksQuery=document.querySelectorAll('nav .menuItems a');

    window.addEventListener('scroll', function() {  
        if(window.scrollY>50){
            navbarQuery.classList.add('scrolled');
            navLinksQuery.forEach(menuLink=> menuLink.classList.add('scrolled'));
        }else{
            navbarQuery.classList.remove('scrolled');
            navLinksQuery.forEach(menuLink=> menuLink.classList.remove('scrolled'));
        }
    });
});
