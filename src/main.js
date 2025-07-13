import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const myForm = document.querySelector(".form");

const searchImage = document.querySelector('input[name="search-text"]');

myForm.addEventListener("submit", onSubmit);
async function onSubmit(event) {
  event.preventDefault();
  const myQuery = searchImage.value.trim();
  if (myQuery === "") {
    myForm.reset();
    iziToast.error({
      title: "Error",
      message: "Search field cannot be empty!",
      position: "topRight",
    });
    return;
  }
  clearGallery();
  showLoader();

  try {
    const myData = await getImagesByQuery(myQuery);

    if (myData.hits.length === 0) {
      iziToast.info({
        message:
          "❌ Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        icon: false,
        close: false,
        backgroundColor: "#ef4040",
        maxWidth: "432px",
        minHeight: "88px",
        html: true,
      });
    } else {
      createGallery(myData.hits);
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message:
        error.message ||
        "An error occurred while fetching images. Please try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
    myForm.reset();
  }
}
