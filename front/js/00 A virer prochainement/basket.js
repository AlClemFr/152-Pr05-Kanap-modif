
// o- teste panier 


function saveBasket(basket) {
  //  clée , valeur
  // set créaction
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket() {
  //  clée , valeur
  // get récupération
  let basket = localStorage.getItem("basket");

  //j- on teste si tableau basket existe
  if (basket == null) {
    return [];
  }
  else {
    return JSON.parse(basket);
  }
}

function addBasket(product) {
  let basket = getBasket();

  //  j- recherche si product existr déjà dans tableau.
  let foundProduct = basket.find(p => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  }
  else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
}

function removeFromBasket(product) {
  let basket = getBasket();

  //  j- 
  basket = basket.filter(p => p.id != product.id);
  saveBasket(basket);
}


function changeQuantityBasket(product, quantity) {
  let basket = getBasket();

  //  j- recherche si product existr déjà dans tableau.
  let foundProduct = basket.find(p => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromBasket(foundProduct);
    }
    else {
      saveBasket(basket);
    }
  }
}


function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
    console.log(product.quantity);
  }
  return number;
}


function getTotalPrice() {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    total += product.quantity * product.price;
    // console.log(product.quantity);
  }
  return total;
}

// export niet 
function sayWelcom() {
  return "Welcom to WayToLearnX.com";
}

