const Url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed&per_page=18";
const blogPost = document.querySelector(".blogpost-content");
const moreContentbutton = document.querySelector(".more-contentbtn");
async function blogsApi() {
  try {
    const response = await fetch(Url);
    const result = await response.json();
    const objects = result;
    console.log(result);
    for (i = 0; i < objects.length; i++) {
      if (i === 10) {
        break;
      }
      blogPost.innerHTML += `<a href="singleblog.html?id=${objects[i].id}">
     <div>
     <img class="img-click" src="${objects[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "test">
     <h4>${objects[i].title.rendered}</h4>
     </div>
     `;
    }
  } catch (error) {
    console.log("da var vi her igjen");
  }
}
blogsApi();

moreContentbutton.addEventListener("click");

// const imageClick = document.querySelector(".img-click");

// function imgbiggerClick() {
//   imageClick.style.transform = "scale(1.5)";
//   imageClick.style.transform = "transform 0.25s ease";
// }

// function resetImg() {
//   imageClick.style.transform = "scale(1)";
//   imageClick.style.transition = "transform 0.25s ease";
// }

//imageClick.addEventListener("click", imgbiggerClick, resetImg);
