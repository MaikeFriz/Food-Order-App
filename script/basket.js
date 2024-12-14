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
      subtotalDiv.innerHTML = ``;
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
    renderOrdersInBasketOverlay()
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
    renderOrdersInBasketOverlay()
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
    renderOrdersInBasketOverlay()
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
    renderOrdersInBasketOverlay()
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
    renderOrdersInBasketOverlay()
}

function deleteFromBasket(indexBasket) {
    myBasket.splice(indexBasket, 1)
    renderBasket();
    renderOrdersInBasketOverlay()
}

function adjustAmountItembasket(indexBasket, change) {
    let item = myBasket[indexBasket];
    item.amount += change;

    if (item.amount <= 0) { // Wenn die Anzahl auf 0 fällt, Item entfernen
        myBasket.splice(indexBasket, 1);
    }
    renderBasket();
    renderOrdersInBasketOverlay();
}