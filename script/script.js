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

function openMenuHeader(){
    let overlayMenu = document.getElementById('overlay_menu');
    overlayMenu.classList.remove('d_none_menu');
    overlayMenu.innerHTML = templateMenu();
}

function templateMenu(){
    return `
<div onclick="eventBubblingMenuOverlay(event)" class="inner_overlay_manu">
    <div>
        <img onclick="closeOverlayMenu()" class="close_button_overlay_menu" src="./assets/imgs/close_button_black.png">
    </div>
    <div class="menu-section_overlay">
        <p>Uber uns</p>
        <p>Location</p>
        <p>Vorspeisen</p>
        <p>Hauptgerichte</p>
        <p>Desserts</p>
    </div>
</div>
    `
}

function closeOverlayMenu(){
    let overlayMenu = document.getElementById('overlay_menu');
    overlayMenu.classList.add('d_none_menu');
}

function eventBubblingMenuOverlay(event){
    event.stopPropagation();
}

function openLocation(){
    let displayLocation = document.getElementById('display_location');
    displayLocation.classList.remove('d_none_location');
    displayLocation.innerHTML = displayLocationWondow();
}

function displayLocationWondow(){
    return `
    <div onclick="bubblingPreventionLocation(event)" class="inner_overlay_location">

</div>
    `
}

function closeLocation(){
    let displayLocation = document.getElementById('display_location');
    displayLocation.classList.add('d_none_location');
}

function bubblingPreventionLocation(event){
    event.stopPropagation();
}




