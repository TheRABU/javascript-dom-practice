const url = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: Status: ${response.status}`);
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          const catImage = document.createElement("img");
          catImage.src = data[0].url;
          container.innerHTML = "";
          container.appendChild(catImage);
          console.log("Cat Image URL:", data[0].url);
        } else {
          console.error("No Image found");
        }
      })
      .catch((error) => {
        console.error(`Fetch Error: `, error);
      });
  });
});
