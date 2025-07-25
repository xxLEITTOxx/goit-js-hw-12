import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let page = 1;
const imagesPerPage = 15;
let myTotalHits = 0;
hideLoadMoreButton(); //           hide button during page loading

const myForm = document.querySelector(".form");
const searchImage = document.querySelector('input[name="search-text"]');
const myLoadMoreButton = document.querySelector(".buttonLoadMore");
let myQuery;

myForm.reset();

myForm.addEventListener("submit", onSubmit);
async function onSubmit(event) {
  event.preventDefault();
  myQuery = searchImage.value.trim();
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
    page = 1;
    myTotalHits = 0;

    let myData = await getImagesByQuery(myQuery, page);

    myTotalHits = myData.total;

    // if (myTotalHits >= 15) {
    //   showLoadMoreButton();
    // }

    if (myTotalHits === 0) {
      hideLoadMoreButton();
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
      if (page * imagesPerPage < myTotalHits) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
    }
    myForm.reset();
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
  }
}

myLoadMoreButton.addEventListener("click", onCLickLoadMore);

async function onCLickLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const newImages = await getImagesByQuery(myQuery, page);

    createGallery(newImages.hits);

    if (page * imagesPerPage <= myTotalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
        backgroundColor: "rgba(255, 106, 0, 0.95)",
        maxWidth: "432px",
        minHeight: "88px",
        padding: "20px",
        color: "#ffffff",
        html: true,
      });
    }
    scrollToNextGroup();
  } catch (error) {
    iziToast.error({
      title: "Error",
      message:
        error.message ||
        "An error occurred while loading more images. Please try again later.",
      position: "topRight",
      backgroundColor: "rgba(239, 64, 64, 0.8)",
      maxWidth: "432px",
      minHeight: "88px",
      padding: "20px",
    });
  } finally {
    hideLoader();
    myLoadMoreButton.blur();
  }
}

function scrollToNextGroup() {
  const galleryItem = document.querySelector(".gallery-item");
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: "smooth",
    });
  }
}
