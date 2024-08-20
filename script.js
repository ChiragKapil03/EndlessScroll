let apiKey = "2p8lpMpkI-VxEK1Vy0EOfQE646wmysvZLMGztoVpLq8";
let count = 10;

// let apiUrl = ;


async function getPhotos() {

  let response = await fetch(`https:api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`);
  let data = await response.json();
  console.log(data);

  let box = document.querySelector(".box");
  data.forEach((photo) => {
    let img = document.createElement("img");
    img.src = photo.urls.regular;
    img.style.height = "450px";
    img.style.width = "400px";
    box.appendChild(img);
  });
}

getPhotos();

window.addEventListener("scroll", function () {
  if (window.scrollY + window.innerHeight + 100 >= document.body.offsetHeight) {
    getPhotos();
  }
});