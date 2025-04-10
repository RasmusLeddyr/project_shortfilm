const popupContainer = document.createElement("section");
popupContainer.classList.add("popup-container");
const popupContent = document.createElement("div");
popupContent.classList.add("popup-content");
const popupImage = document.createElement("img");
popupImage.classList.add("popup-image");

const audio = document.createElement("audio");

document.body.appendChild(popupContainer);
popupContainer.appendChild(popupContent);
popupContent.appendChild(popupImage);
document.body.appendChild(audio);

const active = "popup-active";
const popupButtons = document.querySelectorAll(".popup-btn");

for (let i = 0; i < popupButtons.length; i++) {
  popupButtons[i].addEventListener("click", clickEvent);
}

let canRun = true;
let isActive = false;
function clickEvent(clickTarget) {
  if (canRun) {
    canRun = false;

    if (isActive) {
      isActive = false;
      popupContainer.classList.remove(active);
      popupContent.classList.remove(active);
      popupContainer.removeEventListener("click", clickEvent);
      setTimeout(function () {
        popupContainer.style.zIndex = -16;
        canRun = true;
      }, 4000);
    } else {
      isActive = true;
      popupContainer.classList.add(active);
      popupContent.classList.add(active);
      popupContainer.style.zIndex = 16;
      popupContainer.addEventListener("click", clickEvent);

      const ranNum = Math.floor(Math.random() * 2) + 1;
      console.log(ranNum);
      if (ranNum == 1) {
        popupImage.src = "assets/img/Popup_WalterWhite.jpg";
      } else {
        popupImage.src = "assets/img/Popup_SaulGoodman.png";
      }

      setTimeout(function () {
        canRun = true;
      }, 4000);
    }
  }
}
