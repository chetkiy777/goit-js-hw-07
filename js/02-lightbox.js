import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery')


    const addGallery = (imgArray) => {
    return imgArray.map(({ preview, description, original }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img src=${preview} title=${description}  alt=${description}  data-source=${original} class="gallery__image">
            </a>
        </li>`;
    }).join('')
    }

    let cardSet = addGallery(galleryItems)
    galleryList.insertAdjacentHTML('afterbegin',cardSet )
    
var lightbox = new SimpleLightbox('.gallery a', {
    
    overlay: true,
    captionDelay: '250ms'
    /* options */
});


