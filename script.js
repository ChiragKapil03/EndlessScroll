// let apiKey = "45496333-3fa1d67e86f676313d5f86f45";

// let count = 20;

// https:api.unsplash.com/photos/random/?client_id=DUbOaOakxcTWF5daWI4c2A9jKVDO94tG9fkA8RugZEM&count=10

async function getPhotos() {
  try {
    let response = await fetch(`https://pixabay.com/api/?key=45496333-3fa1d67e86f676313d5f86f45&q=yellow+flowers&image_type=photo`);
  let data = await response.json();
  console.log(data);

  let box = document.querySelector(".box");
  data.hits.forEach((photo) => {
    let img = document.createElement("img");
    img.src = photo.largeImageURL;
    img.style.height = "450px";
    img.style.width = "400px";
    box.appendChild(img);
  });
  } catch (error) {
    console.log(error);
    
  }

}

getPhotos();

window.addEventListener("scroll", function () {
  if (window.scrollY + window.innerHeight + 100 >= document.body.offsetHeight){
    getPhotos();
  }
});