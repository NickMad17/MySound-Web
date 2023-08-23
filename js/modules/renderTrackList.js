import { renderPcPlayer } from "./renderPcPlayer.js";
import { renderPlayer } from "./renderPlayer.js";
import { music_list } from "./trackList.js";

export function renderTrackList() {
    const app = document.querySelector('.app');
    app.innerHTML = `
    <div class='box ${window.screen.width > 500 ? `center`: ''}'>
        <h2 class="heading"><span class="main-color">Be</span>ats</h2>
        <div class="beat-container">
        </div>
    </div>`
    music_list.forEach(track => {
        const beatContainer = document.querySelector('.beat-container');
        beatContainer.innerHTML += ` <div class="track">
        <div class="track-container">
            <img src="${track.img}" class="track-logo"></img>
            
            <p class="track-nameing">
                ${track.name}
            </p>
        </div>
        <p class="track-price">
            $
        </p>
    </div>`
    })


    const tracks = document.querySelectorAll('.track');
    tracks.forEach((track,index) => {
        track.addEventListener('click', () => {
            if(window.screen.width < 786){
                const heightWindow  = window.screen.height;
                window.scroll(heightWindow,0);
                renderPlayer(index);
            } else { 
                renderPcPlayer(index);
            }
        })
    })

}