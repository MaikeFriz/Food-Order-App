function openBasket(){
    let overlayDiv = document.getElementById('overlay_div');
    overlayDiv.classList.remove('d_none_overlay');
    overlayDiv.innerHTML = templateBasketOverlay();
    renderOrdersInBasketOverlay();
}

function templateBasketOverlay() {
    return `
<div onclick=" bubblingPrevention(event)" class="background_display_basket_overlay">
    <div class="basket">
        <div class="title_section_basket">
            <h2 class="title_basket">Warenkorb</h2>
            <div onclick="closeBasket()" class="close_button_overlay_div">
                <img class="close_button_overlay" src="./assets/imgs/close_button.png">
            </div>
        </div>
        <div id="display_content_basket_overlay" class="display_content_basket_overlay"></div>
        <div class="basket_total_cost_calculation">
            <p>Zwischensumme:</p>
            <p>Lieferkosten:</p>
            <p><strong>Gesamt:</strong></p>
        </div>
        <div class="order_button_div">
            <p class="order_button">Jetzt bestellen</p>
        </div>
    </div>
</div>
    `;
}

function closeBasket(){
    let overlayDiv = document.getElementById('overlay_div');
    overlayDiv.classList.add('d_none_overlay');
}

function bubblingPrevention(event){
    event.stopPropagation();
}

function renderOrdersInBasketOverlay(){
    let displayContentBasket = document.getElementById('display_content_basket_overlay');
    if (!displayContentBasket) return; // Element existiert nicht, also Funktion beenden
    if (myBasket.length === 0) {
        displayContentBasket.innerHTML = `<p class="message_basket_empty"><i>Ihr Warenkorb ist leer. Fugen Sie ein Gericht hinzu.</i></p>`
    } else {
        displayContentBasket.innerHTML = "";
        for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
            displayContentBasket.innerHTML += templateDisplayBasket(myBasket[indexBasket], indexBasket);
        }
    }
}