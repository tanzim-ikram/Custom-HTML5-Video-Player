// Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.toggle');
const toggle = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');

// Functions
function togglePlay() {
    // Shortcut method for Toggle functionality
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();

    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

// Event Listeners