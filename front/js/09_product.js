

// v- Récupération lien courant.
let urlCourant = window.location.href;
// console.log(urlCourant);
fctVisu(false, 2, urlCourant);


// v- Récupération Id procduit dans le lien.
let urlCourantBis = new URL(urlCourant);
let id = urlCourantBis.searchParams.get("id");

// vi- ----------------------------------------------------
// vi- ----------------------------------------------------

// v- Récupération des datas associée à l'Id
let url = "http://localhost:3000/api/products/" + id;
console.log(url);

let Myfetch = fetch(url)
  .then(
    (responsive) => responsive.json()
      .then(
        (data) => {

          // j- pour voir , concerver
          // console.log(data);

          // j- pour voir , concerver
          // console.log(i._id + " " +
          //   i.name + " " +
          //   i.imageUrl + " " +
          //   i.description + " " +
          //   i.altTxt);

          if (true) {
            let total = "";

            //b---------
            document.querySelector('#title').innerHTML = data.name;

            //b---------
            let altTxt = data.altTxt + ', ' + data.name;
            total = `
            <img src="` + data.imageUrl + `" alt= "` + altTxt + `"></img>`

            document.querySelector('.item__img').innerHTML = total;

            //b---------      
            document.querySelector('#title2').innerHTML = data.name;

            //b---------  
            // v- mettre en place la vigule, Fait OK     
            let poub = parseFloat(data.price);
            poub /= 10;
            console.log(poub);

            let price = poub.toString();

            document.querySelector('#price').innerHTML = price;

            //b---------  
            document.querySelector('#description').innerHTML = data.description;

            //b---------  

            let i = 0;
            total = "";
            let color = "";

            for (i; i < data.colors.length; i++) {
              let color = data.colors[i];
              total += `<option value="` + color + `">` + color + `</option>`;
              // total += `<option value="` + data.colors[i] + `">` + data.colors[i] + `</option>`;
            }
            // console.log(total);
            document.querySelector('#colors').innerHTML = total;
          }

        }
      )
      .catch((err) => console.log(`erreur: ` + err))
  );


const colors = document.getElementById('colors');
const quantity = document.getElementById('quantity');
const addToCard = document.getElementById('addToCart');


// j- raff page on remet a zero la quantity
quantity.value = 0;


// j- teste récupération Quantité
// const quantity = document.getElementById('quantity');

// j- on écoute l'évenement hors champs
quantity.addEventListener('focusout', function () {    // On écoute l'événement click

  // console.log(quantity);
  // console.log(quantity.value);

  if (quantity.value > 100 ||
    quantity.value < 0 ||
    quantity.value == "") {

    quantity.value = 0;
  }
}
);


// v- Evenement clic sur le bouton addtoCard // Exemple OC ok
// const addToCard = document.getElementById('addToCart');
// On récupère l'élément sur lequel on veut détecter le clic
addToCard.addEventListener('click', function () {    // On écoute l'événement click

  if (quantity.value <= 100 &
    quantity.value > 0) {

    // console.log(id);
    // console.log(colors.value);
    // console.log(quantity.value);


    let toto = id + "-" + colors.value;
    console.log(toto);

    // addPanier({ id: id, "color": colors.value, "quantity": parseInt(quantity.value) });
    addPanier({ id: toto, "quantity": parseInt(quantity.value) });

  }


  // addToCard.innerHTML = total + "C'est cliqué !";
  if (false) {
    addToCard.innerHTML = "C'est cliqué !";
  }
  // On change le contenu de notre élément pour afficher "C'est cliqué !"
}
);

  // addToCard.innerHTML = total + "C'est cliqué !";
  // quantity.innerHTML = "C'est cliqué !";
  // On change le contenu de notre élément pour afficher "C'est cliqué !"







