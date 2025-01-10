const galleryImages = document.querySelectorAll('#gallery-container img') //all img in gallery
const images = Array.from(galleryImages)
const lightbox = document.getElementById('lightbox') //lightbox 
const lightboxImg = document.getElementById('lightbox-img') //img highlighted


let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightbox.classList.add("visible");
        lightboxImg.src = image.src
    })
})

lightbox.addEventListener('click', (e) => {
    if(e.target == lightbox) lightbox.classList.remove("visible")
})

function nextImg(){
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
    lightboxImg.src = images[currentIndex].src;
}

function lastImg(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    console.log(currentIndex);
    lightboxImg.src = images[currentIndex].src;
}

document.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowLeft'){
        lastImg()
    }
    if(e.code == 'ArrowRight'){
        nextImg()
    }
})

