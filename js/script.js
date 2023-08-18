import { renderApp } from "./modules/renderApp.js";
import { renderPlayer } from "./modules/renderPlayer.js";

renderApp(renderPlayer);
function louder() {
    const loader = document.querySelector('.louder-wrapper');
    const app = document.querySelector('.app');
    app.classList.add('display-none');
    window.addEventListener('load', function(){
        app.classList.remove('display-none');
        loader.classList.add('display-none');
    })
}

louder();
