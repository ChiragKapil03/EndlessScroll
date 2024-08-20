
function randomHeight(){
  let a = Math.floor(300+Math.random()*450)+"px";
  return a;
}
function randomWidth(){
  let a = Math.floor(300+Math.random()*450)+"px";
  return a;
}

async function getPhotos() {
  try {
    let response = await fetch(`https://pixabay.com/api/?key=45496333-3fa1d67e86f676313d5f86f45&q=galaxy&image_type=photo`);
  let data = await response.json();
  console.log(data);

  let box = document.querySelector(".box");
  data.hits.forEach((photo) => {
    let img = document.createElement("img");
    img.src = photo.largeImageURL;
    img.style.height = randomHeight();
    img.style.width = randomWidth();
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