const musicFile = document.querySelector('.music-audio');
const playBtn = document.querySelector('.play-btn');
const lyricsSection = document.querySelectorAll('.lyrics-tag');
const showTag = document.getElementById('text');


let musicLength = musicFile.duration;
var isPlaying = false;

const songs = [
    "/Assets/Musics/BlackChinese.mp3",
    "/Assets/Musics/MissAmerica.mp3",
    "/Assets/Musics/Reprecussions.mp3",
    "/Assets/Musics/SevenMillion.mp3"
]

function pauseSong () {
    musicFile.pause();
    console.log("Song paused");
    isPlaying = false;
    playBtn.className = "fas fa-play-circle play-btn fa-7x";
    
}

function addAnimation () {
    for (let i = 0; i < lyricsSection.length; i++){
        lyricsSection[i].classList.add("lyrics-animate");
    }
    showTag.style = "opacity: 1";
}

function selectMusic () {
    let randSelector = Math.floor(Math.random()*4);
    musicFile.innerHTML = `<source src=${songs[randSelector]}>`;
}

function playMusic (){
    musicFile.play();
    isPlaying = true;
    playBtn.className = "fas fa-pause fa-7x play-btn";
    setTimeout(pauseSong, 10000);
}
function pauseMusic (){
    musicFile.pause();
    isPlaying = false
    playBtn.className = "fas fa-play-circle play-btn fa-7x";
}

function musicEnds () {
    console.log("Track has ended");
    musicFile.load();
    playBtn.className = "fas fa-play-circle play-btn fa-7x";
    isPlaying = true;
    pausePlayControl();
    console.log("Music duration is " + musicLength);

}

function pausePlayControl () {
    if (!isPlaying){
        playMusic();
    }
    else{
        pauseMusic();
    }    
}

function loadEverything() {
    console.log("everything loaded;")
    selectMusic();
    playBtn.addEventListener('click', pausePlayControl);
    musicFile.addEventListener('ended', musicEnds);
    musicFile.addEventListener('pause', addAnimation);
}

this.addEventListener('load', loadEverything);
