


const body = document.body;
const bgColorsBody = ["#badc58", "#ff7979", "#e056fd", "#686de0", "#95afc0", "#f0932b"];
const urls = ['/home', '/discover', '/messages', '/profile', '/settings', '/admin'];

let menu, menuItems, menuBorder, activeItem;

function initMenu() {
    menu = body.querySelector(".menu");
    menuItems = menu.querySelectorAll(".menu__item");
    menuBorder = menu.querySelector(".menu__border");
    activeItem = menu.querySelector(".active");

    offsetMenuBorder(activeItem, menuBorder);

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => clickItem(item, index));
    });
}

function clickItem(item, index) {

    if (item.style.display === 'none') return;

    menu.style.removeProperty("--timeOut");
    menu.style.setProperty("--duration", "0.7s");

    if (activeItem == item) return;

    if (activeItem) {
        activeItem.classList.remove("active");
    }


    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);

    // Navigate to the corresponding page
    window.location.href = urls[index];

}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
} else {
    initMenu();
}

// Check role and show/hide admin tab
const adminTab = document.getElementById('adminTab');
if (localStorage.getItem('role') !== 'admin') {
  if (adminTab) {
    adminTab.style.display = 'none';
  }
}

window.addEventListener("resize", () => {
    if (activeItem && menuBorder) {
        offsetMenuBorder(activeItem, menuBorder);
        menu.style.setProperty("--timeOut", "none");
    }
});