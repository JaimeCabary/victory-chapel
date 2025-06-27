function openLiveOverlay() {
  document.querySelector('.liveOverlay').style.display = 'flex';
}

function closeLiveOverlay() {
  document.querySelector('.liveOverlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('.watchLiveBtn');
  const closeBtn = document.querySelector('.closeOverlayBtn');

  if (openBtn) {
    openBtn.addEventListener('click', openLiveOverlay);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLiveOverlay);
  }
});
