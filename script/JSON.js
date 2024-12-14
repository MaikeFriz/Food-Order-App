function saveStartersInLocalStorage(){
    localStorage.setItem("myStarters", JSON.stringify(myStarters));
}

function saveMainDishesInLocalStorage(){
    localStorage.setItem("myMainDishes", JSON.stringify(myMainDishes));
}

function saveDessertsInLocalStorage(){
    localStorage.setItem("myDesserts", JSON.stringify(myDesserts));
}

function saveDrinksInLocalStorage(){
    localStorage.setItem("myDrinks", JSON.stringify(myDrinks));
}

function saveSpecialsInLocalStorage(){
    localStorage.setItem("mySpecials", JSON.stringify(mySpecials));
}

function saveBasketInLocalStorage(){
    localStorage.setItem("myBasket", JSON.stringify(myBasket));
}

function saveRestaurantInLocalStorage(){
    localStorage.setItem("myRestaurant", JSON.stringify(myRestaurant));
}

function getStartersFromLocalStorage(){
    let storedStarters = localStorage.getItem("myStarters");
    if (storedStarters){
        myStarters = JSON.parse(storedStarters);
    }
}

function getMainDishesFromLocalStorage(){
    let storedMainDishes = localStorage.getItem("myMainDishes");
    if (storedMainDishes){
        myMainDishes = JSON.parse(storedMainDishes);
    }
}

function getDessertsFromLocalStorage(){
    let storedDesserts = localStorage.getItem("myDesserts");
    if (storedDesserts){
        myDesserts = JSON.parse(storedDesserts);
    }
}

function getDrinksFromLocalStorage(){
    let storedDrinks = localStorage.getItem("myDrinks");
    if (storedDrinks){
        myDrinks = JSON.parse(storedDrinks);
    }
}
function getSpecialsFromLocalStorage(){
    let storedSpecials = localStorage.getItem("mySpecials");
    if (storedSpecials){
        mySpecials = JSON.parse(storedSpecials);
    }
}

function getBasketFromLocalStorage(){
    let storedBasket = localStorage.getItem("myBasket");
    if (storedBasket){
        myBasket = JSON.parse(storedBasket);
    } else { 
        myBasket = [];
    }
}

function getRestaurantFromLocalStorage(){
    let storedRestaurant = localStorage.getItem("myRestaurant");
    if (storedRestaurant){
        myRestaurant = JSON.parse(storedRestaurant);
    }
}