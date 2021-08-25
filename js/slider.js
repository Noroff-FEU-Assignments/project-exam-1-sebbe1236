const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed";
//const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/media";

const slider = document.querySelector(".featured-section");

async function frontpageApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const objects = result;
    console.log(result);
    for (i = 0; i < objects.length; i++) {
      console.log(objects[i]);
      console.log(objects[i].featured_media);
      slider.innerHTML += `
      
      <div>
      
      
      <img src="${objects[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "test">
      <h4>
      ${objects[i].title.rendered}
      </h4>
      
      </div>
      `;
    }
  } catch (error) {
    console.log("gikk skeis");
  }
}

frontpageApi();
