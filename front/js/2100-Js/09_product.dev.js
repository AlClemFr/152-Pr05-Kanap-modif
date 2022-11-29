"use strict";

// 
var urlCourant = window.location.href;
console.log(urlCourant);
var urlCourantBis = new URL(urlCourant);
var id = urlCourantBis.searchParams.get("id");
console.log(id); // vi- ----------------------------------------------------
// vi- ----------------------------------------------------

var url = "http://localhost:3000/api/products/" + id;
console.log(url);
var Myfetch = fetch(url).then(function (responsive) {
  return responsive.json().then(function (data) {
    // j- pour voir , concerver
    // console.log(data);
    // j- pour voir , concerver
    // console.log(i._id + " " +
    //   i.name + " " +
    //   i.imageUrl + " " +
    //   i.description + " " +
    //   i.altTxt);
    var total = ""; //b---------

    document.querySelector('#title').innerHTML = data.name; //b---------

    var altTxt = data.altTxt + ', ' + data.name;
    total = "\n          <img src=\"" + data.imageUrl + "\" alt= \"" + altTxt + "\"></img>";
    document.querySelector('.item__img').innerHTML = total; //b---------      

    document.querySelector('#title2').innerHTML = data.name; //b---------  
    // v- mettre en place la vigule, Fait OK     

    var poub = parseFloat(data.price);
    poub /= 10;
    console.log(poub);
    var price = poub.toString();
    document.querySelector('#price').innerHTML = price; //b---------  

    document.querySelector('#description').innerHTML = data.description; //b---------  
    // let i = data.colors.length;
    // console.log(i);

    var i = 0;
    total = "";
    color = "";

    for (i; i < data.colors.length; i++) {
      color = data.colors[i];
      total += "<option value=\"" + color + "\">" + color + "</option>"; // total += `<option value="` + data.colors[i] + `">` + data.colors[i] + `</option>`;
    } // console.log(total);


    document.querySelector('#colors').innerHTML = total;
  })["catch"](function (err) {
    return console.log("erreur: " + err);
  });
}); // v- Evenement clic sur le bouton addtoCard // Exemple OC ok

var addToCard = document.getElementById('addToCart'); // On récupère l'élément sur lequel on veut détecter le clic

addToCard.addEventListener('click', function () {
  // On écoute l'événement click
  // addToCard.innerHTML = total + "C'est cliqué !";
  addToCard.innerHTML = "C'est cliqué !"; // On change le contenu de notre élément pour afficher "C'est cliqué !"
});