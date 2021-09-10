//const onclickImage = document.querySelectorAll("body > main > section > div > figure > img");
//let onclickImage = document.querySelector("body > main > section > div > figure > img");

const onclickImage = document.querySelectorAll("body > main > section > div:nth-child(2) > figure > img");

function openModal() {
  onclickImage.style.transition = "transform 0.25s ease";
  onclickImage.style.transform = "scale(1.5)";
  console.log("test");
}
openModal("test");
onclickImage.onclick = openModal;

//onclickImage.addEventlistener("click", openModal);
function closeModal() {
  onclickImage.style.transform = "scale(1)";
  onclickImage.style.transition = "transform 0.25s ease";
  console.log("test2");
}
