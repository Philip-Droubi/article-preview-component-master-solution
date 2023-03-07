const shareButton = document.querySelector('button');
const DesktopMenu = document.querySelector('.shareSec');
const mobileMenu = document.querySelector('.mobileShare');
let menu = DesktopMenu;
let wideState = true;
let buttonClicked = false;

checkWidth();

window.addEventListener('resize', () => {
    if (window.innerWidth <= 640 && wideState) {
        checkWidth();
    } else if (window.innerWidth > 640 && !wideState) {
        checkWidth();
    }
});

function checkWidth() {
    if (window.innerWidth <= 640) {
        wideState = false;
        menu = mobileMenu;
    } else {
        wideState = true;
        menu = DesktopMenu;
    }
}

function handleMenu() {
    if (!buttonClicked) {
        buttonClicked = true;
        shareButton.style.color = ' var(--Light-Grayish-Blue)';
        shareButton.style.backgroundColor = ' var(--Desaturated-Dark-Blue)';
        shareButton.style.transform = 'rotate(360deg)';
        menu.classList.remove('hidden');
        menu.style.opacity = '1';
    } else {
        buttonClicked = false;
        shareButton.style.color = ' var(--Very-Dark-Grayish-Blue)';
        shareButton.style.backgroundColor = ' var(--Light-Grayish-Blue)';
        shareButton.style.transform = 'rotate(0)';
        menu.classList.add('hidden');
        menu.style.opacity = '0';
    }
}

shareButton.addEventListener('click', handleMenu);

document.addEventListener('click', event => {
    if (buttonClicked) {
        const isClickInside = shareButton.contains(event.target) || menu.contains(event.target);
        if (!isClickInside) handleMenu();
    }
});
