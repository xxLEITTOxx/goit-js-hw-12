import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const myGallery = document.querySelector(".gallery");

export function createGallery(images) {
  function galleryItemInsertion({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) {
    return `<li class="gallery-item">
        <div class="gallery-item-container">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}"
          /></a>
          <div class="image-info">
            <div class="image-info-container">
              <b>Likes</b>
              <p>${likes}</p>
              </div>
            <div class="image-info-container">
              <b>Views</b>
              <p>${views}</p>
                </div>
            <div class="image-info-container">
              <b>Comments</b>
              <p>${comments}</p>
                </div>
            <div class="image-info-container">
              <b>Downloads</b>
              <p>${downloads}</p>
                </div>
          </div>
        </div>
        </li>`;
  }
  const newGallerySyntax = images.map(galleryItemInsertion).join("");
  myGallery.insertAdjacentHTML("beforeend", newGallerySyntax);

  const myLightbox = new SimpleLightbox(".gallery-link", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });
  myLightbox.refresh();
}

export function clearGallery() {
  myGallery.innerHTML = "";
}
export function showLoader() {
  const myLoader = document.querySelector(".loader");
  myLoader.classList.remove("visuallyhidden");
}
export function hideLoader() {
  const myLoader = document.querySelector(".loader");
  myLoader.classList.add("visuallyhidden");
}

console.log("mygallery", myGallery);
