// CREATE POPUP HTML ELEMENTS
const popupContainer = document.createElement("section");
popupContainer.classList.add("popup-container");
const popupContent = document.createElement("div");
popupContent.classList.add("popup-content");
const popupImage = document.createElement("img");
popupImage.classList.add("popup-image");
const popupAudio = document.createElement("audio");

// APPEND POPUP ELEMENTS TO DOCUMENT
document.body.appendChild(popupContainer);
popupContainer.appendChild(popupContent);
popupContent.appendChild(popupImage);
document.body.appendChild(popupAudio);

// FETCH ALL POPUP BUTTONS
const popupButtons = document.querySelectorAll(".popup-btn");
for (let i = 0; i < popupButtons.length; i++) {
  popupButtons[i].addEventListener("click", clickEvent);
}

// POPUP CLICKED FUNCTION
const active = "popup-active";
let canRun = true;
let isActive = false;
function clickEvent(clickTarget) {
  if (canRun) {
    canRun = false;

    // IF POPUP IS ACTIVE: DEACTIVATE
    if (isActive) {
      isActive = false;
      popupImage.style.transform = "scaleX(-1)";

      popupContent.classList.remove(active);
      popupContainer.removeEventListener("click", clickEvent);
      setTimeout(() => {
        popupContainer.classList.remove(active);
      }, 2000);
      fadeAudioOut(popupAudio, 4, 64);
    }
    // IF POPUP IS INACTIVE: ACTIVATE
    else {
      isActive = true;
      popupImage.style.transform = "scaleX(1)";

      popupContainer.classList.add(active);
      popupContent.classList.add(active);
      popupContainer.style.zIndex = 16;
      popupContainer.addEventListener("click", clickEvent);

      randomPopup();
      popupAudio.volume = 1;
      popupAudio.play();
      setTimeout(function () {
        canRun = true;
      }, 4000);
    }
  }
}

// FADE OUT AUDIO FUNCTION
function fadeAudioOut(audio, duration, steps) {
  duration *= 1000;
  const stepTime = duration / steps;
  let currentStep = 0;
  const fadeInterval = setInterval(() => {
    currentStep += 1;
    const volume = Math.max(0, 1 - currentStep / steps);
    audio.volume = volume;
    if (volume <= 0) {
      clearInterval(fadeInterval);
      audio.pause();
      audio.currentTime = 0;
      popupContainer.style.zIndex = -16;
      canRun = true;
    }
  }, stepTime);
}

// RANDOM POPUP FUNCTION
let lastPopups = [];
const randomPopupOptions = {
  1: ["Popup_WalterWhite.jpg", "Popup_WalterWhite.wav"],
  2: ["Popup_SaulGoodman.png", "Popup_SaulGoodman.wav"],
  3: ["Popup_GMan.jpg", "Popup_GMan.wav"],
  4: ["Popup_NyanCat.gif", "Popup_NyanCat.wav"],
  5: ["Popup_PBJ.gif", "Popup_PBJ.wav"],
  6: ["Popup_Herobrine.png", "Popup_Herobrine.wav"],
  7: ["Popup_Sonic.png", "Popup_Sonic.wav"],
};
function randomPopup() {
  const keys = Object.keys(randomPopupOptions).map(Number);
  const filteredKeys = keys.filter((key) => !lastPopups.includes(key));

  const ranNum = filteredKeys[Math.floor(Math.random() * filteredKeys.length)];
  lastPopups.unshift(ranNum);
  lastPopups = lastPopups.slice(
    0,
    Math.floor(Object.keys(randomPopupOptions).length / 2)
  );
  const option = randomPopupOptions[ranNum];
  console.log("Will not play: " + lastPopups);

  popupImage.src = "assets/img/popups/" + option[0];
  popupAudio.src = "assets/aud/popups/" + option[1];
}
