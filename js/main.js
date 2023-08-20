import { louder } from "./modules/loader.js";
import { renderTrackList } from "./modules/renderTrackList.js";
// renderApp(renderTrackList);

const aboutSectionBtn = document.querySelectorAll('.header__item')[1];


aboutSectionBtn.addEventListener('click', () => {
    document.body.style.background = '#0d0638'
    const app = document.querySelector('.app');
    app.innerHTML = `wgrwg`;
})


renderTrackList();
louder();