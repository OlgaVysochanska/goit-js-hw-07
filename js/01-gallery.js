import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const newImg = ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  ;

  
  
const makeGallery = galleryItems.map(newImg).join("");

gallery.insertAdjacentHTML("afterbegin", makeGallery);


const instance = basicLightbox.create(`<img class="modal-image" src="" width="800" height="600">`);

const modalImage = instance.element().querySelector(".modal-image");

function handleGalleryClick(e) {
  if (e.target === e.currentTarget) 
    return;
  e.preventDefault();

  const originalImgSrc = e.target.dataset.source;

  viewOriginalImage(originalImgSrc);
}

function viewOriginalImage(src) {

  modalImage.src = src;
  instance.show();
  window.addEventListener("keydown", onEscapePress);
}

function onEscapePress(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}

gallery.addEventListener("click", handleGalleryClick);
modalImage.addEventListener("click", instance.close);