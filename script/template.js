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

function templateAboutUs() {
    return `
<div onclick="bubblingPreventionAboutUs(event)" class="inner_overlay_about_us">
<div class="close_button_overlay_about_us_div">
    <img onclick="closeAboutUs()" class="close_button_about_us" src="./assets/imgs/close_button_black.png">
    </div>
    <h2 class="h2_uber_uns">Über uns</h2>
    <div class="mobile_overflow_scroll">
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
    </div>
    <img class="family_img" src="./assets/imgs/restaurant.png">
</div>

    `
}

function templateDisplayStarters(indexStarter) {
    let starter = myStarters[indexStarter];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <div class="title_productinfo">
            <h2 class="title_dish">${starter.name}</h2> 
            <p onclick="renderInfoOverlay(${indexStarter})" class="produktinfo">Produktinfo</p>
        </div>
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

function templateDisplayMainDishes(indexMain) {
    let mainDishes = myMainDishes[indexMain];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <div class="title_productinfo">
            <h2 class="title_dish">${mainDishes.name}</h2> 
            <p onclick="renderInfoOverlayMains(${indexMain})" class="produktinfo">Produktinfo</p>
        </div>
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

function templateDisplayDesserts(indexDessert) {
    let dessert = myDesserts[indexDessert];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <div class="title_productinfo">
            <h2 class="title_dish">${dessert.name}</h2> 
            <p onclick="renderInfoOverlayDesserts(${indexDessert})" class="produktinfo">Produktinfo</p>
        </div>
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

function templateDisplayDrinks(indexDrink) {
    let drink = myDrinks[indexDrink];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <div class="title_productinfo">
            <h2 class="title_dish">${drink.name}</h2> 
            <p onclick="renderInfoOverlayDrinks(${indexDrink})" class="produktinfo">Produktinfo</p>
        </div>
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

function templateDisplaySpecials(indexSpecial) {
    let special = mySpecials[indexSpecial];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <div class="title_productinfo">
            <h2 class="title_dish">${special.name}</h2> 
            <p onclick="renderInfoOverlaySpecials(${indexSpecial})" class="produktinfo">Produktinfo</p>
        </div>
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

function templateDisplayBasket(dish, indexBasket, totalPrice) {
    return `
<h3 class="name_dish_basket">${dish.name}</h3>
<div class="basket_item_in_line">
    <div class="add_reduce_amount_dish_basket">
        <img onclick="adjustAmountItembasket(${indexBasket}, -1)" class="reduce_symbol_basket" src="./assets/imgs/reduce_symbol_basket.png">
        <p class="amount_number_basket">${dish.amount}</p>
        <img onclick="adjustAmountItembasket(${indexBasket}, +1)" class="add_symbol_basket" src="./assets/imgs/add_symbol_basket.png">
    </div>
  <p id="price_basket_item${indexBasket}" class="price_basket">${totalPrice.toFixed(2)} €</p>
    <p onclick="deleteFromBasket(${indexBasket})" class="delete_symbol_basket"><span class="material-symbols-outlined">delete</span></p>
</div>
    `
}

function templateBasketOverlay() {
    return `
<div onclick=" bubblingPrevention(event)" class="background_display_basket_overlay">
    <div class="basket">
        <div class="toggle_swich-div">
            <div class="toggle_swich">
                <label class="switch">
                    <input onchange="renderBasket()" id="swich_input" type="checkbox">
                    <span class="slider">
                        <!-- Links -->
                        <div id="slider-content left" class="slider-content left">
                            <i class="fas fa-store"></i>
                            <span class="text">
                                <span class="material-symbols-outlined">shopping_bag</span>
                                <div>
                                    <p class="bigger_font">Abholung</p>
                                    <p>20-30min</p>
                                </div>
                            </span>
                        </div>
                        <!-- Rechts -->
                        <div id="slider-content right" class="slider-content right">
                            <i class="fas fa-truck"></i>
                            <span class="text">
                                <span class="material-symbols-outlined">local_shipping</span>
                                <div>
                                    <p class="bigger_font">Lieferung</p>
                                    <p>30-45min</p>
                                </div>
                            </span>
                        </div>
                        <!-- Knob -->
                        <span class="knob"></span>
                    </span>
                </label>
            </div>
        </div>
        <h2 class="title_basket">Warenkorb</h2>
        <div id="display_content_basket" class="display_content_basket"></div>
        <div class="basket_total_cost_calculation">
            <div>
                <p>Zwischensumme:</p>
                <p>Lieferkosten:</p>
                <p><strong>Gesamt:</strong></p>
            </div>
            <div class="text_align_end">
                <p id="subtotal"></p>
                <p id="delivery_costs"></p>
                <p id="total"></p>
            </div>
        </div>
        <div onclick="sendOrder()" class="order_button_div">
            <p class="order_button">Jetzt bestellen</p>
        </div>
        <div class="div_close_button_overlay_basket">
            <img onclick="closeBasket()" class="close_button_overlay_basket" src="./assets/imgs/close_button_black.png">
        </div>
    </div>
</div>
    `;
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