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
      popupContainer.classList.remove(active);
      popupContent.classList.remove(active);
      popupContainer.removeEventListener("click", clickEvent);
      fadeAudioOut(popupAudio, 4, 64);

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
    }
    // IF POPUP IS INACTIVE: ACTIVATE
    else {
      isActive = true;

      popupContainer.classList.add(active);
      popupContent.classList.add(active);
      popupContainer.style.zIndex = 16;
      popupContainer.addEventListener("click", clickEvent);

      const ranNum = Math.floor(Math.random() * 2) + 1;
      if (ranNum == 1) {
        popupImage.src = "assets/img/Popup_WalterWhite.jpg";
        popupAudio.src = "assets/aud/Popup_WalterWhite.wav";
      } else {
        popupImage.src = "assets/img/Popup_SaulGoodman.png";
        popupAudio.src = "assets/aud/Popup_SaulGoodman.wav";
      }
      //what the heck. There is no audio.
      popupAudio.volume = 1;
      popupAudio.play();

      setTimeout(function () {
        canRun = true;
      }, 4000);
    }
  }
}

// FADE OUT AUDIO FUNCTION
