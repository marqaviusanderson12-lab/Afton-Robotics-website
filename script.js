document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("showcaseVideo");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const restartBtn = document.getElementById("restartBtn");

  if (playBtn) playBtn.addEventListener("click", () => video.play());
  if (pauseBtn) pauseBtn.addEventListener("click", () => video.pause());
  if (restartBtn) restartBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
  });
});
