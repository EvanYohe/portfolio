// Get child elements of carouselInner and set it to js array
// Add event listener to carousel transition
// On event, populate roadmap div based on id of current slide


const carouselInner = document.getElementsByClassName('carousel-item');
const carouselItems = Array.from(carouselInner);

const myCarousel = document.getElementById('carouselExampleIndicators');
myCarousel.addEventListener('slide.bs.carousel', () => {
    
    const mapContainer = document.getElementById('mapTarget').children;
    const mapChildren = Array.from(mapContainer);
    

    let index = 0;
    carouselItems.forEach(item => {
        let roadmapId = item.id + 'Map';

        if(mapChildren[index].id == roadmapId) {
            
            mapChildren[index].style.display = 'block';
 
        }
    }, index++);
});