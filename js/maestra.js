const dropDownButton = document.querySelector(".nav-bar-toggle-igac");
const nav = document.querySelector(".navbarigac");
const navLogos = document.querySelector(".navbarigac .logos");
const dropDownMenu = document.querySelector(".navbarnavigac");
const dropDownToggle = document.querySelector(".dropdownToggle");
const dropDown = document.querySelector(".dropDown");
const linkList = document.querySelector("#link-list");
const logoIgac = document.querySelector(".navbar-brand-igac");
const barraIgac = document.querySelector(".barra_gov");

dropDownButton.addEventListener('click', function handleClick(event) {
    dropDownMenu.classList.toggle('expandMenu');
});

// Tablet responsive
function handleTabletSize(x) {
    if (x.matches) {
        dropDownMenu.appendChild(linkList);
    } else {
        linkList.remove();
        nav.appendChild(linkList);
    }
}

var xTablet = window.matchMedia("(max-width: 768px)");
handleTabletSize(xTablet);
xTablet.addListener(handleTabletSize);

// Mobile responsive
function handleMobileSize(x) {
    if (x.matches) {
        barraIgac.appendChild(logoIgac);
    } else {
        logoIgac.remove();
        navLogos.appendChild(logoIgac);
    }
}

var xMobile = window.matchMedia("(max-width: 526px)");
handleMobileSize(xMobile);
xMobile.addListener(handleMobileSize);
