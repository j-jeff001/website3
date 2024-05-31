const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const title = document.getElementById('title')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
//const nextbtn = document.getElementById("btn").addEventListener('click', forwardSong)



//songs titles
const songs = ['hey', 'summer', 'ukulele']

//Keeps track of songs
let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//play song
function playSong() {
    musicContainer.classList.add('play')
    audio.play()
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

//Pause song
function pauseSong() {
    musicContainer.classList.remove('play')
    audio.pause()
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
}

//forward song
function forwardSong() {
    musicContainer.classList.remove('play')
    audio.next()
    playBtn.querySelector('i.fas').classList.add('fa-forward')
    playBtn.querySelector('i.fas').classList.remove('fa-pause', 'fa-play')
}

//progress bar
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progress.style.width = `${progressPercent}%`
    
}

function setProgress(e) {
    const width = this.clientWidth 
    const clickX = e.offsetX;
    const duration = audio.duration

    audio.currentTime = clickX / width * duration
}

//EVENT LISTERS
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
