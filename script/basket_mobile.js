function openBasket(){
    let overlayDiv = document.getElementById('overlay_div');
    overlayDiv.classList.remove('d_none_overlay');
    overlayDiv.innerHTML = templateBasketOverlay();
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
        <div id="display_content_basket" class="display_content_basket"></div>
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