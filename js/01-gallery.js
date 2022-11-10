import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const newImg = ({ preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`
;
 
const makeGallery = galleryItems.map(newImg).join("");

gallery.insertAdjacentHTML("afterbegin", makeGallery);

const instance = basicLightbox.create(``);

instance.show();