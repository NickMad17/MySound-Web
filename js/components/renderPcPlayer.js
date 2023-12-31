import { music_list } from "./trackList.js";
export function renderPcPlayer(indexEl) {
    const footer = document.querySelector('.footer');
    footer.innerHTML = 

    `<div class="track-name track-name_footer">Track Name</div>
    
    <div class="track-wrapper">
        <div class="track-art track-art_footer"></div>

        <div class="slider_container slider_container_footer">
            <div class="current-time">00:00</div>
            <input type="range" min="1" max="100" value="0" class="seek_slider">
            <div class="total-duration">00:00</div>
        </div>
        <div class="buttons buttons_footer">
                <div class="playpause-track playpause-track__footer">
                    <i class="fa fa-play-circle fa-5x play__footer"></i>
                </div>
            </div>
    </div>`

    const tracks = document.querySelectorAll('.track');



const track_art = document.querySelector('.track-art');
const track_name = document.querySelector('.track-name');

const playpause_btn = document.querySelector('.playpause-track');
const next_btn = document.querySelector('.next-track');
const prev_btn = document.querySelector('.prev-track');
const random_btn = document.querySelector('.random-track');
const repeat_btn = document.querySelector('.repeat-track')

const seek_slider = document.querySelector('.seek_slider');
const volume_slider = document.querySelector('.volume_slider');
const curr_time = document.querySelector('.current-time');
const total_duration = document.querySelector('.total-duration');
const wave = document.getElementById('wave');
const headerLogo = document.querySelector('.header__logo p');
const randomIcon = document.querySelector('.fa-random');
const curr_track = document.createElement('audio');

let track_index = indexEl;
let isPlaying = false;
let isRandom = false;
let updateTimer;
let activeIndex = indexEl;



tarackActive();
loadTrack(track_index);
playpauseTrack();


tracks.forEach((track) => {
    track.addEventListener('click', () => {
        pauseTrack();
        track_art.classList.add('rotate');
        wave.classList.add('loader');
        headerLogo.classList.add('display-none');
        headerLogo.classList.remove('logo-animation');
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x play__footer"></i>';
    })
})


function tarackActive () {
    tracks.forEach((el) => {
        el.classList.remove('track_active');
    });
    tracks[track_index].classList.add('track_active');
}

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    // now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
// random_btn.addEventListener('click', () => {
//     randomTrack();
// })

function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

// repeat_btn.addEventListener('click', () => {
//     repeatTrack();
// })

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

playpause_btn.addEventListener('click', () => {
    playpauseTrack();
})

function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    headerLogo.classList.add('display-none');
    headerLogo.classList.remove('logo-animation');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x play__footer"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    headerLogo.classList.remove('display-none');
    headerLogo.classList.add('logo-animation');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x play__footer"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    tarackActive();
    loadTrack(track_index);
    playTrack();
}

// next_btn.addEventListener('click', () => {
//     nextTrack();
// })
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    tarackActive();
    loadTrack(track_index);
    playTrack();
}

// prev_btn.addEventListener('click', () => {
//     prevTrack()
// })

function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

seek_slider.addEventListener('change', () => {
    seekTo();
})

function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}

// volume_slider.addEventListener('change', () => {
//     setVolume();
// })

function setUpdate(indexEl){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        return true
    }
}
} 