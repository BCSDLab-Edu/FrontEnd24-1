// [
//   {
//     "id": "1rg",
//     "url": "https://cdn2.thecatapi.com/images/1rg.jpg",
//     "width": 500,
//     "height": 332
//   }
// ]
fetchRandomCatImage();

function fetchRandomCatImage() {
  const apiUrl = "https://api.thecatapi.com/v1/images/search?size=full";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayCatImage(data[0].url);
    })
    .catch((error) => {
      //console.log("aaaa");
      console.error("Error fetching cat image:", error);
    });
}

function displayCatImage(imageUrl) {
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.alt = "Random Cat Image";
  imageElement.style.width = "100%";
  imageElement.style.maxWidth = "500px";
  imageElement.style.maxHeight = "332px";
  imageElement.style.marginTop = "20px";

  const container = document.querySelector(".topnav");
  container.appendChild(imageElement);
}
