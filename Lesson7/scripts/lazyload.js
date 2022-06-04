const images = document.querySelectorAll('img[data-src]');

const imgoptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
};

const loadImages = (image) =>{
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};


if('intersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
            });
    }, 
    imgOptions);
 
    images.forEach((img) => {
        imgObserver.observe(img);
    });
}else{
    images.forEach((img) =>{
        loadImages(img);
    });

}
