// v- *************************
// v- Déclaration des fonctions

// v- Fonction pour afficher le produit
function Fct_VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice, qqté) {

  // vi-repérage Id auquels on va rajouter les balises dans le DOM
  const ba_cart__items = document.getElementById('cart__items');

  // j- inhiber pour éviter trop d'info dans la console
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
function Fct_ItFocusOut(iid_ccolor) {

  let itemQuantity = document.getElementById(iid_ccolor);
  // j- inhiber pour éviter trop d'info dans la console
  // console.log("itemQuantity prod01: ");
  // console.log(itemQuantity);

  // j- raff page on remet a zero la quantity
  // quantity.value = 0;

  // j- on écoute l'évenement hors champs // // On écoute l'événement focus OUT
  itemQuantity.addEventListener(
    'focusout', function () {

      // console.log(quantity);
      // console.log(itemQuantity.value);

      if (itemQuantity.value > 100 ||
        itemQuantity.value < 1 ||
        itemQuantity.value == "") {

        itemQuantity.value = 1;
      }
    }
  );
};


function Fct_ItDelete(iid_ccolor_ddelete) {
  // console.log(iid_ccolor_ddelete);
  let ddelete = document.getElementById(iid_ccolor_ddelete);

  // console.log(" ddelete prod01: ");
  // console.log(ddelete);

  // j- on écoute l'évenement hors champs // // On écoute l'événement clic
  ddelete.addEventListener(
    'click', function () {

      // console.log(quantity);
      console.log("Gros Naze : " + iid_ccolor_ddelete);
    }
  );
};



// v- ***************
// v- Début Programme
// v- Créaction dans le DOM "direct live"

let panier = getPanier();

let iid_ccolor = "";
let iid = "";
let ccolor = "";
let nname = "";
let iimage = "";
let aaltTxt = "";
let pprice = 0.0;
let qqté = "";

let i = 0;


// o- teste si panier vide
if (panier.length > 0) {

  // if (true) {
  for (i; i < panier.length; i++) {

    // vi- Récupération info dans le panier

    // console.log("panier: ", panier, " | longeur: ", panier.length);

    // console.log("id&color:", panier[i].id);
    let poub_id_color = panier[i].id;
    // console.log(poub_id_color);
    let poub_id = poub_id_color.substr(0, 32);
    // console.log(poub_id);

    let poub_color = poub_id_color.substr(33, poub_id_color.length);
    // console.log(poub_color);

    let poub_qte = panier[i].quantity;
    // console.log(poub_qte);


    // vi- Récupération info Id du serveur
    let poub_url = "http://localhost:3000/api/products/" + poub_id;

    // let you = [panier.length, poub_id_color, poub_id, poub_color, poub_qte];
    // let para = "coco"
    // console.log(poub_url);

    if (true) {
      let Myfetch = fetch(poub_url)
        .then(
          (responsive) => responsive.json()
            .then(
              (data) => {

                iid_ccolor = poub_id_color;
                iid = poub_id;
                ccolor = poub_color;

                nname = data.name;                  //"Kanap Sinopé";
                iimage = data.imageUrl;             //"http://localhost:3000/images/kanap01.jpeg";
                aaltTxt = data.altTxt;              //"Photo d'un canapé bleu, deux places";
                pprice = parseInt(data.price) / 10; //"184.90";

                qqté = poub_qte;

                // v- Creaction de la trame article
                Fct_VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice, qqté);

                // v- It surveillance "Focus Out" champs Quantité
                // iid_ccolor = "107fb5b75607497b96722bda5b504926-Blue";
                Fct_ItFocusOut(iid_ccolor);

                // v- It surveillance "clic" sur texte suppression
                iid_ccolor_ddelete = iid_ccolor + "-delete";
                Fct_ItDelete(iid_ccolor_ddelete);
              }
            )
            .catch((err) => console.log(`erreur: ` + err))
        );
    }

  };

} else {

  // j- l'afficher dans la page 
  console.log("panier: vide");
};

