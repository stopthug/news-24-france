const video = document.getElementById("local-video");
const fallback = document.getElementById("video-fallback");

video.addEventListener("contextmenu", (event) => event.preventDefault());

video.addEventListener("loadeddata", () => {
  fallback.classList.remove("is-on");
});

video.addEventListener("error", () => {
  fallback.classList.add("is-on");
});
