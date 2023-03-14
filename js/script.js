const imagesArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg",];

const itemsContainer = document.querySelector(".slider-items");
console.log(itemsContainer);

for (let i = 0; i < imagesArray.lenght; i++) {
    const currentImage = imagesArray[i];
    
    const sliderItem = `
    <div class="item">
                    <img src="${currentImage}" alt="">
                </div>
    `;

    itemsContainer.innerHTML += sliderItem;
}

// Stato di partenza: 
let itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);

// imposto il primo slide visibile
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");


// I bottoni
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Nascondo il primo bottone
prevBtn.classList.add("hidden");

// Click sul bottone next
nextBtn.addEventListener("click", function() {

    prevBtn.classList.remove("hidden");

    if (activeItemIndex < (itemsArray.lenght - 1)) {

        // rimuovere active
        itemsArray[activeItemIndex].classList.remove("active");

        //incremento
        activeItemIndex++;

        // aggiungo active
        itemsArray[activeItemIndex].classList.add("active");

        // Se arrivato all'ultimo slide
        // Nascondo il bottone
        if (activeItemIndex === itemsArray.lenght - 1) {
            nextBtn.classList.add("hidden");
        }
    }
});

// Click sul bottone prev
prevBtn.addEventListener("click", function() {

    nextBtn.classList.remove("hidden");

    // rimuovere active dallo slide precedente
    itemsArray[activeItemIndex].classList.remove("active");

    // decrementare activeIndex
    activeItemIndex--;

    // aggiungere active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
});