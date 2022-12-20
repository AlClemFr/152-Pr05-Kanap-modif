"use strict";

// v- *************************
// v- Déclaration des fonctions
// v- Fonction pour afficher le produit
function Fct_VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice, qqté) {
  // vi-repérage Id auquels on va rajouter les balises dans le DOM
  var ba_cart__items = document.getElementById('cart__items'); // j- inhiber pour éviter trop d'info dans la console

  if (false) {
    console.log("coco :");
    console.log(iid_ccolor);
    console.log(iid);
    console.log(ccolor);
    console.log(nname);
    console.log(iimage);
    console.log(aaltTxt);
    console.log(pprice);
    console.log(qqté);
  }

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

          var ba_input = document.createElement("input"); // vi- mise en place info associée à l'input

          ba_input.className = "itemQuantity";
          ba_input.id = iid_ccolor; // v- ok ca marche créaction d'un ID

          ba_input.name = "itemQuantity";
          ba_input.type = "number";
          ba_input.min = "1";
          ba_input.max = "100";
          ba_input.value = qqté; // j- a supprimer , mais fonctionne aussi

          if (false) {
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
            ba_input.setAttributeNode(newAttr);
            newAttr = document.createAttribute("value");
            newAttr.nodeValue = qqté; //"42"; // v- modif OK Quantitée

            ba_input.setAttributeNode(newAttr);
          }

          ba_div_cart__item__content__settings__quantity.appendChild(ba_input); // v- fin creaction balise div --
          // j- inhiber pour éviter trop d'info dans la console
          // fctVisu(true, 2, ba_input); 
        }

        if (true) {
          // v- Début creaction balise div --
          var ba_div_cart__item__content__settings__delete = document.createElement("div"); // vi- créaction class 

          ba_div_cart__item__content__settings__delete.className = "cart__item__content__settings__delete"; // vi- accrochage a la balise div

          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__delete); // v- fin creaction balise div --
          // v- Début creaction balise p --

          var ba_p_delete = document.createElement("p"); // vi- créaction class, Id etc.. 

          ba_p_delete.className = "deleteItem";
          ba_p_delete.id = iid_ccolor + "-" + "delete";
          ba_p_delete.textContent = "Supprimer"; // vi- accrochage a la balise div

          ba_div_cart__item__content__settings__delete.appendChild(ba_p_delete); // v- Fin creaction balise p --          
        }
      }
    }
  }
}

; // vi- IT Focus Out
// j- a supprimer remplacer par change

function Fct_ItFocusOut(iid_ccolor) {
  var itemQuantity = document.getElementById(iid_ccolor); // j- inhiber pour éviter trop d'info dans la console
  // console.log("itemQuantity prod01: ");
  // console.log(itemQuantity);
  // j- raff page on remet a zero la quantity
  // j- ne sert à rien à virer 
  // quantity.value = 0;
  // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT
  // j- Utilisation de  change a la place, celui là inutil, a virer.

  itemQuantity.addEventListener('focusout', function () {
    // console.log(quantity);
    // console.log(itemQuantity.value);
    if (itemQuantity.value > 100 || itemQuantity.value < 1 || itemQuantity.value == "") {
      itemQuantity.value = 1;
    } // let toto = id + "-" + colors.value;
    // console.log(toto);
    // addPanier({ id: id, "color": colors.value, "quantity": parseInt(quantity.value) });
    // console.log("iid_ccolor: ", iid_ccolor, " itemQuantity.value: ", parseInt(itemQuantity.value));
    // addPanier({ id: iid_ccolor, "quantity": parseInt(itemQuantity.value) });
    // let x = 2.960024578;
    // let res = x.toFixed(2);
    // let x = 2.960024578;
    // let res = Math.round(x * 100) / 100;


    var x = parseInt(itemQuantity.value); // console.log("x : ", x);

    var y = x.toFixed(2); // console.log("y : ", y);
    // let y = Math.round(x * 100) / 100;

    changeQuantityPanier({
      id: iid_ccolor
    }, y); // changeQuantityPanier({ id: iid_ccolor }, parseInt(itemQuantity.value));

    Fct_aff_nbreArticle_et_prixTotal();
    window.location.reload(); // v- Lance le raff. de la page.
  });
}

; // vi- IT Change

function Fct_ItChange(iid_ccolor) {
  var itemQuantity = document.getElementById(iid_ccolor); // j- inhiber pour éviter trop d'info dans la console
  // console.log("itemQuantity prod01: ");
  // console.log(itemQuantity);
  // j- raff page on remet a zero la quantity
  // quantity.value = 0;
  // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT

  itemQuantity.addEventListener('change', function () {
    // console.log(quantity);
    // console.log(itemQuantity.value);
    if (itemQuantity.value > 100 || itemQuantity.value < 1 || itemQuantity.value == "") {
      itemQuantity.value = 1;
    } // let toto = id + "-" + colors.value;
    // console.log(toto);
    // addPanier({ id: id, "color": colors.value, "quantity": parseInt(quantity.value) });
    // console.log("iid_ccolor: ", iid_ccolor, " itemQuantity.value: ", parseInt(itemQuantity.value));
    // addPanier({ id: iid_ccolor, "quantity": parseInt(itemQuantity.value) });


    changeQuantityPanier({
      id: iid_ccolor
    }, parseInt(itemQuantity.value));
    Fct_aff_nbreArticle_et_prixTotal();
    window.location.reload(); // v- Lance le raff. de la page.
  });
}

; //v-------------------------------------------------
//v- FONCTION - suppression de l'article de la page.
//v- ca marche OK

function Fct_ItDelete(iid_ccolor_ddelete) {
  var ddelete = document.getElementById(iid_ccolor_ddelete); // j- on écoute l'évenement hors champs // // On écoute l'événement clic

  ddelete.addEventListener('click', function () {
    var poub_id_color = iid_ccolor_ddelete.substr(0, iid_ccolor_ddelete.length - 7);
    removeFromPanier({
      id: poub_id_color
    });
    window.location.reload(); // v- Lance le raff. de la page.
  });
}

; //v--------------------------------------------------------------------
//v- FONCTION - Raffraichissement du nombre d'article et du prix total.
//v- ca marche OK

function Fct_aff_nbreArticle_et_prixTotal() {
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

; //j- a virer , ne sert plus

if (false) {
  //v--------------------------------------
  //v- FONCTION - Gestion Champs firstName.
  //v- ca marche OK
  var _Fct_ItChange_firstName = function _Fct_ItChange_firstName() {
    var ba_firstName = document.getElementById('firstName');
    var ba_firstNameErrorMsg = document.getElementById('firstNameErrorMsg'); // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT

    ba_firstName.addEventListener('change', function () {
      //       var message = 'Bonjour les gens !';
      //       var regex = /les/;
      //       if (message.match(regex))
      //         alert('Tiens, il y a plusieurs personnes ?');
      //       else
      //         alert('Tout seul...');
      // Si vous exécutez ce code, vous obtiendrez une alerte "Tiens, 
      // il y a plusieurs personnes ?".
      // En effet, la regex / les / vérifie que "les" est présent au moins 
      // une fois dans la chaîne de caractère message(qu'on peut appeler sujet de l'expression régulière).
      // Notez que j'aurais très bien pu écrire le code de cette manière :
      // o- pour vérifier une adresse mail valide.
      // https://www.gekkode.com/developpement/expression-reguliere-pour-valider-ladresse-email/
      // var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
      // return emailReg.test(email);
      // o- pour vérifier que seulement caractere minuscule et maguscule.
      // https://askcodez.com/regex-permettent-seulement-des-lettres-et-certains-caracteres.html
      // ^[a-zA-Z -,.()]*$
      // regex = /^[a-zA-Z]*$/;// j-ca marche aussi
      // o- récapitulatif
      // https://www.webrankinfo.com/dossiers/gwt/regex
      // $search = "1 rue de machin paris 75000";
      //       preg_match("'(.*) (.*) ([0-9]{5})'s", $search, $infos);
      var message = ba_firstName.value;
      var regex = /^[a-zA-Z ]*$/;

      if (message.match(regex)) {} else {
        ba_firstNameErrorMsg.textContent = "Seul les lettres en minuscules et Majuscule sont autorisées.";
      }
    }); // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT

    ba_firstName.addEventListener('focusin', function () {
      ba_firstNameErrorMsg.textContent = " ";
    });
  };

  //v--------------------------------------
  //v- FONCTION - Gestion Champ lastName.
  //v- ca marche OK
  var _Fct_ItChange_lastName = function _Fct_ItChange_lastName() {
    var ba_lastName = document.getElementById('lastName');
    var ba_lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
    ba_lastName.addEventListener('change', function () {
      var message = ba_lastName.value;
      var regex = /^[a-zA-Z ]*$/;

      if (message.match(regex)) {} else {
        ba_lastNameErrorMsg.textContent = "Seul les lettres en minuscules et Majuscule sont autorisées.";
      }
    }); //vi- Reset du message d'erreur

    ba_lastName.addEventListener('focusin', function () {
      ba_lastNameErrorMsg.textContent = " ";
    });
  };

  //v--------------------------------------
  //v- FONCTION - Gestion Champ address.
  //v- ca marche OK
  var _Fct_ItChange_address = function _Fct_ItChange_address() {
    var ba_address = document.getElementById('address');
    var ba_addressErrorMsg = document.getElementById('addressErrorMsg');
    ba_address.addEventListener('change', function () {
      var message = ba_address.value;
      var regex = /([0-9]{1,3}) (.*) /;

      if (message.match(regex)) {} else {
        ba_addressErrorMsg.textContent = "Erreur dans le format. Exemple viable: 10 rue du Coral";
      }
    }); //vi- Reset du message d'erreur

    ba_address.addEventListener('focusin', function () {
      ba_addressErrorMsg.textContent = " ";
    });
  };

  //v--------------------------------------
  //v- FONCTION - Gestion Champ city.
  //v- ca marche OK
  var _Fct_ItChange_city = function _Fct_ItChange_city() {
    var ba_city = document.getElementById('city');
    var ba_cityErrorMsg = document.getElementById('cityErrorMsg');
    ba_city.addEventListener('change', function () {
      var message = ba_city.value;
      var regex = /(.*) ([0-9]{5})/;

      if (message.match(regex)) {} else {
        ba_cityErrorMsg.textContent = "Erreur dans le format. Exemple viable: Dardilly 69570";
      }
    }); //vi- Reset du message d'erreur

    ba_city.addEventListener('focusin', function () {
      ba_cityErrorMsg.textContent = " ";
    });
  };

  //v--------------------------------------
  //v- FONCTION - Gestion Champ email.
  //v- ca marche OK
  var _Fct_ItChange_email = function _Fct_ItChange_email() {
    var ba_email = document.getElementById('email');
    var ba_emailErrorMsg = document.getElementById('emailErrorMsg');
    ba_email.addEventListener('change', function () {
      var message = ba_email.value;
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

      if (message.match(regex)) {} else {
        ba_emailErrorMsg.textContent = "Erreur dans le format. Exemple viable: xxxx@yyyyy.com";
      }
    }); //vi- Reset du message d'erreur

    ba_email.addEventListener('focusin', function () {
      ba_emailErrorMsg.textContent = " ";
    });
  };

  ;
  ;
  ;
  ;
  ;
} //v--------------------------------------
//v- FONCTION - Gestion Champ contact.
//v- ca marche OK


function Fct_ItChange_contact(bbalise, bbaliseErreur, rregex, mmessageErreur, ii) {
  var ba_contact = document.getElementById(bbalise);
  var ba_contactErrorMsg = document.getElementById(bbaliseErreur);
  ba_contact.addEventListener('focusout', function () {
    var message = ba_contact.value;

    if (message.match(rregex)) {
      console.log("longueur: ", message.length);

      if (message.length != 0) {
        console.log("faisont la sauvegarde ".concat(ii, ": "), message);
        ar_contact[ii] = message;
      }
    } else {
      if (message.length != 0) {
        ba_contactErrorMsg.textContent = mmessageErreur;
      }
    }
  }); //vi- Reset du message d'erreur

  ba_contact.addEventListener('focusin', function () {
    ba_contactErrorMsg.textContent = " ";
  });
}

; //v---------------------------------------------------
//v- Créaction dans le DOM "direct live" des articles.

function Fct_Créaction_Articles_Dans_Dom() {
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
            nname = data.name; //"Kanap Sinopé";

            iimage = data.imageUrl; //"http://localhost:3000/images/kanap01.jpeg";

            aaltTxt = data.altTxt; //"Photo d'un canapé bleu, deux places";
            // a_pprice = parseInt(data.price) / 10; //"184.90";

            pprice = data.price; //"184.90";

            qqté = poub_qte; // j- teste

            Ar_price[ii] = pprice; // console.log("in :", ii, total[ii]);
            // v- Creaction de la trame article

            Fct_VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice / 10, qqté); // v- It surveillance "Focus Out" champs Quantité
            // iid_ccolor = "107fb5b75607497b96722bda5b504926-Blue";

            if (false) {
              Fct_ItFocusOut(iid_ccolor);
            }

            ;
            Fct_ItChange(iid_ccolor); // v- It surveillance "clic" sur texte suppression
            // iid_ccolor_ddelete = "107fb5b75607497b96722bda5b504926-Blue-delete";

            iid_ccolor_ddelete = iid_ccolor + "-delete";
            Fct_ItDelete(iid_ccolor_ddelete);

            if (ii = panier.length) {
              Fct_aff_nbreArticle_et_prixTotal();
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
    // j- l'afficher dans la page 
    console.log("panier: vide");
    Fct_aff_nbreArticle_et_prixTotal();
  }

  ;
}

; // v-*************************************************
// v- Déclaration de Variables Globales

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
var Ar_price = new Array(); // v-*************************************************
// v- Début Programme

Fct_Créaction_Articles_Dans_Dom();

if (false) {
  Fct_ItChange_firstName();
  Fct_ItChange_lastName();
  Fct_ItChange_address();
  Fct_ItChange_city();
  Fct_ItChange_email();
} // Fct_ItChange_contact();


if (true) {
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
  var ar_contact = ["", "", "", "", ""];

  for (var ii = 0; ii < 5; ii++) {
    switch (ii) {
      case 0:
        bbalise = 'firstName';
        bbaliseErreur = 'firstNameErrorMsg'; // rregex = /^[a-zA-Z]*$/; //[$A-Za-zéèà\s-]

        rregex = /^[a-zA-Zéèà\s-]*$/; //[$A-Za-zéèà\s-]

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
        rregex = /(.*) ([0-9]{5})/;
        mmessageErreur = "Erreur dans le format. Exemple viable: Dardilly 69570";
        break;

      case 4:
        bbalise = 'email';
        bbaliseErreur = 'emailErrorMsg';
        rregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        mmessageErreur = "Erreur dans le format. Exemple viable: xxxx@yyyyy.com";
        break;

      default:
        console.log("Finito");
    }

    ;
    Fct_ItChange_contact(bbalise, bbaliseErreur, rregex, mmessageErreur, ii);
  }

  ;
}

;