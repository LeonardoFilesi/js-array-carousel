const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

const itemsContainer = document.querySelector(".slider-items");
console.log(itemsContainer);

for (let i = 0; i < imagesArray.lenght; i++) {
    const currentImage = imagesArray[i];
    
    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;

    itemsContainer.innerHTML += sliderItem;
}

// Partenza: 
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

// I bottoni:
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Nascondo il bottone "prev"
prevBtn.classList.add("hidden");

// Click sul bottone next
nextBtn.addEventListener("click", function() {

    prevBtn.classList.remove("hidden");
    
// Primo tentativo
    /* if (activeItemIndex < itemsArray.lenght - 1) {
        console.log('click');
        // rimuovere active
        itemsArray[activeItemIndex].classList.remove("active");
        //incremento
        
        // aggiungo active
        itemsArray[activeItemIndex].classList.add("active");
        // Nascondo il bottone all'ultima slide
        if (activeItemIndex === itemsArray.lenght - 1) {
            nextBtn.classList.add("hidden");
        }
    } */
     itemsArray[activeItemIndex].classList.remove("active");
    if(imagesArray === 4) {
        currentImage === 0;
    } else {
        activeItemIndex++; 
    } 
    itemsArray[activeItemIndex].classList.add("active");
});



// Click sul bottone prev
prevBtn.addEventListener("click", function () {
    nextBtn.classList.remove("hidden");
    if (activeItemIndex === 0) {
        prevBtn.classList.add("hidden");
    }
    itemsArray[activeItemIndex].classList.remove("active");

    if() {

    } else {
        activeItemIndex--;
    } 
    
    itemsArray[activeItemIndex].classList.add("active");
});