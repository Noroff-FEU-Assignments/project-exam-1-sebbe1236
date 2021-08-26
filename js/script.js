//https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts;

const query = document.querySelector(".query-content");

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");
const urls = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed" + id;

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
  console.log(details);
  query.innerHTML += `<div>
    <img src="${details._embedded["wp:featuredmedia"]["0"].source_url}" alt= "test">
    <h4>
    ${details.title.rendered}
    </h4>
    <p>${details.content.rendered}</p>  
    </div>
    `;
}

productFetch();
