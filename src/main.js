import { searchImg } from "./js/pixabay-api";
import { imgCreated } from "./js/render-functions";
import { imgTemplate } from "./js/render-functions";
import { imagesGallery } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");



form.addEventListener("submit", event => {
    event.preventDefault();
    gallery.innerHTML = "";
    
    showLoader();

    const query = event.target.elements.query.value.trim();

    searchImg(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: `Sorry, there are no images matching your search query.Please try again!`,
                    messageColor: '#FAFAFB',
                    color: '#EF4040',
                    position: 'topRight'
                });
                return;
                
            }
            else {
                
                const markup = imgTemplate(data.hits);
                gallery.innerHTML = markup;
                showLoader();
                imagesGallery();
                
            }
        })
    
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
             hideLoader();
        })
   
});


function showLoader() {
    loader.style.display = "block";
};

function hideLoader() {
    loader.style.display = "none";
};