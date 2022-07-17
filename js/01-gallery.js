import { galleryItems } from './gallery-items.js';
// Change code below this line
    const  gallery = document.querySelector(`.gallery`);
    gallery.addEventListener(`click`, onImgClick) 

    const markup = createImgMarkUp(galleryItems);
    gallery.insertAdjacentHTML(`beforeend`, markup)

  function createImgMarkUp(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src= "${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
        </div>
`;
    })
    .join("");
  }

  function onImgClick(evt){
    evt.preventDefault();
    if(!evt.target.classList.contains(`gallery__image`)){
        return;
    }
    const instance = basicLightbox.create(`
    <img src='${evt.target.dataset.source}'
    />`
    );
    instance.show();

    window.addEventListener("keydown", onEscKeyPress);

    function onEscKeyPress(evt){
        if(evt.code === `Escape`){
            instance.close()
        }
    }

  }
