import { louder } from "./modules/loader.js";
import { renderTrackList } from "./modules/renderTrackList.js";

// https://www.npmjs.com/package/json-server

// ----------------------- headerlogic --------------------

const aboutSectionBtn = document.querySelectorAll('.header__item')[1];


aboutSectionBtn.addEventListener('click', () => {
    document.body.style.background = '#0d0638'
    const app = document.querySelector('.app');
    app.innerHTML = `wgrwg`;
})

const beatsSectionBtn = document.querySelectorAll('.header__item')[0];
beatsSectionBtn.addEventListener('click', () => {
    location.reload();
})

const logo = document.querySelector('.header__logo');
logo.addEventListener('click', () => {
    location.reload();
})

// ----------------------Render app---------------------
const headerNav = () => {
    const items = document.querySelectorAll('.header__item');
    const blocks = document.querySelectorAll('.block__text');
    const nav = [...items, ...blocks];
    nav.forEach(navElement => {
        navElement.addEventListener('click', () => {
            nav.forEach(el => {
                el.classList.remove('nav-active');
            })
            navElement.classList.add('nav-active');
        })
    })
}
headerNav();
// 

renderTrackList();
louder();