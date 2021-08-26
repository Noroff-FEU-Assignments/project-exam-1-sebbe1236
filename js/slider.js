const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed";
//const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/media";

const slider = document.querySelector(".featured-section");

async function frontpageApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result.result;
    console.log(result);
  } catch (error) {
    console.log("gikk skeis");
  }
}

const result = frontpageApi();

frontpageHtml(result);

function frontpageHtml(objects) {
  console.log("hey");
  console.log(objects);
  for (i = 0; i < result.length; i++) {
    console.log(result[i]);
    console.log(result[i].featured_media);
    if (i === 4) {
      break;
    }
    slider.innerHTML += `
    <div>
    <img src="${result[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "test">
    <h4>
    ${result[i].title.rendered}
    </h4>
    </div>
    `;
  }
}
const CurrentIndex = 0;
const currentShown = 4;
