function openBasket(){
    let overlayDiv = document.getElementById('overlay_div');
    overlayDiv.classList.remove('d_none_overlay');
    overlayDiv.innerHTML = templateBasketOverlay();
    renderOrdersInBasketOverlay();
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
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}