const Url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed";
const blogPost = document.querySelector(".blogpost-content");
async function blogsApi() {
  try {
    const response = await fetch(Url);
    const result = await response.json();
    const objects = result;
    console.log(result);
    for (i = 0; i < objects.length; i++) {
      blogPost.innerHTML += `<a href="singleblog.html?id=${objects[i].id}">
     <div>
     <img src="${objects[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "test">
     <h4>${objects[i].title.rendered}</h4>
     </div>
     `;
    }
  } catch (error) {
    console.log("da var vi her igjen");
  }
}

blogsApi();
