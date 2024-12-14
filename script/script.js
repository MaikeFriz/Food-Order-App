function init() {
    renderStarter();
    renderMainDishes();
    renderDesserts();
    renderBasket();
    renderDrinks();
    renderSpecials();
    renderOrdersInBasketOverlay();
}

function toggleStarterDiv() {
    let displayStarters = document.getElementById('display_starters');
    displayStarters.classList.toggle('d_none_main');
}

function togglemainDishesDiv() {
    let displayMainDishes = document.getElementById('display_main_dishes');
    displayMainDishes.classList.toggle('d_none_main');
}

function toggleDessertDiv() {
    let displayDesserts = document.getElementById('display_desserts');
    displayDesserts.classList.toggle('d_none_main');
}
function toggleDrinksDiv() {
    let displayDrinks = document.getElementById('display_drinks');
    displayDrinks.classList.toggle('d_none_main');
}

function toggleSpecialsDiv() {
    let displaySpecials = document.getElementById('display_specials');
    displaySpecials.classList.toggle('d_none_main');
}

function openMenuHeader() {
    let overlayMenu = document.getElementById('overlay_menu');
    overlayMenu.classList.remove('d_none_menu');
    overlayMenu.innerHTML = templateMenu();
}

function templateMenu() {
    return `
<div onclick="eventBubblingMenuOverlay(event)" class="inner_overlay_manu">
    <div class="menu-section_overlay">
        <p onclick="openAboutUs()" class="circled_menu_button"><span class="material-symbols-outlined">info</span>Über
            uns</p>
        <p onclick="openLocation()" class="circled_menu_button"><span
                class="material-symbols-outlined">location_on</span>Location</p>
        <a onclick="closeOverlayMenu()" href="#vorspeisen"><p>Vorspeisen</p></a>
        <a onclick="closeOverlayMenu()" href="#hauptgerichte"><p>Hauptgerichte</p></a>
        <a onclick="closeOverlayMenu()" href="#desserts"><p>Desserts</p></a>
        <a onclick="closeOverlayMenu()" href="#getranke"><p>Getränke</p></a>
        <a onclick="closeOverlayMenu()" href="#specials"><p>Specials</p></a>
    </div>
    <div>
        <img onclick="closeOverlayMenu()" class="close_button_overlay_menu" src="./assets/imgs/close_button_black.png">
    </div>
</div>
    `
}

function closeOverlayMenu() {
    let overlayMenu = document.getElementById('overlay_menu');
    overlayMenu.classList.add('d_none_menu');
}

function eventBubblingMenuOverlay(event) {
    event.stopPropagation();
}

function openLocation() {
    let displayLocation = document.getElementById('display_location');
    displayLocation.classList.remove('d_none_location');
    displayLocation.innerHTML = displayLocationWondow();
}

function displayLocationWondow() {
    return `
<div onclick="bubblingPreventionLocation(event)" class="inner_overlay_location">
    <iframe class="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2099.4609735822687!2d108.24636785398653!3d16.06159509308526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421782f7fa0ee3%3A0xeafb8ba272ee55ac!2sMy%20Khe%20Beach!5e0!3m2!1sde!2sus!4v1734015075845!5m2!1sde!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="address_overlay">
        <span class="material-symbols-outlined">location_on</span>
        <p>Giovannis Pizzeria, Strase 3 12345 Musterort</p>
    </div>
    <img onclick="closeLocation()" class="close_button_overlay_location" src="./assets/imgs/close_button_black.png">
</div>
    `
}

function closeLocation() {
    let displayLocation = document.getElementById('display_location');
    displayLocation.classList.add('d_none_location');
}

function bubblingPreventionLocation(event) {
    event.stopPropagation();
}

function openAboutUs() {
    let aboutUs = document.getElementById('display_about_us');
    aboutUs.classList.remove('d_none_about_us');
    aboutUs.innerHTML = templateAboutUs();
}

function templateAboutUs() {
    return `
<div onclick="bubblingPreventionAboutUs(event)" class="inner_overlay_about_us">
<div class="close_button_overlay_about_us_div">
    <img onclick="closeAboutUs()" class="close_button_about_us" src="./assets/imgs/close_button_black.png">
    </div>
    <h2 class="h2_uber_uns">Über uns</h2>
    <div class="padding_text">
        <p>Willkommen bei Giovanni's Pizzaria! Als <strong> Familienunternehmen in der dritten Generation
            </strong>stehen wir seit Jahrzehnten für authentische italienische Küche und herzliche Gastfreundschaft. Bei uns wird jede Pizza noch nach
            traditionellem Rezept und mit viel Liebe zum Detail zubereitet – genau so, wie es schon Nonno Giovanni vor vielen Jahren begonnen hat.</p>
    </div>
    <div class="padding_text">
        <p>
            Ob knusprige Pizzen aus dem Steinofen, hausgemachte Pasta oder feine Antipasti – bei Giovanni's Pizzaria
            bringen wir ein Stück Italien direkt auf Ihren Teller.
    </div>
    <div class="padding_text">
        <p>
            <strong> Wir freuen uns darauf, Sie bei uns willkommen zu heißen!</strong>
        </p>
    </div>
    <img class="family_img" src="./assets/imgs/restaurant.png">
</div>

    `
}

function closeAboutUs() {
    let aboutUs = document.getElementById('display_about_us');
    aboutUs.classList.add('d_none_about_us');
}

function bubblingPreventionAboutUs(event) {
    event.stopPropagation();
}

function changeHeartStatus() {
    let heartImgRef = document.getElementById(`like_heart`);
    myRestaurant[0].liked = !myRestaurant[0].liked;
    if (myRestaurant[0].liked === true) {
        heartImgRef.src = "./assets/imgs/like_heart_full.png";
    } else {
        heartImgRef.src = "./assets/imgs/like_heart_empty.png"
    }
}

function renderStarter() {
    let displayStarters = document.getElementById('display_starters');
    displayStarters.innerHTML = "";
    for (let indexStarter = 0; indexStarter < myStarters.length; indexStarter++) {
        displayStarters.innerHTML += templateDisplayStarters(indexStarter);
    }
}

function templateDisplayStarters(indexStarter) {
    let starter = myStarters[indexStarter];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${starter.name}</h2>
        <p class="price_dish">${starter.price} €</p>
        <p class="description_dish">${starter.description}</p>
    </div>
    <div class="div_add_symbol">
        <img onclick="pushStartersToBasket(${indexStarter})" class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>
    <img class="displayed_images_dishes" src="${starter.image}">
</div>
    `
}

function renderMainDishes() {
    let displayMainDishes = document.getElementById('display_main_dishes');
    displayMainDishes.innerHTML = "";
    for (let indexMain = 0; indexMain < myMainDishes.length; indexMain++) {
        displayMainDishes.innerHTML += templateDisplayMainDishes(indexMain);
    }
}

function templateDisplayMainDishes(indexMain) {
    let mainDishes = myMainDishes[indexMain];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${mainDishes.name}</h2>
        <p class="price_dish">${mainDishes.price} €</p>
        <p class="description_dish">${mainDishes.description}</p>
    </div>
    <div class="div_add_symbol">
        <img onclick="pushMainDishesTobasket(${indexMain})" class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>
    <img class="displayed_images_dishes" src="${mainDishes.image}">
</div>
    `
}

function renderDesserts() {
    let displayDesserts = document.getElementById('display_desserts');
    displayDesserts.innerHTML = "";
    for (let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++) {
        displayDesserts.innerHTML += templateDisplayDesserts(indexDessert);
    }
}

function templateDisplayDesserts(indexDessert) {
    let dessert = myDesserts[indexDessert];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${dessert.name}</h2>
        <p class="price_dish">${dessert.price} €</p>
        <p class="description_dish">${dessert.description}</p>
    </div>
    <div class="div_add_symbol">
        <img onclick ="pushDessertsTobasket(${indexDessert})" class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>    
    <img class="displayed_images_dishes" src="${dessert.image}">
</div>
    `
}

function renderDrinks() {
    let displayDrinks = document.getElementById('display_drinks');
    displayDrinks.innerHTML = "";
    for (let indexDrink = 0; indexDrink < myDrinks.length; indexDrink++) {
        displayDrinks.innerHTML += templateDisplayDrinks(indexDrink);
    }
}

function templateDisplayDrinks(indexDrink) {
    let drink = myDrinks[indexDrink];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${drink.name}</h2>
        <p class="price_dish">${drink.price} €</p>
        <p class="description_dish">${drink.description}</p>
    </div>
    <div class="div_add_symbol">
        <img onclick="pushDrinkToBasket(${indexDrink})" class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>    
    <img class="displayed_images_dishes" src="${drink.image}">
</div>
    `
}

function renderSpecials() {
    let displaySpecials = document.getElementById('display_specials');
    displaySpecials.innerHTML = "";
    for (let indexSpecial = 0; indexSpecial < mySpecials.length; indexSpecial++) {
        displaySpecials.innerHTML += templateDisplaySpecials(indexSpecial);
    }
}

function templateDisplaySpecials(indexSpecial) {
    let special = mySpecials[indexSpecial];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${special.name}</h2>
        <p class="price_dish">${special.price} €</p>
        <p class="description_dish">${special.description}</p>
    </div>
    <div class="div_add_symbol">
        <img onclick="pushSpecialToBasket(${indexSpecial})" class="img_add_symbol" src="./assets/imgs/add_symbol.png">
    </div>    
    <img class="displayed_images_dishes" src="${special.image}">
</div>
    `
}



