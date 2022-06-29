const images = document.querySelectorAll('[data-src]');
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
);

images.forEach(image => {
    io.observe(image);
})


// const images = document.querySelectorAll('[data-src]');

// const imgoptions = {
//     threshold: 0.5,
//     rootMargin: "0px 0px 200px 0px"
// };

// const loadImages = (image) =>{
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src');};
// };


// if('intersectionObserver' in window){
//     const imgObserver = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//             if(item.isIntersecting) {
//                 loadImages(item.target);
//                 observer.unobserve(item.target);
//             }
//             })
//     }, 
//     imgoptions);
 
//     images.forEach((img) => {
//         imgObserver.observe(img);
//     });
// }else{
//     images.forEach((img) =>{
//         loadImages(img);
//     });

// }
// "