//https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts;

const query = document.querySelector(".query-content");

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");
//const urls = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed=true" + id;
const urls = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts/" + id;
//const urls = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed" + id correct url but you have to edit the php to get iit tto woork
//https://developer.wordpress.org/rest-api/frequently-asked-questions/;
console.log(id);

async function idFetch() {
  try {
    const response = await fetch(urls);
    const details = await response.json();

    console.log(details);
    productFetch(details);
  } catch (error) {
    console.log("jajajja");
  }
}
idFetch();

function productFetch(details) {
  //console.log(details);
  query.innerHTML += `<div>
  
  
    <p>${details.content.rendered}</p>  
    </div>
    `;
}

productFetch();

//<img src="${details._embedded["wp:featuredmedia"]["0"].source_url}" alt= "test"> dette er bildelenken som skal limes inn i product fetch div`n
//img src="${details.guid.rendered}" funker ikke men henter et img.
//media_details.sizes.thumbnail.source_url
