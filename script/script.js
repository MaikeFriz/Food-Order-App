function init(){
    renderStarter();
    renderMainDishes();
    renderDesserts();
    renderBasket();
}

function toggleStarterDiv(){
    let displayStarters = document.getElementById('display_starters');
    displayStarters.classList.toggle('d_none');
}

function togglemainDishesDiv(){
    let displayMainDishes = document.getElementById('display_main_dishes');
    displayMainDishes.classList.toggle('d_none');
}

function toggleDessertDiv(){
    let displayDesserts = document.getElementById('display_desserts');
    displayDesserts.classList.toggle('d_none');
}

function renderStarter(){
    let displayStarters = document.getElementById('display_starters');
    displayStarters.innerHTML = "";
    for(let indexStarter = 0; indexStarter < myStarters.length; indexStarter++){
        displayStarters.innerHTML += templateDisplayStarters(indexStarter);
    }
} 

function templateDisplayStarters(indexStarter){
    let starter = myStarters[indexStarter];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${starter.name}</h2>
        <p class="price_dish">${starter.price} €</p>
        <p>${starter.description}</p>
    </div>
    <div class="div_add_symbol">
        <img onclick="pushStartersToBasket(${indexStarter})" class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>
    <img class="displayed_images_dishes" src="${starter.image}">
</div>
    `
}

function renderMainDishes(){
    let displayMainDishes = document.getElementById('display_main_dishes');
    displayMainDishes.innerHTML = "";
    for(let indexMain = 0; indexMain < myMainDishes.length; indexMain++){
        displayMainDishes.innerHTML += templateDisplayMainDishes(indexMain);
    }
} 

function templateDisplayMainDishes(indexMain){
    let mainDishes = myMainDishes[indexMain];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${mainDishes.name}</h2>
        <p class="price_dish">${mainDishes.price} €</p>
        <p>${mainDishes.description}</p>
    </div>
    <div class="div_add_symbol">
        <img class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>
    <img class="displayed_images_dishes" src="${mainDishes.image}">
</div>
    `
}

function renderDesserts(){
    let displayDesserts = document.getElementById('display_desserts');
    displayDesserts.innerHTML = "";
    for(let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++){
        displayDesserts.innerHTML += templateDisplayDesserts(indexDessert);
    }
} 

function templateDisplayDesserts(indexDessert){
    let dessert = myDesserts[indexDessert];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${dessert.name}</h2>
        <p class="price_dish">${dessert.price} €</p>
        <p>${dessert.description}</p>
    </div>
    <div class="div_add_symbol">
        <img class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>    
    <img class="displayed_images_dishes" src="${dessert.image}">
</div>
    `
}

function renderBasket(){
    let basket = document.getElementById('display_content_basket');
    basket.innerHTML = "";
    for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++){
        basket.innerHTML += templateDisplayBasket(myBasket[indexBasket].starter);
    }
}

function templateDisplayBasket(myBasket[indexBasket].starter){
    return `
    <p>${myBasket[indexBasket].name}</p>
    <p>${myBasket[indexBasket].price} €</p>
    `
}

function pushStartersToBasket(indexStarter){
    myBasket.push({starter:myStarters[indexStarter]});
    myStarters.splice(indexStarter,1);
    renderBasket();
}


