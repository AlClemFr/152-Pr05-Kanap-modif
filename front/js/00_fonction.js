
// o- teste panier 

// j- Mettre id Prix Couleur & Qt. 
// j- Remplacer Basket par panier
// j- laisser pour le moment product a voir si on remplace par kanap

//v- ok marche
function savePanier(panier) {
  //  clée , valeur
  // set créaction
  localStorage.setItem("panier", JSON.stringify(panier));
}

//v- ok marche
function getPanier() {
  //  clée , valeur
  // get récupération
  let panier = localStorage.getItem("panier");

  //j- on teste si tableau basket existe
  if (panier == null) {
    return [];
  }
  else {
    return JSON.parse(panier);
  }
}

function addPanier(product) {
  let panier = getPanier();
  // console.log(panier);

  //  j- recherche si product exist déjà dans tableau.
  let foundProduct = panier.find(p => p.id == product.id);

  if (foundProduct != undefined) {
    foundProduct.quantity++;
  }
  else {
    product.quantity = 1;
    panier.push(product);
  }
  savePanier(panier);
}

function removeFromPanier(product) {
  let panier = getPanier();

  panier = panier.filter(p => p.id != product.id);
  savePanier(panier);
}

function changeQuantityPanier(product, quantity) {
  let panier = getPanier();

  //  j- recherche si product existr déjà dans tableau.
  let foundProduct = panier.find(p => p.id == product.id);
  // let founColor = panier.find(c => c.id == product.id);

  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    console.log(foundProduct.quantity)
    if (foundProduct.quantity <= 0) {
      removeFromPanier(foundProduct);
    }
    else {
      savePanier(panier);
    }
  }
}

function getNumberProduct() {
  let panier = getPanier();
  let number = 0;
  for (let product of panier) {
    number += product.quantity;
    console.log(product.quantity);
  }
  return number;
}


function getTotalPrice() {
  let panier = getPanier();
  let total = 0;
  for (let product of panier) {
    total += product.quantity * product.price;
    // console.log(product.quantity);
  }
  return total;
}

// export niet 
function sayWelcom() {
  return "Welcom to WayToLearnX.com";
}

