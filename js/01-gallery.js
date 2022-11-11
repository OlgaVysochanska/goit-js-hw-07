import { galleryItems } from './gallery-items.js';

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


const instance = basicLightbox.create(`<img class="modal-image" src="" width="800" height="600">`,
  {
  closable: true,
	className: '',
  onShow: (instance) => {
    window.addEventListener("keydown", onEscapePress);
  },
  onClose: (instance) => {
    window.removeEventListener("keydown", onEscapePress);
  }
});


function handleGalleryClick(e) {
  if (e.target === e.currentTarget) 
    return;
  
  e.preventDefault();

  const originalImgSrc = e.target.dataset.source;
  viewOriginalImage(originalImgSrc);
}

function viewOriginalImage(src) {
  const modalImage = instance.element().querySelector(".modal-image");
  modalImage.src = src;
  instance.show();
}

function onEscapePress(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}

gallery.addEventListener("click", handleGalleryClick);