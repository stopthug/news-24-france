const video = document.getElementById("article-video");
if (!video) {
  throw new Error("missing video");
}

video.addEventListener("contextmenu", (event) => event.preventDefault());
