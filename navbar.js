const navbar = document.querySelector('nav');
const logo = navbar.querySelector('#logo-and-title');
const title = navbar.querySelector('#title');
const menu = navbar.querySelector('#menu-items');
const links = menu.querySelectorAll('div');
const button = menu.querySelector('#quoteButton');
const burger = menu.querySelector('#collapsed-icon');

// Changing the color of the navbar button when the user hovers the cursor over it
button.addEventListener('mouseover', (e) => {
    button.setAttribute('style', 'background-color: #f44336');
    button.style.color = "white"
    button.classList.add('z-depth-2');
});

button.addEventListener('mouseout', (e) => {
    button.setAttribute('style', 'background-color: inherited');
    button.style.color = "#f44336"
    button.classList.remove('z-depth-2');
});

// Ripple effect on clicking the button
const rippleOnClick = function (event) {
    event.currentTarget.querySelectorAll('.ripple').forEach(element => {
        element.remove();

    });
    const clickedElement = event.currentTarget.getBoundingClientRect();
    const clickCoordinates = { x: event.clientX, y: event.clientY };

    const xDiff = Math.max(clickCoordinates.x - clickedElement.left, clickedElement.right - clickCoordinates.x);
    const yDiff = Math.max(clickCoordinates.y - clickedElement.top, clickedElement.bottom - clickCoordinates.y);
    const radius = Math.sqrt(xDiff ** 2 + yDiff ** 2);

    const clickRipple = document.createElement('div');
    clickRipple.classList.add('ripple');
    clickRipple.style.width = clickRipple.style.height = `${radius * 2}px`;
    clickRipple.style.position = "absolute";
    clickRipple.style.left = `${clickCoordinates.x - radius - clickedElement.left}px`;
    clickRipple.style.top = `${clickCoordinates.y - radius - clickedElement.top}px`;

    event.currentTarget.appendChild(clickRipple);
};

button.addEventListener('click', rippleOnClick);

// Laying out the navbar based on viewport size.
document.addEventListener('DOMContentLoaded', () => {
    const viewPortWidth = document.documentElement.clientWidth;
    // const navbarWidth = navbar.getBoundingClientRect().width;
    let logoWidth = logo.getBoundingClientRect().width;
    const linksWidth = menu.getBoundingClientRect().width;
    const burgerWidth = 78;

    if ((logoWidth + linksWidth) / 0.9 < viewPortWidth) {
        logo.style.visibility = "visible";
        menu.style.visibility = "visible";
    } else {
        links.forEach(link => link.style.display = "none");
        button.style.display = "none";
        burger.style.display = "inline";
        let titleFontSize = 2.1;
        while ((logoWidth + burgerWidth) > viewPortWidth) {
            titleFontSize -= 0.1;
            title.setAttribute('style', `font-size: ${titleFontSize}rem`);
            logoWidth = logo.getBoundingClientRect('#logo-and-title').width;
        }
        logo.style.visibility = "visible";
        burger.style.visibility = "visible";
    }
});