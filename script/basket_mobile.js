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
        <div class="order_button_div">
            <a href="./successfull_order.html">
                <p class="order_button">Jetzt bestellen</p>
            </a>
        </div>
        <div class="div_close_button_overlay_basket">
            <img onclick="closeBasket()" class="close_button_overlay_basket" src="./assets/imgs/close_button_black.png">
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
    let basket = document.getElementById('display_content_basket');
    let subtotalDiv = document.getElementById('subtotal');
    let deliveryCostsDiv = document.getElementById('delivery_costs');
    let slider = document.getElementById('swich_input');
    let totalRef = document.getElementById('total');
  
    let subtotal = 0;
    let deliveryCosts = 0;
    let total = 0;
  
    basket.innerHTML = '';
  
    if (myBasket.length === 0) {
      subtotalDiv.innerHTML = '<p>0.00 €</p>';
      basket.innerHTML = `
        <div class="message_basket_empty">
          <span class="material-symbols-outlined">shopping_basket</span>
          <p class="message_basket_empty"><i>Ihr Warenkorb ist leer. <br> Fügen Sie Ihre Bestellung hinzu.</i></p>
        </div>
      `;
    } else {
      for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
        let dish = myBasket[indexBasket];
        let totalPrice = dish.price * dish.amount;
        subtotal += totalPrice;
        subtotalDiv.innerHTML = `<p>${subtotal.toFixed(2)} €</p>`;
        basket.innerHTML += templateDisplayBasket(dish, indexBasket, totalPrice);
      }
  
      if (slider.checked) {
        deliveryCosts = 5.99;
      }
  
      total = subtotal + deliveryCosts;
      totalRef.innerHTML = `<p><strong>${total.toFixed(2)}€</strong></p>`;
  
      deliveryCostsDiv.innerHTML = `<p>${deliveryCosts.toFixed(2)} €</p>`;
    }
}