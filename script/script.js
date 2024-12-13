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
        <p>Vorspeisen</p>
        <p>Hauptgerichte</p>
        <p>Desserts</p>
        <p>Getränke</p>
        <p>Specials</p>
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



