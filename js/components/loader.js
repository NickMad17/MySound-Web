export function louder() {
    const loader = document.querySelector('.louder-wrapper');
    const app = document.querySelector('.app');
    app.classList.add('display-none');
    window.addEventListener('load', function(){
        app.classList.remove('display-none');
        loader.classList.add('display-none');
    })
}