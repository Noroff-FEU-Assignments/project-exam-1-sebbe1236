let imageOverlay = document.querySelector(".overlay");

let onclickImage;
let isOpen = false;

function init() {
  onclickImage = document.querySelector("section.query-content img");
  onclickImage.onclick = openModal;
}

function openModal() {
  if (isOpen === false) {
    //onclickImage.style.transform = "scale(1.3)";
    onclickImage.classList.add("modal-open");
    //onclickImage.classList.add("overlay"); modal overlay box som er display hidden og kommentert ut i CSSn nå.
    //onclickImage.classList.add("overlay");
    //onclickImage.className += "imageModal"; class som er lagt til som skulle align`e bilde boxn.
    //imageOverlay.style.display = "block";
    //onclickImage.style.width = "80%";
    //onclickImage.style.height = "80%";

    //onclickImage.style.transition = "transform 0.50s ease";
  } else {
    //onclickImage.style.transform = "scale(1.0)";
    //onclickImage.style.transition = "transform 0.50s ease";
    //onclickImage.classList.remove("overlay"); modal overlay box
    onclickImage.classList.remove("modal-open");
  }

  isOpen = !isOpen;
}

setTimeout(init, 2000);
