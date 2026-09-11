// =======================================================
// 🚩 BANDERA: INICIALIZAR ICONOS
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// =======================================================
// 🚩 BANDERA: REPRODUCTOR INTERACTIVO
// =======================================================
function loadVideo(videoUrl, title, pattern, consigna, phase) {
  const mainVideo = document.getElementById('mainVideo');
  const videoSource = document.getElementById('videoSource');
  
  const clipTitle = document.getElementById('clipTitle');
  const clipPattern = document.getElementById('clipPattern');
  const clipConsigna = document.getElementById('clipConsigna');
  const clipPhaseBadge = document.getElementById('clipPhaseBadge');

  if (videoSource && mainVideo) {
    videoSource.src = videoUrl;
    mainVideo.load();
    mainVideo.play();
  }

  if (clipTitle) clipTitle.innerText = title;
  if (clipPattern) clipPattern.innerText = pattern;
  if (clipConsigna) clipConsigna.innerText = consigna;
  if (clipPhaseBadge) clipPhaseBadge.innerText = phase;

  document.querySelectorAll('.clip-card').forEach(card => {
    card.classList.remove('active');
  });
  
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  }
}
