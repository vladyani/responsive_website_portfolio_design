//only mobile function for arrow

//$('#arrow').on('click', function(){
//    $('body, html').animate({
//        scrollTop: $('main').offset().top
//    }, 1000);
//})


let hamburger = document.querySelector('.hamburger_box');
let menu = document.querySelector('header nav ul');
let listItem = menu.lastElementChild;

function showMenu() {
    menu.style.display === 'block';
    if (menu.style.display === 'none') {
        let clonedListItem = listItem.cloneNode(false);
        clonedListItem.innerHTML = '<a href="projects.html">Projects</a>';
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none';
    }
}

hamburger.addEventListener('click', showMenu);
