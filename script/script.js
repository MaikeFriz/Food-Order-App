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
    renderHeartStatus();
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

function renderHeartStatus() {
    let heartImgRef = document.getElementById(`like_heart`);
    if (myRestaurant[0].liked === true) {
        heartImgRef.src = "./assets/imgs/like_heart_full.png";
    } else {
        heartImgRef.src = "./assets/imgs/like_heart_empty.png"
    }
}

function changeHeartStatus() {
    myRestaurant[0].liked = !myRestaurant[0].liked; 
    saveRestaurantInLocalStorage(); 
    renderHeartStatus(); 
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

function renderInfoOverlayMains(indexMain) {
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoMainDishes(indexMain);
}

function renderInfoOverlayDesserts(indexDessert) {
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoDesserts(indexDessert);
}

function renderInfoOverlayDrinks(indexDrink) {
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoDrinks(indexDrink);
}

function renderInfoOverlaySpecials(indexSpecial) {
    let overlayInfo = document.getElementById('overlay_info');
    overlayInfo.classList.remove('d_none_overlay_info');
    overlayInfo.innerHTML = templateProductInfoSpecials(indexSpecial);
}

function closeInfoOverlay() {
    let overlayInfoStarter = document.getElementById('overlay_info');
    overlayInfoStarter.classList.add('d_none_overlay_info');
}

function eventBubblingInfo(event) {
    event.stopPropagation();
}



