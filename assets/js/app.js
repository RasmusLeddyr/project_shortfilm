const popupContainer = document.querySelector(".popup-container");
const popupContent = document.querySelector(".popup-content");

let isPopupActive = false;

function showPopup() {
  if (isPopupActive) return;
  const style = window.getComputedStyle(popupContainer);
  const zIndex = parseInt(style.zIndex, 10);

  if (zIndex < 0) {
    //alert("I am at your door.");
    popupContainer.classList.toggle("popup-active");
    popupContent.classList.toggle("popup-active");
    popupContainer.style.zIndex = "16";
    setTimeout(function () {
      isPopupActive = true;
    }, 4000);
  }
}

function disablePopup() {
  if (!isPopupActive) return;
  const style = window.getComputedStyle(popupContainer);
  const zIndex = parseInt(style.zIndex, 10);

  if (zIndex > 0) {
    isPopupActive = false;
    popupContainer.classList.remove("popup-active");
    popupContent.classList.remove("popup-active");
    setTimeout(function () {
      popupContainer.style.zIndex = "-4";
    }, 4000);
  }
}
