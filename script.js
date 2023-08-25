const keys = document.querySelectorAll(".white-key, .black-key");

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}

keys.forEach((element) => {
  const audioFile = new Audio(`./keys/${element.id}.mp3`);

  element.addEventListener(
    "mousedown",
    () => {
      if (isTouchDevice()) return;
      if (audioFile.currentTime > 0) audioFile.load();
      element.classList.add("click");
      audioFile.play();
    },
    false
  );

  element.addEventListener(
    "mouseup",
    () => {
      if (isTouchDevice()) return;
      element.classList.remove("click");
    },
    false
  );

  element.addEventListener(
    "touchstart",
    () => {
      if (audioFile.currentTime > 0) audioFile.load();
      element.classList.add("click");
      audioFile.play();
    },
    false
  );

  element.addEventListener(
    "touchend",
    () => {
      element.classList.remove("click");
    },
    false
  );
});
