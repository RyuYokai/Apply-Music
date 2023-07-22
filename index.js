const image = document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
currentTimeEL = document.getElementById('current-time'),
durationEL = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play'),
background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'Assets/Everybody_knows.mp3',
        displayName: 'Everybody knows',
        cover: 'Assets/Cover-1.jpg', 
        artist: 'Batman Version',
    },
    {
        path: 'Assets/NF-HAPPY.mp3',
        displayName: 'NF - HAPPY',
        cover: 'Assets/cover-happy.jpg', 
        artist: 'NF',
    },
    {
        path: 'Assets/WOLF_LARSEN_If_I_Be_Wrong.mp3',
        displayName: 'If I Be Wrong',
        cover: 'Assets/cover-wrong.jpg', 
        artist: 'WOLF LARSEN',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) %
    songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const { duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2,'0');
    durationEL.textContent = `${formatTime(duration /60)}:${formatTime(duration % 60)}`;
    currentTimeEL.textContent = `${formatTime(currentTime  / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', ()=>changeMusic(-1));
nextBtn.addEventListener('click', ()=>changeMusic(1));
music.addEventListener('ended', ()=>changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);