//const onclickImage = document.querySelectorAll("body > main > section > div > figure > img");
//let onclickImage = document.querySelector("body > main > section > div > figure > img");
//document.querySelector("body > main > section > div:nth-child(2) > figure > img")
//const modalClose = document.querySelector("main");

let onclickImage;
let toggleImage = true;
function init() {
  onclickImage = document.querySelector("section.query-content img");
  console.log("sdgsdsdg", onclickImage);

  onclickImage.onclick = openModal;
}

function openModal() {
  if (toggleImage === true) {
    onclickImage.style.transform = "scale(1.3)";
    onclickImage.classList.add("modal-open");
    onclickImage.style.width = "80%";
    onclickImage.style.transition = "transform 0.50s ease";
    //onclickImage.style.maxwidth = "100%";
  } else {
    // onclickImage.style.transform = "scale(1)";
    // onclickImage.style.transition = "transform 0.50s ease";
    onclickImage.style.transform = "";
    onclickImage.style.transition = "";
    //onclickImage.classList.remove("modal-open");
    //onclickImage.style = "";
    //onclickImage.attributeStyleMap.clear();
    console.log("scale-down");
  }

  toogleImage = !toggleImage;
  console.log("test");

  console.log(onclickImage);
}

//onclickImage.addEventlistener("click", openModal);
// function closeModal() {
//   modalClose.style.transform = "scale(1)";
//   modalClose.style.transition = "transform 0.25s ease";
//   console.log("test2");
//   console.log(onclickImage);
// }

// modalClose.addEventListener("click", closeModal);

setTimeout(init, 2000);
