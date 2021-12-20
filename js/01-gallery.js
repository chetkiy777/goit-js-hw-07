import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery')

const addGallery = (imgArray) => {
    return imgArray.map(({ preview, description, original }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img src=${preview} alt=${description} data-source=${original} class="gallery__image">
            </a>
        </div>`;
    }).join('')
    }

let cardSet = addGallery(galleryItems)
galleryList.insertAdjacentHTML('beforeend', cardSet )


galleryList.addEventListener('click', (e) => {
    e.preventDefault()
    const original = e.target.getAttribute('data-source')
    
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
	<img src=${original} height="600" with="800">
`)

    instance.show()

    document.addEventListener('keydown', onEscClose )

    function onEscClose (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        instance.close()
    }};
})
