const purr = document.getElementById("purring");

// TODO: Use Wep Audio Api instead HTMLAudioElement
//       and use the "Purr"-Class to Abstract all the logic.
function playAudio(url) {
  new Audio(url).play();
}

purr.onmousedown = (e) => {
  playAudio(purr.getAttribute("purr-sound"));
}

// TODO: More research and finishing it.
//       Also think ... hard ... about the Design.
// Make it:
class Purr {
  constructor(el, {src}) {
  }
}

const purr_sound = new Purr(purr,{})

// from this video: https://youtu.be/3NgVlAscdcA?si=FE0tSNk-zOEEStoC
// const ctx = new AudioContext()
// let audio;

// fetch("./upload/cat-loudly-purring.mp3")
//   .then(data => data.arrayBuffer())
//   .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//   .then(decodeAudio => audio = decodeAudio)

// function playback() {
//   const playSound = ctx.createBufferSource()
//   playSound.buffer = audio;
//   playSound.connect(ctx.destination);
//   playSound.start(ctx.currentTime);
// }

// window.addEventListener("mousedown", playback);
