// SIZING ELEMENTS IN THE NAVBAR BASED ON NAVBAR HEIGHT
const navbar = document.querySelector('.navbar');
const title = document.querySelector('.title');
const menuItem = document.querySelectorAll('.menu-item');
const activeMenuItem = document.querySelector('.menu-item.active');

// Calculating and setting font sizes for various elements based on navbar height
const navbarHeight = navbar.clientHeight / 16;
const titleFontSize = navbarHeight / 1.66;
const menuItemFontSize = titleFontSize / 2.6;
const activeMenuItemFontSize = menuItemFontSize * 1.3;

title.style.setProperty('font-size', `${titleFontSize}rem`);
menuItem.forEach(item => item.style.setProperty('font-size', `${menuItemFontSize}rem`));
activeMenuItem.style.setProperty('font-size', `${activeMenuItemFontSize}rem`);

// Vertically aligning items with the center line of the navbar
menuItem.forEach(item => {
    const centerLine = navbarHeight / 2;
    let paddingTop
    if (item.classList.contains('active')) {
        paddingTop = centerLine - activeMenuItemFontSize * 0.83;
    }
    else {
        paddingTop = centerLine - menuItemFontSize * 0.83;
    }
    item.style.setProperty('padding-top', `${paddingTop}rem`);
});


console.log(navbarHeight, titleFontSize, menuItemFontSize);
