const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = [
  'Abrazame_muy_fuerte',
  'Preso',
  'Con la misma moneda', 
  'El hombre que yo amo',
];
// Song Links
const urlmp3 =[
  "music/salsas/LA SOLUCION - Abrazame Muy Fuerte",
  "music/salsas/ALVARO ROD - Preso (Salsa Live Session)",
  "music/salsas/SENSACION SALSERA - Con la misma moneda",
  "music/salsas/GIGANTES DE LA SALSA - El hombre que yo amo"
];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex], urlmp3[songIndex]);

// Update song details
function loadSong(song, url) {
  title.innerText = song;
  audio.src = '${url}.mp3';
  cover.src = 'images/${song}.jpg';
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex],urlmp3[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex],urlmp3[songIndex]);
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

function playthis(a) {
  let songIndex=a;
  loadSong(songs[songIndex], urlmp3[songIndex])
  playSong();  
}


/**--------------------responsive navbar-------- */
function shownav(){
  var x=document.getElementById("navbar");
  if (x.className=="navbar") {
      x.className += " responsive";    
  } else {
      x.className="navbar";
  }
}
