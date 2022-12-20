// j- Divers site
// o- https://developer.mozilla.org/fr/docs/Learn/HTML/Howto/Use_data_attributes
// o- Pour rajouter des attributs




//j----------------------------
//j- venant de Cart

//j- a virer , ne sert plus
if (false) {
  //v--------------------------------------
  //v- FONCTION - Gestion Champs firstName.
  //v- ca marche OK
  function Fct_ItChange_firstName() {

    const ba_firstName = document.getElementById('firstName');
    const ba_firstNameErrorMsg = document.getElementById('firstNameErrorMsg');

    // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT
    ba_firstName.addEventListener(
      'change', function () {

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




        let message = ba_firstName.value;
        let regex = /^[a-zA-Z ]*$/;


        if (message.match(regex)) {

        } else {

          ba_firstNameErrorMsg.textContent = "Seul les lettres en minuscules et Majuscule sont autorisées.";
        }
      }
    );

    // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT
    ba_firstName.addEventListener(
      'focusin', function () {
        ba_firstNameErrorMsg.textContent = " ";
      }
    );

  };



  //v--------------------------------------
  //v- FONCTION - Gestion Champ lastName.
  //v- ca marche OK
  function Fct_ItChange_lastName() {

    const ba_lastName = document.getElementById('lastName');
    const ba_lastNameErrorMsg = document.getElementById('lastNameErrorMsg');

    ba_lastName.addEventListener(
      'change', function () {

        let message = ba_lastName.value;
        let regex = /^[a-zA-Z ]*$/;

        if (message.match(regex)) {
        } else {
          ba_lastNameErrorMsg.textContent = "Seul les lettres en minuscules et Majuscule sont autorisées.";
        }
      }
    );

    //vi- Reset du message d'erreur
    ba_lastName.addEventListener(
      'focusin', function () {
        ba_lastNameErrorMsg.textContent = " ";
      }
    );
  };


  //v--------------------------------------
  //v- FONCTION - Gestion Champ address.
  //v- ca marche OK
  function Fct_ItChange_address() {

    const ba_address = document.getElementById('address');
    const ba_addressErrorMsg = document.getElementById('addressErrorMsg');

    ba_address.addEventListener(
      'change', function () {

        let message = ba_address.value;
        let regex = /([0-9]{1,3}) (.*) /;

        if (message.match(regex)) {
        } else {
          ba_addressErrorMsg.textContent = "Erreur dans le format. Exemple viable: 10 rue du Coral";
        }
      }
    );

    //vi- Reset du message d'erreur
    ba_address.addEventListener(
      'focusin', function () {
        ba_addressErrorMsg.textContent = " ";
      }
    );
  };

  //v--------------------------------------
  //v- FONCTION - Gestion Champ city.
  //v- ca marche OK
  function Fct_ItChange_city() {

    const ba_city = document.getElementById('city');
    const ba_cityErrorMsg = document.getElementById('cityErrorMsg');

    ba_city.addEventListener(
      'change', function () {

        let message = ba_city.value;
        let regex = /(.*) ([0-9]{5})/;

        if (message.match(regex)) {
        } else {
          ba_cityErrorMsg.textContent = "Erreur dans le format. Exemple viable: Dardilly 69570";
        }
      }
    );

    //vi- Reset du message d'erreur
    ba_city.addEventListener(
      'focusin', function () {
        ba_cityErrorMsg.textContent = " ";
      }
    );
  };

  //v--------------------------------------
  //v- FONCTION - Gestion Champ email.
  //v- ca marche OK

  function Fct_ItChange_email() {

    const ba_email = document.getElementById('email');
    const ba_emailErrorMsg = document.getElementById('emailErrorMsg');

    ba_email.addEventListener(
      'change', function () {

        let message = ba_email.value;

        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;


        if (message.match(regex)) {
        } else {
          ba_emailErrorMsg.textContent = "Erreur dans le format. Exemple viable: xxxx@yyyyy.com";
        }
      }
    );

    //vi- Reset du message d'erreur
    ba_email.addEventListener(
      'focusin', function () {
        ba_emailErrorMsg.textContent = " ";
      }
    );
  };
}



//v- FONCTION ----------------------------------------
//v- Affichage des Articles choisies.
//v- Raff Visu & LocalStorage.
//v- Ca marche OK
function Fct_VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice, qqté) {

  // vi-repérage Id auquels on va rajouter les balises dans le DOM
  const ba_cart__items = document.getElementById('cart__items');

  if (true) {

    // v- début creaction balise article ------------------------------------------
    const ba_article = document.createElement("article");
    // vi- créaction des class
    ba_article.className = "cart__item";

    // o- https://developer.mozilla.org/fr/docs/Learn/HTML/Howto/Use_data_attributes
    // o- Pour rajouter des attributs

    // j- mettre en place l'id du localStore ************************
    let newAttr = document.createAttribute("data-id");
    newAttr.nodeValue = iid; //"12546"; // v- modif OK id
    ba_article.setAttributeNode(newAttr);

    // j- mettre en place le color du localStore ***********************
    newAttr = document.createAttribute("data-color");
    newAttr.nodeValue = ccolor; //"white";// v- modif OK color
    ba_article.setAttributeNode(newAttr);

    // vi- accrochage "article" a parent
    ba_cart__items.appendChild(ba_article);
    // v- fin creaction balise article --

    // o- le if permet la créaction indentation pour moi
    if (true) {
      // v- début creaction balise div --
      const ba_div = document.createElement("div");
      // vi- créaction des class 
      ba_div.className = "cart__item__img";
      // vi- accrochage a la balise div
      ba_article.appendChild(ba_div);
      // v- fin creaction balise div --

      // v- début creaction balise img --
      // <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`
      // j- mettre en place les info du fletch , provisoire *******************
      let name = nname;       //"Kanap 01" // v- modif OK name
      let imageUrl = iimage;  //"http://localhost:3000/images/kanap01.jpeg"; // v- modif OK image
      let altTxt = aaltTxt;   // "Photo d'un canapé bleu, deux places"// v- modif OK altTxt

      altTxt = altTxt + ', ' + name;

      const ba_image = document.createElement("img");
      ba_image.src = imageUrl;            //"http://localhost:3000/images/kanap01.jpeg";
      ba_image.alt = altTxt;              //"Photo d'un canapé bleu, deux places";
      // vi- accrochage a la balise img
      ba_div.appendChild(ba_image);
      // v- fin creaction balise img --
    }

    // o- le if permet la créaction indentation pour moi
    if (true) {
      // v- début creaction balise div --
      let ba_div_cart__item__content = document.createElement("div");
      // vi- créaction class 
      ba_div_cart__item__content.className = "cart__item__content";
      // vi- accrochage a la balise div
      ba_article.appendChild(ba_div_cart__item__content);
      // v- fin creaction balise div --

      if (true) {
        // v- début creaction balise div --
        let ba_div_cart__item__content__description = document.createElement("div");
        // vi- créaction class 
        ba_div_cart__item__content__description.className = "cart__item__content__description";
        // vi- accrochage a la balise div
        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__description);

        if (true) {
          let ba_h2 = document.createElement("h2");
          // j- mettre info dynamique
          let name = nname;
          ba_h2.textContent = name;   //"Nom du produit KANAP 034";  // v- modif OK name
          ba_div_cart__item__content__description.appendChild(ba_h2);

          let ba_p_couleur = document.createElement("p");
          // j- mettre info dynamique
          ba_p_couleur.textContent = ccolor;   //"Vert"; // v- modif OK color
          ba_div_cart__item__content__description.appendChild(ba_p_couleur);

          let ba_p_prix = document.createElement("p");
          // j- mettre info dynamique
          ba_p_prix.textContent = pprice; //"42,00";// v- modif OK price
          ba_div_cart__item__content__description.appendChild(ba_p_prix);
          // v- fin creaction balise div --
        }
      }

      if (true) {
        // v- début creaction balise div --
        let ba_div_cart__item__content__settings = document.createElement("div");
        // vi- créaction class 
        ba_div_cart__item__content__settings.className = "cart__item__content__settings";
        // vi- accrochage a la balise div
        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__settings);
        // v- fin creaction balise div --


        if (true) {
          // v- début creaction balise div --
          let ba_div_cart__item__content__settings__quantity = document.createElement("div");
          // vi- créaction class 
          ba_div_cart__item__content__settings__quantity.className = "cart__item__content__settings__quantity";
          // vi- accrochage a la balise div
          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__quantity);

          let ba_p_qte = document.createElement("p");
          // j- mettre info dynamique
          ba_p_qte.textContent = "Qté : ";
          ba_div_cart__item__content__settings__quantity.appendChild(ba_p_qte);

          // vi- creaction Imput
          let ba_input = document.createElement("input");
          // vi- mise en place info associée à l'input
          ba_input.className = "itemQuantity";
          ba_input.id = iid_ccolor; // v- ok ca marche créaction d'un ID

          ba_input.name = "itemQuantity";
          ba_input.type = "number";
          ba_input.min = "1";
          ba_input.max = "100";

          ba_input.value = qqté;


          // j- a supprimer , mais fonctionne aussi
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

          ba_div_cart__item__content__settings__quantity.appendChild(ba_input);
          // v- fin creaction balise div --

          // j- inhiber pour éviter trop d'info dans la console
          // fctVisu(true, 2, ba_input); 

        }

        if (true) {
          // v- Début creaction balise div --
          let ba_div_cart__item__content__settings__delete = document.createElement("div");
          // vi- créaction class 
          ba_div_cart__item__content__settings__delete.className = "cart__item__content__settings__delete";
          // vi- accrochage a la balise div
          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__delete);
          // v- fin creaction balise div --

          // v- Début creaction balise p --
          let ba_p_delete = document.createElement("p");
          // vi- créaction class, Id etc.. 
          ba_p_delete.className = "deleteItem";
          ba_p_delete.id = iid_ccolor + "-" + "delete";
          ba_p_delete.textContent = "Supprimer";
          // vi- accrochage a la balise div
          ba_div_cart__item__content__settings__delete.appendChild(ba_p_delete);
          // v- Fin creaction balise p --          
        }
      }
    }
  }
};


// vi- IT Focus Out
// j- a supprimer remplacer par change
function Fct_ItFocusOut(iid_ccolor) {

  let itemQuantity = document.getElementById(iid_ccolor);


  // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT
  // j- Utilisation de  change a la place, celui là inutil, a virer.
  itemQuantity.addEventListener(
    'focusout', function () {

      // console.log(quantity);
      // console.log(itemQuantity.value);

      if (itemQuantity.value > 100 ||
        itemQuantity.value < 1 ||
        itemQuantity.value == "") {

        itemQuantity.value = 1;
      }

      // let toto = id + "-" + colors.value;
      // console.log(toto);

      // addPanier({ id: id, "color": colors.value, "quantity": parseInt(quantity.value) });

      // console.log("iid_ccolor: ", iid_ccolor, " itemQuantity.value: ", parseInt(itemQuantity.value));
      // addPanier({ id: iid_ccolor, "quantity": parseInt(itemQuantity.value) });

      // let x = 2.960024578;
      // let res = x.toFixed(2);

      // let x = 2.960024578;
      // let res = Math.round(x * 100) / 100;

      let x = parseInt(itemQuantity.value);
      // console.log("x : ", x);
      let y = x.toFixed(2);
      // console.log("y : ", y);

      // let y = Math.round(x * 100) / 100;

      changeQuantityPanier({ id: iid_ccolor }, y);

      // changeQuantityPanier({ id: iid_ccolor }, parseInt(itemQuantity.value));

      Fct_aff_nbreArticle_et_prixTotal();
      window.location.reload(); // v- Lance le raff. de la page.
    }
  );
};
