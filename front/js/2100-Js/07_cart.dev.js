"use strict";

function prod(iid, ccolor, nname, iimage, aaltTxt, pprice, qqté) {
  console.log("coco :");
  console.log(iid);
  console.log(ccolor);
  console.log(nname);
  console.log(iimage);
  console.log(aaltTxt);
  console.log(pprice);
  console.log(qqté);

  if (true) {
    // v- début creaction balise article ------------------------------------------
    var ba_article = document.createElement("article"); // vi- créaction des class

    ba_article.className = "cart__item"; // o- https://developer.mozilla.org/fr/docs/Learn/HTML/Howto/Use_data_attributes
    // o- Pour rajouter des attributs
    // j- mettre en place l'id du localStore ************************

    var newAttr = document.createAttribute("data-id");
    newAttr.nodeValue = iid; //"12546"; // v- modif OK id

    ba_article.setAttributeNode(newAttr); // j- mettre en place le color du localStore ***********************

    newAttr = document.createAttribute("data-color");
    newAttr.nodeValue = ccolor; //"white";// v- modif OK color

    ba_article.setAttributeNode(newAttr); // vi- accrochage "article" a parent

    ba_cart__items.appendChild(ba_article); // v- fin creaction balise article --
    // o- le if permet la créaction indentation pour moi

    if (true) {
      // v- début creaction balise div --
      var ba_div = document.createElement("div"); // vi- créaction des class 

      ba_div.className = "cart__item__img"; // vi- accrochage a la balise div

      ba_article.appendChild(ba_div); // v- fin creaction balise div --
      // v- début creaction balise img --
      // <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`
      // j- mettre en place les info du fletch , provisoire *******************

      var name = nname; //"Kanap 01" // v- modif OK name

      var imageUrl = iimage; //"http://localhost:3000/images/kanap01.jpeg"; // v- modif OK image

      var altTxt = aaltTxt; // "Photo d'un canapé bleu, deux places"// v- modif OK altTxt

      altTxt = altTxt + ', ' + name;
      var ba_image = document.createElement("img");
      ba_image.src = imageUrl; //"http://localhost:3000/images/kanap01.jpeg";

      ba_image.alt = altTxt; //"Photo d'un canapé bleu, deux places";
      // vi- accrochage a la balise img

      ba_div.appendChild(ba_image); // v- fin creaction balise img --
    } // o- le if permet la créaction indentation pour moi


    if (true) {
      // v- début creaction balise div --
      var ba_div_cart__item__content = document.createElement("div"); // vi- créaction class 

      ba_div_cart__item__content.className = "cart__item__content"; // vi- accrochage a la balise div

      ba_article.appendChild(ba_div_cart__item__content); // v- fin creaction balise div --

      if (true) {
        // v- début creaction balise div --
        var ba_div_cart__item__content__description = document.createElement("div"); // vi- créaction class 

        ba_div_cart__item__content__description.className = "cart__item__content__description"; // vi- accrochage a la balise div

        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__description);

        if (true) {
          var ba_h2 = document.createElement("h2"); // j- mettre info dynamique

          var _name = nname;
          ba_h2.textContent = _name; //"Nom du produit KANAP 034";  // v- modif OK name

          ba_div_cart__item__content__description.appendChild(ba_h2);
          var ba_p_couleur = document.createElement("p"); // j- mettre info dynamique

          ba_p_couleur.textContent = ccolor; //"Vert"; // v- modif OK color

          ba_div_cart__item__content__description.appendChild(ba_p_couleur);
          var ba_p_prix = document.createElement("p"); // j- mettre info dynamique

          ba_p_prix.textContent = pprice; //"42,00";// v- modif OK price

          ba_div_cart__item__content__description.appendChild(ba_p_prix); // v- fin creaction balise div --
        }
      }

      if (true) {
        // v- début creaction balise div --
        var ba_div_cart__item__content__settings = document.createElement("div"); // vi- créaction class 

        ba_div_cart__item__content__settings.className = "cart__item__content__settings"; // vi- accrochage a la balise div

        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__settings); // v- fin creaction balise div --

        if (true) {
          // v- début creaction balise div --
          var ba_div_cart__item__content__settings__quantity = document.createElement("div"); // vi- créaction class 

          ba_div_cart__item__content__settings__quantity.className = "cart__item__content__settings__quantity"; // vi- accrochage a la balise div

          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__quantity);
          var ba_p_qte = document.createElement("p"); // j- mettre info dynamique

          ba_p_qte.textContent = "Qté : ";
          ba_div_cart__item__content__settings__quantity.appendChild(ba_p_qte); // vi- creaction Imput

          var ba_input = document.createElement("input"); // vi- créaction class 

          ba_input.className = "itemQuantity"; // ba_input.Name = "itemQuantity";
          // ba_imput.inputMode = "number";
          // ba_imput.ValueMin = "1";
          // ba_imput.ValueMax = "100";
          // j- mettre en place l'id du localStore ************************

          newAttr = document.createAttribute("name");
          newAttr.nodeValue = "itemQuantity";
          ba_input.setAttributeNode(newAttr);
          newAttr = document.createAttribute("type");
          newAttr.nodeValue = "number";
          ba_input.setAttributeNode(newAttr);
          newAttr = document.createAttribute("min");
          newAttr.nodeValue = "1";
          ba_input.setAttributeNode(newAttr);
          newAttr = document.createAttribute("max");
          newAttr.nodeValue = "100";
          ba_input.setAttributeNode(newAttr); // j- mettre en place l'id du localStore ************************

          newAttr = document.createAttribute("value");
          newAttr.nodeValue = qqté; //"42"; // v- modif OK Quantitée

          ba_input.setAttributeNode(newAttr);
          ba_div_cart__item__content__settings__quantity.appendChild(ba_input);
          fctVisu(true, 2, ba_input); // v- fin creaction balise div --
        }

        if (true) {
          // v- début creaction balise div --
          var ba_div_cart__item__content__settings__delete = document.createElement("div"); // vi- créaction class 

          ba_div_cart__item__content__settings__delete.className = "cart__item__content__settings__delete"; // vi- accrochage a la balise div

          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__delete); // v- fin creaction balise div --
        }
      }
    }
  }

  return;
}

; // o- créaction dans le DOM "direct live"
// vi-repérage Id auquels on va rajouter les balises dans le DOM

var ba_cart__items = document.getElementById('cart__items');
fctVisu(true, 1, ba_cart__items); // j- mettre en place teste si panier vide ****************************

total = 0.0;
var iid = "107fb5b75607497b96722bda5b504926";
var ccolor = "blue";
var nname = "Kanap Sinopé";
var iimage = "http://localhost:3000/images/kanap01.jpeg";
var aaltTxt = "Photo d'un canapé bleu, deux places";
var pprice = "184.90";
var qqté = "10";
prod(iid, ccolor, nname, iimage, aaltTxt, pprice, qqté);
iid = "415b7cacb65d43b2b5c1ff70f3393ad1";
ccolor = "Black/Yellow";
nname = "Kanap Cyllène";
iimage = "http://localhost:3000/images/kanap02.jpeg";
aaltTxt = "Photo d'un canapé d'angle, vert, trois places";
pprice = "449.90";
qqté = "20";
prod(iid, ccolor, nname, iimage, aaltTxt, pprice, qqté); // prod();
// prod();
// prod();
// vi--------------------------------------------------------------------------
// vi--------------------------------------------------------------------------

var colors = document.getElementById('colors');
var quantity = document.getElementById('quantity');
var addToCard = document.getElementById('addToCart'); // j- raff page on remet a zero la quantity

quantity.value = 0; // j- teste récupération Quantité
// const quantity = document.getElementById('quantity');
// j- on écoute l'évenement hors champs

quantity.addEventListener('focusout', function () {
  // On écoute l'événement click
  // console.log(quantity);
  // console.log(quantity.value);
  if (quantity.value > 100 || quantity.value < 0 || quantity.value == "") {
    quantity.value = 0;
  }
});