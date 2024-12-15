function renderBasket() {
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
      subtotalDiv.innerHTML = ``;   //funktioniert nicht, warum?
      totalRef.innerHTML = ``;
      deliveryCostsDiv.innerHTML = ``;

      basket.innerHTML = `
        <div class="message_basket_empty">
          <span class="material-symbols-outlined">shopping_basket</span>
          <p class="message_basket_empty"><i>Ihr Warenkorb ist leer. <br> Fügen Sie Ihre Bestellung hinzu.</i></p>
        </div>
      `
      ;
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
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
  }

function showAmountItemsBasket(){
    let basketAmountArticlesRef = document.getElementById('basket_amount_articles');
    let basketAmountArticlesSmallMobile = document.getElementById('basket_amount_articles_mobile_small');
    let totalAmount = 0;

    for(let i = 0; i < myBasket.length; i++){
        totalAmount += myBasket[i].amount;
    }

    if (totalAmount === 0){
        basketAmountArticlesRef.innerHTML = `<p>Warenkorb (0)</p>`
        basketAmountArticlesSmallMobile.innerHTML = `<p>(0)</p>`
    } else {
        basketAmountArticlesRef.innerHTML = `<p>Warenkorb (${totalAmount})</p>`
        basketAmountArticlesSmallMobile.innerHTML = `<p>(${totalAmount})</p>`
    }
  }

function pushStartersToBasket(indexStarter) {
    let dishBasket = myStarters[indexStarter];
    let existingDishBasket = myBasket.find(basketDish => basketDish.name === dishBasket.name);
    //array.find(function(element, index(optional), array(optional)) { Bedingung })

    if (existingDishBasket) {
        existingDishBasket.amount++;
    } else {
        myBasket.push({
            name: dishBasket.name,
            price: dishBasket.price,
            amount: 1,
        });
    }
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}

function pushMainDishesTobasket(indexMain) {
    let dishBasket = myMainDishes[indexMain];
    let existingDishBasket = myBasket.find(basketDish => basketDish.name === dishBasket.name);

    if (existingDishBasket) {
        existingDishBasket.amount++;
    } else {
        myBasket.push({
            name: dishBasket.name,
            price: dishBasket.price,
            amount: 1,
        });
    }
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}

function pushDessertsTobasket(indexDessert) {
    let dishBasket = myDesserts[indexDessert];
    let existingDishBasket = myBasket.find(basketDish => basketDish.name === dishBasket.name);

    if (existingDishBasket) {
        existingDishBasket.amount++;
    } else {
        myBasket.push({
            name: dishBasket.name,
            price: dishBasket.price,
            amount: 1,
        });
    }
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}

function pushDrinkToBasket(indexDrink) {
    let dishBasket = myDrinks[indexDrink];
    let existingDishBasket = myBasket.find(basketDish => basketDish.name === dishBasket.name);

    if (existingDishBasket) {
        existingDishBasket.amount++;
    } else {
        myBasket.push({
            name: dishBasket.name,
            price: dishBasket.price,
            amount: 1,
        });
    }
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}

function pushSpecialToBasket(indexSpecial) {
    let dishBasket = mySpecials[indexSpecial];
    let existingDishBasket = myBasket.find(basketDish => basketDish.name === dishBasket.name);

    if (existingDishBasket) {
        existingDishBasket.amount++;
    } else {
        myBasket.push({
            name: dishBasket.name,
            price: dishBasket.price,
            amount: 1,
        });
    }
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}

function deleteFromBasket(indexBasket) {
    myBasket.splice(indexBasket, 1)
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
}

function adjustAmountItembasket(indexBasket, change) {
    let item = myBasket[indexBasket];
    item.amount += change;

    if (item.amount <= 0) { // Wenn die Anzahl auf 0 fällt, Item entfernen
        myBasket.splice(indexBasket, 1);
    }
    renderBasket();
    renderOrdersInBasketOverlay();
    showAmountItemsBasket();
    saveStartersInLocalStorage();
    saveMainDishesInLocalStorage();
    saveDessertsInLocalStorage();
    saveDrinksInLocalStorage();
    saveSpecialsInLocalStorage();
    saveBasketInLocalStorage();
}