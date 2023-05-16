const video = document.querySelector("#video");

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    video.play();
  } else {
    video.pause();
  }
});
