const popupContainer1 = document.querySelector(".popup-container1");
const popupContent1 = document.querySelector(".popup-content1");

let isPopupActive = false;

function showPopup() {
  if (isPopupActive) return;
  const style = window.getComputedStyle(popupContainer1);
  const zIndex = parseInt(style.zIndex, 10);

  if (zIndex < 0) {
    //alert("I am at your door.");
    popupContainer1.classList.toggle("popup-active");
    popupContent1.classList.toggle("popup-active");
    popupContainer1.style.zIndex = "16";
    setTimeout(function () {
      isPopupActive = true;
    }, 4000);
  }
}

function disablePopup() {
  if (!isPopupActive) return;
  const style = window.getComputedStyle(popupContainer1);
  const zIndex = parseInt(style.zIndex, 10);

  if (zIndex > 0) {
    isPopupActive = false;
    popupContainer1.classList.remove("popup-active");
    popupContent1.classList.remove("popup-active");
    setTimeout(function () {
      popupContainer1.style.zIndex = "-4";
    }, 4000);
  }
}
