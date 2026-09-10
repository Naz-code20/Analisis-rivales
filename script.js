// =======================================================
// 🚩 BANDERA: LÓGICA DEL REPRODUCTOR INTERACTIVO
// =======================================================

function loadVideo(videoUrl, title, pattern, consigna, phase) {
  // 1. Elementos del reproductor
  const mainVideo = document.getElementById('mainVideo');
  const videoSource = document.getElementById('videoSource');
  
  // 2. Elementos del panel de texto
  const clipTitle = document.getElementById('clipTitle');
  const clipPattern = document.getElementById('clipPattern');
  const clipConsigna = document.getElementById('clipConsigna');
  const clipPhaseBadge = document.getElementById('clipPhaseBadge');

  // 3. Actualizar la fuente del video y reproducir
  videoSource.src = videoUrl;
  mainVideo.load();
  mainVideo.play();

  // 4. Actualizar textos explicativos
  clipTitle.innerText = title;
  clipPattern.innerText = pattern;
  clipConsigna.innerText = consigna;
  clipPhaseBadge.innerText = phase;

  // 5. Cambiar el indicador visual del clip seleccionado
  document.querySelectorAll('.clip-card').forEach(card => {
    card.classList.remove('active');
  });
  
  // Activar la tarjeta que recibió el clic
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}
