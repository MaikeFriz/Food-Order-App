function init() {
    getStartersFromLocalStorage();
    getMainDishesFromLocalStorage();
    getDessertsFromLocalStorage();
    getDrinksFromLocalStorage();
    getSpecialsFromLocalStorage()
    getBasketFromLocalStorage();
    getRestaurantFromLocalStorage();

    renderStarter();
    renderMainDishes();
    renderDesserts();
    renderBasket();
    renderDrinks();
    renderSpecials();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
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
    saveRestaurantInLocalStorage();
}

function renderStarter() {
    let displayStarters = document.getElementById('display_starters');
    displayStarters.innerHTML = "";
    for (let indexStarter = 0; indexStarter < myStarters.length; indexStarter++) {
        displayStarters.innerHTML += templateDisplayStarters(indexStarter);
    }
}

function renderMainDishes() {
    let displayMainDishes = document.getElementById('display_main_dishes');
    displayMainDishes.innerHTML = "";
    for (let indexMain = 0; indexMain < myMainDishes.length; indexMain++) {
        displayMainDishes.innerHTML += templateDisplayMainDishes(indexMain);
    }
}

function renderDesserts() {
    let displayDesserts = document.getElementById('display_desserts');
    displayDesserts.innerHTML = "";
    for (let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++) {
        displayDesserts.innerHTML += templateDisplayDesserts(indexDessert);
    }
}

function renderDrinks() {
    let displayDrinks = document.getElementById('display_drinks');
    displayDrinks.innerHTML = "";
    for (let indexDrink = 0; indexDrink < myDrinks.length; indexDrink++) {
        displayDrinks.innerHTML += templateDisplayDrinks(indexDrink);
    }
}

function renderSpecials() {
    let displaySpecials = document.getElementById('display_specials');
    displaySpecials.innerHTML = "";
    for (let indexSpecial = 0; indexSpecial < mySpecials.length; indexSpecial++) {
        displaySpecials.innerHTML += templateDisplaySpecials(indexSpecial);
    }
}

function renderInfoOverlay(indexStarter) {
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoStarter(indexStarter);
}

function templateProductInfoStarter(indexStarter) {
    return `
    <div onclick="eventBubblingInfo(event)" id="inner_overlay_info_starter" class="inner_overlay_info_starter">
        <div class="title-section_info">
            <h2>Produktinfo</h2>
            <img onclick="closeInfoOverlay()" class="close_button_info" src="./assets/imgs/close_button_black.png">
        </div>
        <div class="info_info_overlay">
            <h3>${myStarters[indexStarter].name}</h3>
            <p>${myStarters[indexStarter].info}</p>
            <h4>Allergens</h4>
            <ul>
                ${myStarters[indexStarter].alergens.map(alergen => `<li>${alergen}</li>`).join('')}
            </ul>
                <h4>Additives</h4>
            <ul>
                ${myStarters[indexStarter].Additives.map(additive => `<li>${additive}</li>`).join('')}
            </ul>
        </div>
    </div>
    `
}

function renderInfoOverlayMains(indexMain){
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoMainDishes(indexMain);
}

function templateProductInfoMainDishes(indexMain) {
    return `
    <div onclick="eventBubblingInfo(event)" id="inner_overlay_info_main" class="inner_overlay_info_main">
        <div class="title-section_info">
            <h2>Produktinfo</h2>
            <img onclick="closeInfoOverlay()" class="close_button_info" src="./assets/imgs/close_button_black.png">
        </div>
        <div class="info_info_overlay">
            <h3>${myMainDishes[indexMain].name}</h3>
            <p>${myMainDishes[indexMain].info}</p>
            <h4>Allergens</h4>
            <ul>
                ${myMainDishes[indexMain].alergens.map(alergen => `<li>${alergen}</li>`).join('')}
            </ul>
                <h4>Additives</h4>
            <ul>
                ${myMainDishes[indexMain].Additives.map(additive => `<li>${additive}</li>`).join('')}
            </ul>
        </div>
    </div>
    `
}

function renderInfoOverlayDesserts(indexDessert){
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoDesserts(indexDessert);
}

function templateProductInfoDesserts(indexDessert) {
    return `
    <div onclick="eventBubblingInfo(event)" id="inner_overlay_info_dessert" class="inner_overlay_info_dessert">
        <div class="title-section_info">
            <h2>Produktinfo</h2>
            <img onclick="closeInfoOverlay()" class="close_button_info" src="./assets/imgs/close_button_black.png">
        </div>
        <div class="info_info_overlay">
            <h3>${myDesserts[indexDessert].name}</h3>
            <p>${myDesserts[indexDessert].info}</p>
            <h4>Allergens</h4>
            <ul>
                ${myDesserts[indexDessert].alergens.map(alergen => `<li>${alergen}</li>`).join('')}
            </ul>
                <h4>Additives</h4>
            <ul>
                ${myDesserts[indexDessert].Additives.map(additive => `<li>${additive}</li>`).join('')}
            </ul>
        </div>
    </div>
    `
}

function renderInfoOverlayDrinks(indexDrink){
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoDrinks(indexDrink);
}

function templateProductInfoDrinks(indexDrink) {
    return `
    <div onclick="eventBubblingInfo(event)" id="inner_overlay_info_drinks" class="inner_overlay_info_drinks">
        <div class="title-section_info">
            <h2>Produktinfo</h2>
            <img onclick="closeInfoOverlay()" class="close_button_info" src="./assets/imgs/close_button_black.png">
        </div>
        <div class="info_info_overlay">
            <h3>${myDrinks[indexDrink].name}</h3>
            <p>${myDrinks[indexDrink].info}</p>
            <h4>Allergens</h4>
            <ul>
                ${myDrinks[indexDrink].alergens.map(alergen => `<li>${alergen}</li>`).join('')}
            </ul>
                <h4>Additives</h4>
            <ul>
                ${myDrinks[indexDrink].Additives.map(additive => `<li>${additive}</li>`).join('')}
            </ul>
        </div>
    </div>
    `
}

function renderInfoOverlaySpecials(indexSpecial){
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoSpecials(indexSpecial);
}

function templateProductInfoSpecials(indexSpecial) {
    return `
    <div onclick="eventBubblingInfo(event)" id="inner_overlay_info_specials" class="inner_overlay_info_specials">
        <div class="title-section_info">
            <h2>Produktinfo</h2>
            <img onclick="closeInfoOverlay()" class="close_button_info" src="./assets/imgs/close_button_black.png">
        </div>
        <div class="info_info_overlay">
            <h3>${mySpecials[indexSpecial].name}</h3>
            <p>${mySpecials[indexSpecial].info}</p>
            <h4>Allergens</h4>
            <ul>
                ${mySpecials[indexSpecial].alergens.map(alergen => `<li>${alergen}</li>`).join('')}
            </ul>
                <h4>Additives</h4>
            <ul>
                ${mySpecials[indexSpecial].Additives.map(additive => `<li>${additive}</li>`).join('')}
            </ul>
        </div>
    </div>
    `
}

function closeInfoOverlay() {
    let overlayInfoStarter = document.getElementById('overlay_info');
    overlayInfoStarter.classList.add('d_none_overlay_info');
}

function eventBubblingInfo(event) {
    event.stopPropagation();
}



