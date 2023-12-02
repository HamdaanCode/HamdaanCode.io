

const apiKey = "yOoojWaXQrBgWE7w7SpGoKqwmceKffvKFoogNEHwuMuLzKUTiuDZEtl1";

fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: apiKey
  }
})
  .then(resp => resp.json())
  .then(data => {
    // Dynamically create HTML elements to display images
    const imageContainer = document.getElementById("image-container");

    data.photos.forEach(photo => {
      const imgElement = document.createElement("img");
      imgElement.src = photo.src.medium; // You can use different resolutions as needed
      imgElement.alt = photo.photographer;
      imageContainer.appendChild(imgElement);
    });
  })
  .catch(error => console.error("Error fetching data:", error));

console.log('Ready..');
