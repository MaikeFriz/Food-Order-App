function renderStarter() {
    let displayStarters = document.getElementById('display_starters');
    displayStarters.innerHTML = "";
    for (let indexStarter = 0; indexStarter < myStarters.length; indexStarter++) {
        displayStarters.innerHTML += templateDisplayStarters(indexStarter);
    }
}

function templateDisplayStarters(indexStarter) {
    let starter = myStarters[indexStarter];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${starter.name}</h2>
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

function renderMainDishes() {
    let displayMainDishes = document.getElementById('display_main_dishes');
    displayMainDishes.innerHTML = "";
    for (let indexMain = 0; indexMain < myMainDishes.length; indexMain++) {
        displayMainDishes.innerHTML += templateDisplayMainDishes(indexMain);
    }
}

function templateDisplayMainDishes(indexMain) {
    let mainDishes = myMainDishes[indexMain];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${mainDishes.name}</h2>
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

function renderDesserts() {
    let displayDesserts = document.getElementById('display_desserts');
    displayDesserts.innerHTML = "";
    for (let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++) {
        displayDesserts.innerHTML += templateDisplayDesserts(indexDessert);
    }
}

function templateDisplayDesserts(indexDessert) {
    let dessert = myDesserts[indexDessert];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${dessert.name}</h2>
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

function renderDrinks() {
    let displayDrinks = document.getElementById('display_drinks');
    displayDrinks.innerHTML = "";
    for (let indexDrink = 0; indexDrink < myDrinks.length; indexDrink++) {
        displayDrinks.innerHTML += templateDisplayDrinks(indexDrink);
    }
}

function templateDisplayDrinks(indexDrink) {
    let drink = myDrinks[indexDrink];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${drink.name}</h2>
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

function renderSpecials() {
    let displaySpecials = document.getElementById('display_specials');
    displaySpecials.innerHTML = "";
    for (let indexSpecial = 0; indexSpecial < mySpecials.length; indexSpecial++) {
        displaySpecials.innerHTML += templateDisplaySpecials(indexSpecial);
    }
}

function templateDisplaySpecials(indexSpecial) {
    let special = mySpecials[indexSpecial];
    return `
<div class="organise_single_dives_dishes">
    <div class="single_divs_dishes">
        <h2 class="title_dish">${special.name}</h2>
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