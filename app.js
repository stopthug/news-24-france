const video = document.getElementById("local-video");
const fallback = document.getElementById("video-fallback");

video.addEventListener("contextmenu", (event) => event.preventDefault());

video.addEventListener("loadeddata", () => {
  fallback.hidden = true;
});

video.addEventListener("error", () => {
  fallback.hidden = false;
}, true);

window.addEventListener("load", () => {
  window.setTimeout(() => {
    if (video.readyState < 2) fallback.hidden = false;
  }, 500);
});
