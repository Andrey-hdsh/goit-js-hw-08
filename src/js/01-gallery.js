import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';

const galleryContainerEl = document.querySelector('.gallery');

renderGallery(galleryItems);

function renderGallery(array) {
    const galleryMarkup = array.map(items =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${items.original}">
    <img
      class="gallery__image"
      src="${items.preview}"
      alt="${items.description}"/>
    </a>
        </li>`).join('');
    galleryContainerEl.insertAdjacentHTML('beforeend' , galleryMarkup)
};

 const lightbox = new SimpleLightbox('.gallery a', {
        
        captionsData: "alt",
        captionDelay: 250,
        animationSpeed: 300
    });

