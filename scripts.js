const card = document.getElementById('flipCard');
const flipSound = document.getElementById('flipSound');

// Unlock audio on first user interaction
document.addEventListener('click', function unlockAudio() {
  flipSound.play().then(() => {
    flipSound.pause();
    flipSound.currentTime = 0;
    document.removeEventListener('click', unlockAudio);
  }).catch(() => {
    // Some browsers block autoplay until gesture
  });
}, { once: true });

// Play sound on card flip
card.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
  flipSound.currentTime = 0;
  flipSound.play();
});
