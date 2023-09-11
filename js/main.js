import { renderHeader } from "./components/header/headerlogic.js";
import { louder } from "./components/loader.js";
import { renderTrackList } from "./components/renderTrackList.js";


// https://www.npmjs.com/package/json-server

renderHeader();

// tema

// const colorBtn = document.querySelector('theme');
// colorBtn.addEventListener('change', () => {
//     if(colorBtn.checked){
//         document.body.setAttribute('white', '');
//     } else {
//         document.body.removeAttribute('white');
//     }
// })


// 

renderTrackList();
louder();