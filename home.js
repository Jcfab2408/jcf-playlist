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
  'ven_devorame_otra_vez',
  'Abrazame_muy_fuerte',
  'El_hombre_que_yo_amo',
  'Solo_con_un_beso',
];
// Song Links
const urlmp3 =[
  "https://github.com/Jcfab2408/jcf-mp3/blob/main/mp3/salsas/Abrazame_muy_fuerte.mp3",

  "https://firebasestorage.googleapis.com/v0/b/ucrania-proj.appspot.com/o/Mp3%2FSalsas%2FANGIE%20CHAVEZ%20%26%20Orq%20-%20Ven%2C%20dev%C3%B3rame%20otra%20vez%20(2022).mp3?alt=media&token=54cbb0d6-ae9b-4a8d-acf9-ccec86461137",

  "https://firebasestorage.googleapis.com/v0/b/ucrania-proj.appspot.com/o/Mp3%2FSalsas%2FANGIE%20CHAVEZ%20%26%20Orq%20-%20Ven%2C%20dev%C3%B3rame%20otra%20vez%20(2022).mp3?alt=media&token=54cbb0d6-ae9b-4a8d-acf9-ccec86461137",

  "https://firebasestorage.googleapis.com/v0/b/ucrania-proj.appspot.com/o/Mp3%2FSalsas%2FANGIE%20CHAVEZ%20%26%20Orq%20-%20Ven%2C%20dev%C3%B3rame%20otra%20vez%20(2022).mp3?alt=media&token=54cbb0d6-ae9b-4a8d-acf9-ccec86461137"  
];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex], urlmp3[songIndex]);

// Update song details
function loadSong(song, url) {
  title.innerText = song;
  audio.src = '${url}';
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