let mainContainer = document.querySelector(".container");

data.forEach((val) => {

    let coloredStars = parseInt(Math.round(val.rating.rate));
    let nonColoredStars = 5 - coloredStars;

    let allStars = document.createElement('div');
    allStars.setAttribute('class', 'all_Stars');
    
    for(let i=0; i<coloredStars; i++){
        allStars.innerHTML += '<span class = "star filled_star">&#9733</span>';
    }

    for(let i=0; i<nonColoredStars; i++){
        allStars.innerHTML += '<span class = "star nonFilledStar">&#9734</span>';
    }

    mainContainer.innerHTML += 

   `<div class = "card">
        <div class = "image">
            <img src = "${val.image}" alt = "prodimg"/>
        </div>
        <span class = "title">${val.title}</span><br/>
        <span class = "category">${val.category}</span><br/>
        <span class = "all_stars">${allStars.innerHTML}</span><br/>
        <span class = "rating">Total Reviews: ${val.rating.count}</span>
        <span class = "price">Price: $${val.price}</span>
        <button class = "btn">Add to Cart</button>
        <button class = "btn">Buy Now</button>
        
    </div>`;

});

let allCards = document.querySelectorAll(".card");
// console.log(allCards);
let dropdown = document.getElementById("dropdown");
let allCategories = document.querySelectorAll(".category");
let itemCount = document.getElementById('itemCount');
itemCount.innerText = "Item Count: " + allCards.length;
let count;
dropdown.addEventListener('change', function(e){
    count = 0;
    if(e.target.value === 'All'){
        for(let i=0;i<allCards.length; i++){
            allCards[i].style.display = 'block';
        }
        itemCount.innerText = "Item Count: " + allCards.length;        
    }else{
        for(let i=0; i<allCards.length; i++){
            if(e.target.value === allCategories[i].innerText){
                allCards[i].style.display = 'block';
                itemCount.innerText = "Item Count: " + ++count;
            }else{
                allCards[i].style.display = 'none';
            }
        }
    }
    
    
})