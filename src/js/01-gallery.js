import { galleryItems } from './gallery-items.js';
// Change code below this line


const addGallery = (imgArray) => {
    const galleryList = document.querySelector('.gallery__list')
    
    for (let i = 0; i < imgArray.length; i += 1) {
       
        let liElem = document.createElement('li')
        liElem.classList.add('gallery__item')
        liElem.innerHTML = `<img src="${imgArray[i].preview}">`
        let spanElem = document.createElement('span')
        spanElem.textContent = `${imgArray[i].description}`
        liElem.appendChild(spanElem)
        galleryList.appendChild(liElem)
        console.log(liElem)
    }
}

console.log(galleryItems);

addGallery(galleryItems)