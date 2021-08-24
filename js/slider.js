//const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts/";
const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/media";

const slider = document.querySelector(".featured-section");

async function frontpageApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const objects = result;
    console.log(result);
    for (i = 0; i < objects.length; i++) {
      console.log(objects[i]);
      slider.innerHTML += `
      
      <div><img src="${objects[i].guid.rendered}
      " alt= "test"></div>
      
      `;
    }
  } catch (error) {
    console.log("gikk skeis");
  }
}

frontpageApi();
