/*
Menu Code
1. Responsive menu
-Alters the class from hamburger icon click.
2. Sticky Scroll Check
-Called on scroll, sticks navbar to top of page.
 */

// function responsiveMenu() {
//     var x = document.getElementById("topNav");
//     console.log(x.classList);
//     if (!x.classList.contains("responsive")) {
//         x.classList.add("responsive");
//         stickyScrollCheck();
//     } else {
//         x.classList.remove("responsive");
//     }
// }
//
// window.onscroll = function() {stickyScrollCheck()};
// var navbar = document.getElementById("topNav");
// var sticky = navbar.offsetTop;
// function stickyScrollCheck() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

/////////////////// new below

const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);
