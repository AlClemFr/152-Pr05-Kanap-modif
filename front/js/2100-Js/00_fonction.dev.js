"use strict";

// o- teste panier 
// j- Mettre id Prix Couleur & Qt. 
// j- Remplacer Basket par panier
// j- laisser pour le moment product a voir si on remplace par kanap
//v- ok marche
function savePanier(panier) {
  //  clée , valeur
  // set créaction
  localStorage.setItem("panier", JSON.stringify(panier));
} //v- ok marche


function getPanier() {
  //  clée , valeur
  // get récupération
  var panier = localStorage.getItem("panier"); //j- on teste si tableau basket existe

  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

function addPanier(product) {
  var panier = getPanier(); // console.log(panier);
  //  j- recherche si product exist déjà dans tableau.

  var foundProduct = panier.find(function (p) {
    return p.id == product.id;
  });

  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    panier.push(product);
  }

  savePanier(panier);
}

function removeFromPanier(product) {
  var panier = getPanier();
  panier = panier.filter(function (p) {
    return p.id != product.id;
  });
  savePanier(panier);
}

function changeQuantityPanier(product, quantity) {
  var panier = getPanier(); //  j- recherche si product existr déjà dans tableau.

  var foundProduct = panier.find(function (p) {
    return p.id == product.id;
  }); // let founColor = panier.find(c => c.id == product.id);

  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    console.log(foundProduct.quantity);

    if (foundProduct.quantity <= 0) {
      removeFromPanier(foundProduct);
    } else {
      savePanier(panier);
    }
  }
}

function getNumberProduct() {
  var panier = getPanier();
  var number = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = panier[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var product = _step.value;
      number += product.quantity;
      console.log(product.quantity);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return number;
}

function getTotalPrice() {
  var panier = getPanier();
  var total = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = panier[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var product = _step2.value;
      total += product.quantity * product.price; // console.log(product.quantity);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return total;
} // export niet 


function sayWelcom() {
  return "Welcom to WayToLearnX.com";
}