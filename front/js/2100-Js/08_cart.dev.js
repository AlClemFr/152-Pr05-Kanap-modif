"use strict";

//v- *************************************************
//v- Déclaration des fonctions
//v-
//v- FONCTION ----------------------------------------
//v- Affichage des Articles choisies.
//v- Raff Visu & LocalStorage.
//v-
function VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice, qqté) {
  // vi-repérage Id auquels on va rajouter les balises dans le DOM
  var ba_cart__items = document.getElementById('cart__items');

  if (true) {
    // v- début creaction balise article 
    var ba_article = document.createElement("article");
    ba_article.className = "cart__item";
    var newAttr = document.createAttribute("data-id");
    newAttr.nodeValue = iid;
    ba_article.setAttributeNode(newAttr);
    newAttr = document.createAttribute("data-color");
    newAttr.nodeValue = ccolor;
    ba_article.setAttributeNode(newAttr);
    ba_cart__items.appendChild(ba_article); // v- fin creaction balise article --
    //o- Créaction indentation avec if

    if (true) {
      // v- début creaction balise div --
      var ba_div = document.createElement("div");
      ba_div.className = "cart__item__img";
      ba_article.appendChild(ba_div); // v- fin creaction balise div --
      // v- début creaction balise img --
      // <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`

      var name = nname;
      var imageUrl = iimage;
      var altTxt = aaltTxt;
      altTxt = altTxt + ', ' + name;
      var ba_image = document.createElement("img");
      ba_image.src = imageUrl;
      ba_image.alt = altTxt;
      ba_div.appendChild(ba_image); // v- fin creaction balise img --
    } // o- Créaction indentation avec if


    if (true) {
      // v- début creaction balise div --
      var ba_div_cart__item__content = document.createElement("div");
      ba_div_cart__item__content.className = "cart__item__content";
      ba_article.appendChild(ba_div_cart__item__content); // v- fin creaction balise div --
      // o- Créaction indentation avec if

      if (true) {
        // v- début creaction balise div --
        var ba_div_cart__item__content__description = document.createElement("div");
        ba_div_cart__item__content__description.className = "cart__item__content__description";
        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__description); // o- Créaction indentation avec if

        if (true) {
          var ba_h2 = document.createElement("h2");
          var _name = nname;
          ba_h2.textContent = _name;
          ba_div_cart__item__content__description.appendChild(ba_h2);
          var ba_p_couleur = document.createElement("p");
          ba_p_couleur.textContent = ccolor;
          ba_div_cart__item__content__description.appendChild(ba_p_couleur);
          var ba_p_prix = document.createElement("p");
          ba_p_prix.textContent = pprice;
          ba_div_cart__item__content__description.appendChild(ba_p_prix);
        } // v- fin creaction balise div --

      } // o- Créaction indentation avec if


      if (true) {
        // v- début creaction balise div --
        var ba_div_cart__item__content__settings = document.createElement("div");
        ba_div_cart__item__content__settings.className = "cart__item__content__settings";
        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__settings); // v- fin creaction balise div --
        // o- Créaction indentation avec if

        if (true) {
          // v- début creaction balise div --
          var ba_div_cart__item__content__settings__quantity = document.createElement("div");
          ba_div_cart__item__content__settings__quantity.className = "cart__item__content__settings__quantity";
          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__quantity);
          var ba_p_qte = document.createElement("p");
          ba_p_qte.textContent = "Qté : ";
          ba_div_cart__item__content__settings__quantity.appendChild(ba_p_qte);
          var ba_input = document.createElement("input");
          ba_input.className = "itemQuantity";
          ba_input.id = iid_ccolor;
          ba_input.name = "itemQuantity";
          ba_input.type = "number";
          ba_input.min = "1";
          ba_input.max = "100";
          ba_input.value = qqté;
          ba_div_cart__item__content__settings__quantity.appendChild(ba_input); // v- fin creaction balise div --
        }

        if (true) {
          // v- Début creaction balise div --
          var ba_div_cart__item__content__settings__delete = document.createElement("div");
          ba_div_cart__item__content__settings__delete.className = "cart__item__content__settings__delete";
          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__delete); // v- fin creaction balise div --
          // v- Début creaction balise p --

          var ba_p_delete = document.createElement("p");
          ba_p_delete.className = "deleteItem";
          ba_p_delete.id = iid_ccolor + "-" + "delete";
          ba_p_delete.textContent = "Supprimer";
          ba_div_cart__item__content__settings__delete.appendChild(ba_p_delete); // v- Fin creaction balise p --          
        }
      }
    }
  }
}

; //v- FONCTION ----------------------------------------
//v- Modification de la Quantité de l'article.
//v- Raff Visu & LocalStorage.
//v-

function ItChange(iid_ccolor) {
  var itemQuantity = document.getElementById(iid_ccolor);
  itemQuantity.addEventListener('change', function () {
    if (itemQuantity.value > 100 || itemQuantity.value < 1 || itemQuantity.value == "") {
      itemQuantity.value = 1;
    }

    changeQuantityPanier({
      id: iid_ccolor
    }, parseInt(itemQuantity.value));
    aff_nbreArticle_et_prixTotal();
    window.location.reload(); //v- Lance le raff. de la page.
  });
}

; //v- FONCTION ----------------------------------------
//v- Suppression de l'article de la page.
//v- Raff Visu & LocalStorage.
//v-

function ItDelete(iid_ccolor_ddelete) {
  var ddelete = document.getElementById(iid_ccolor_ddelete);
  ddelete.addEventListener('click', function () {
    var poub_id_color = iid_ccolor_ddelete.substr(0, iid_ccolor_ddelete.length - 7);
    removeFromPanier({
      id: poub_id_color
    });
    window.location.reload(); // v- Lance le raff. de la page.
  });
}

; //v- FONCTION ----------------------------------------
//v- Raffraichissement Visu du nombre d'article et du prix total.
//v-

function aff_nbreArticle_et_prixTotal() {
  var i = 0;
  var Nbre_article = 0;
  var Total_price = 0;

  for (i; i < panier.length; i++) {
    // console.log(" Index: ", i, " Quantity : ", panier[i].quantity, " Prix: ", Ar_price[i]);
    Nbre_article = Nbre_article + panier[i].quantity;
    Total_price = Total_price + panier[i].quantity * Ar_price[i];
  }

  var ba_totalQuantity = document.getElementById('totalQuantity');
  var ba_totalPrice = document.getElementById('totalPrice'); // console.log(ba_totalQuantity.textContent, " ", ba_totalPrice.textContent);
  // console.log(" Nbre Article: ", Nbre_article, " Total_price : ", Total_price);

  ba_totalQuantity.textContent = " " + Nbre_article;
  ba_totalPrice.textContent = Total_price / 10;
}

; //v- FONCTION ----------------------------------------
//v- Créaction dans le DOM des articles.
//v- Créaction des Evenements associés aux articles.
//v-

function Créaction_Articles_Dans_Dom() {
  // o- teste si panier vide
  if (panier.length > 0) {
    var _loop = function _loop() {
      // vi- Récupération info dans le panier
      var poub_id_color = panier[i].id;
      var poub_id = poub_id_color.substr(0, 32);
      var poub_color = poub_id_color.substr(33, poub_id_color.length);
      var poub_qte = panier[i].quantity;
      var ii = i; // vi- Récupération info Id du serveur

      var poub_url = "http://localhost:3000/api/products/" + poub_id;

      if (true) {
        var Myfetch = fetch(poub_url).then(function (responsive) {
          return responsive.json().then(function (data) {
            iid_ccolor = poub_id_color;
            iid = poub_id;
            ccolor = poub_color;
            nname = data.name;
            iimage = data.imageUrl;
            aaltTxt = data.altTxt;
            pprice = data.price;
            qqté = poub_qte;
            Ar_price[ii] = pprice; // v- Creaction de la trame article

            VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice / 10, qqté); // v- It surveillance "Focus Out" champs Quantité
            // iid_ccolor = "107fb5b75607497b96722bda5b504926-Blue";

            ItChange(iid_ccolor); // v- It surveillance "clic" sur texte suppression
            // iid_ccolor_ddelete = "107fb5b75607497b96722bda5b504926-Blue-delete";

            iid_ccolor_ddelete = iid_ccolor + "-delete";
            ItDelete(iid_ccolor_ddelete);

            if (ii = panier.length) {
              aff_nbreArticle_et_prixTotal();
            }
          })["catch"](function (err) {
            return console.log("erreur: " + err);
          });
        });
      }
    };

    // if (true) {
    for (i; i < panier.length; i++) {
      _loop();
    }

    ;
  } else {
    aff_nbreArticle_et_prixTotal();
  }

  ;
}

; //v- FONCTION ----------------------------------------
//v- Gestion des Evenement des champs du formulaire de contact.
//v- Côntrole que les informations saisies sont cohérentes pour chaque champ.
//v- Créactions des Evénements associées à chaque champs
//v-

function Ev_contact(bbalise, bbaliseErreur, rregex, mmessageErreur, ii) {
  var ccontact = document.getElementById(bbalise);
  var ccontactErrorMsg = document.getElementById(bbaliseErreur);
  var oorderErrorMsg = document.getElementById('orderErrorMsg');
  ccontact.addEventListener('focusout', function () {
    var message = ccontact.value;

    if (message.match(rregex)) {
      console.log("longueur: ", message.length);

      if (message.length != 0) {
        ar_contact[ii] = message;
        ar_contact[ii + 5] = true; // console.log(`OK la sauvegarde ${ii}: `, message, ` ${ii + 5}: `, ar_contact[ii + 5]);
      }
    } else {
      if (message.length != 0) {
        ccontactErrorMsg.textContent = mmessageErreur;
        ar_contact[ii + 5] = false;
      } // console.log(`Niet la sauvegarde ${ii}: `, message, ` ${ii + 5}: `, ar_contact[ii + 5]);

    }
  }); //vi- Reset du message d'erreur

  ccontact.addEventListener('focusin', function () {
    ccontactErrorMsg.textContent = " ";
    oorderErrorMsg.textContent = " ";
  });
}

; //v- FONCTION ----------------------------------------
//v- Gestion formulaire de contact.
//v- Scrutation et passage de paramtres a chaque champs.
//v-

function Gestion_Formulaire_De_Contact() {
  for (var ii = 0; ii < 5; ii++) {
    switch (ii) {
      case 0:
        bbalise = 'firstName';
        bbaliseErreur = 'firstNameErrorMsg';
        rregex = /^[a-zA-Zéèà\s-]*$/;
        mmessageErreur = "Seul les lettres a à z sont autorisé, en minuscule ou majuscule";
        break;

      case 1:
        bbalise = 'lastName';
        bbaliseErreur = 'lastNameErrorMsg';
        rregex = /^[a-zA-Z]*$/;
        mmessageErreur = "Seul les lettres a à z sont autorisé, en minuscule ou majuscule";
        break;

      case 2:
        bbalise = 'address';
        bbaliseErreur = 'addressErrorMsg';
        rregex = /([0-9]{1,3}) (.*)/;
        mmessageErreur = "Erreur dans le format. Exemple viable: 10 rue du Coral";
        break;

      case 3:
        bbalise = 'city';
        bbaliseErreur = 'cityErrorMsg';
        rregex = /([0-9]{5}) (.*)/;
        mmessageErreur = "Erreur dans le format. Exemple viable: 69570 Dardilly";
        break;

      case 4:
        bbalise = 'email';
        bbaliseErreur = 'emailErrorMsg';
        rregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        mmessageErreur = "Erreur dans le format. Exemple viable: xxxx@yyyyy.zzz";
        break;

      default: // console.log(`Finito`);

    }

    ;
    Ev_contact(bbalise, bbaliseErreur, rregex, mmessageErreur, ii);
  }

  ;
}

; //v- FONCTION ----------------------------------------
//v- Gestion Attente orderId.
//v-

function Attente_OrderId() {
  var cccontact = {
    firstName: "Toto",
    lastName: "Titi",
    address: "10 rue du pont",
    city: "lyon",
    email: "toto@titi.com"
  };
  var productId = ["107fb5b75607497b96722bda5b504926", "415b7cacb65d43b2b5c1ff70f3393ad1", "055743915a544fde83cfdfc904935ee7"]; // console.log(cccontact);

  var ContactProducts = {
    contact: cccontact,
    products: productId
  }; // let toto = function send(e) {
  //   e.preventDefault();

  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ value: document.getElementById("value").value })
    // body: JSON.stringify(contact_products)
    body: JSON.stringify(ContactProducts) // console.log("01: ");

  }).then(function (res) {
    if (res.ok) {
      console.log("02: ", res.ok); // console.log("03: ", res.json());
      // console.log("04: ", res.orderId);

      return res.json();
    }
  }).then(function (value) {
    console.log("04: ".concat(value.orderId));
    setTimeout(function () {
      document.location.href = "./07_confirmation.html?orderId=".concat(value.orderId);
    }, 5000);
  })["catch"](function (err) {
    console.log(err);
  }); // console.log(cccontact);
}

; //v- FONCTION ----------------------------------------
//v- Gestion Bouton de commande.
//v- Contrôle que le panier n'est pas vide.
//v- Contrôle que les différents champs de saisie sont valide.
//v-

function Gestion_Bouton_Commande() {
  var oorder = document.getElementById('order');
  var oorderErrorMsg = document.getElementById('orderErrorMsg');
  oorder.addEventListener('click', function () {
    var ook = false;
    ook = ar_contact[5] & ar_contact[6] & ar_contact[7] & ar_contact[8] & ar_contact[9]; // console.log(ook, " ", ar_contact[5], " ", ar_contact[6], " ", ar_contact[7], " ", ar_contact[8], " ", ar_contact[9]);

    if (qqté != "") {
      if (ook == true) {
        oorderErrorMsg.textContent = "Dans un instant, vous allez être redirigé sur la page de confirmation de votre commande";
        Attente_OrderId(); //j- mettre en place la créaction de l'objet
        //j- mettre en place l'envoie du post et aller sur la page de confirmation.

        if (false) {
          setTimeout(function () {
            document.location.href = "./08_confirmation.html";
          }, 5000);
        }

        ;

        if (false) {
          //   setTimeout(function() {
          //     console.log("I'm here!")
          // }, 5000);
          // setTimeout('RedirectionJavascript()', 20000);
          // j- si numero de cde reçu alors aller a la page confirmation
          document.location.href = "./08_confirmation.html"; // setTimeout(document.location.href = "./08_confirmation.html", 20000);
        }

        ;
      } else {
        oorderErrorMsg.textContent = "Un ou plusieurs champs ne sont pas validé !";
      }

      ;
    } else {
      oorderErrorMsg.textContent = "Aucun article n'est présent dans votre panier !";
    }
  });
}

function page_confirmation() {
  document.location.href = "./08_confirmation.html";
}

; //v- *************************************************
//v- Déclaration des Variables Globales.
//v-

var panier = getPanier();
var iid_ccolor = "";
var iid = "";
var ccolor = "";
var nname = "";
var iimage = "";
var aaltTxt = "";
var pprice = 0;
var qqté = "";
var i = 0;
var Ar_price = new Array();
var bbalise = '';
var bbaliseErreur = '';
var rregex = '';
var mmessageErreur = '';
var ccontact = {
  prénon: "",
  nom: "",
  adress: "",
  ville: "",
  mail: ""
};
var ar_contact = ["", "", "", "", "", false, false, false, false, false]; //v- *************************************************
//v- Début Programme
//v-

Créaction_Articles_Dans_Dom();
Gestion_Formulaire_De_Contact();
Gestion_Bouton_Commande();