
let url = "http://localhost:3000/api/products/";

var Momo = "Gros Naze";
globalThis.yourGlobalVariable = "";

let Myfetch = fetch(url)
  .then(
    (responsive) => responsive.json()
      .then(
        (data) => {


          Momo = data;
          // console.log("01: ");

          let objLinea = JSON.stringify(Momo);
          localStorage.setItem("obj", objLinea);

          // if (false) {
          //   let BOBO = localStorage.getItem("obj");
          //   let BIBI = JSON.parse(BOBO);

          //   console.log(BIBI);
          // }

          // o- Remplacement innerHTML par créaction dans le DOM "direct live"
          if (true) {

            // vi-repérage Id auquels on va rajouter les balises dans le DOM
            const id_items = document.getElementById('items');

            for (let i of data) {
              // vi- créaction balise a------------------------------------------
              const balise_a = document.createElement("a");
              // vi- Set the href property. 
              // j- inclure l'id dynamique
              // <a href="./09_product.html?id=${i._id}"></a>
              balise_a.href = `./09_product.html?id=${i._id}`;
           
              // vi- creaction balise article ------------------------------------------
              const balise_article = document.createElement("article");
              balise_a.appendChild(balise_article);

              // j- le if permet de créer une indentation
              if (true) {
                
                // vi- creaction balise img ------------------------------------------
                // <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`
                altTxt = i.altTxt + ', ' + i.name;

                const balise_image = document.createElement("img");
                balise_image.src = i.imageUrl;          //"http://localhost:3000/images/kanap01.jpeg";
                balise_image.alt = altTxt;              //"Photo d'un canapé bleu, deux places";
                balise_article.appendChild(balise_image);

                // vi- creaction balise h3 ------------------------------------------
                const balise_h3 = document.createElement("h3");
                // j- mettre une class productName
                //<h3 class="productName">${i.name}</h3>
                balise_h3.className = i.name;
                balise_h3.textContent = i.name;
                balise_article.appendChild(balise_h3);

                // vi- creaction balise p ------------------------------------------
                const balise_p = document.createElement("p");
                // j- mettre une class productDescription ???  a 
                // <p class="productDescription">${i.description}</p>

                // balise_p.className = i.description;
                balise_p.textContent = i.description; //"0 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

                balise_article.appendChild(balise_p);
              }

              id_items.appendChild(balise_a);
            }
          }


          // o- pas touche
          // o- créaction de la trame valide
          if (false) {

            // vi-repérage Id auquels on va rajouter les balises dans le DOM
            const id_items = document.getElementById('items');


            // vi- créaction balise a------------------------------------------
            const balise_a = document.createElement("a");
            // vi- Set the href property. 
            // j- inclure l'id dynamique
            balise_a.href = "./09_product.html?id=07fb5b75607497b96722bda5b504926";

            // vi- creaction balise article ------------------------------------------
            const balise_article = document.createElement("article");
            balise_a.appendChild(balise_article);

            if (true) {
              // vi- creaction balise img ------------------------------------------
              const balise_image = document.createElement("img");
              balise_image.src = "http://localhost:3000/images/kanap01.jpeg";
              balise_image.alt = "Photo d'un canapé bleu, deux places";
              balise_article.appendChild(balise_image);

              // vi- creaction balise h3 ------------------------------------------
              const balise_h3 = document.createElement("h3");
              // j- mettre une class productName

              balise_article.appendChild(balise_h3);

              // vi- creaction balise p ------------------------------------------
              const balise_p = document.createElement("p");
              // j- mettre une class productDescription
              // document.querySelector('p').textContent += ', POPOMAN'
              balise_p.textContent = "0 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";



              balise_article.appendChild(balise_p);
            }

            id_items.appendChild(balise_a);
          }


          // o- version avec innerHTML non valable
          if (false) {
            // j- pour voir , concerver
            // console.log(data);

            let altTxt = "";

            let total = "";
            let titi = "";

            for (let i of data) {
              // console.log("i: ");
              // console.log(i);

              // j- pour voir , concerver
              // console.log(i._id + " " +
              //   i.name + " " +
              //   i.imageUrl + " " +
              //   i.description + " " +
              //   i.altTxt);

              altTxt = i.altTxt + ', ' + i.name;

              titi =
                `<a href="./09_product.html?id=${i._id}">
            <article>
            <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`
                +
                `<h3 class="productName">${i.name}</h3>
              <p class="productDescription">${i.description}</p>
            </article>
            </a>`;

              total += titi;
            };

            document.querySelector('#items').innerHTML = total;
          }

        }
      )
      .catch((err) => console.log(`erreur: ` + err))
  );

if (false) {
  let BOBO = localStorage.getItem("obj");
  let BIBI = JSON.parse(BOBO);

  console.log("02: ");
  console.log(BIBI);
}

// j- inhiber pour éviter d'avoir trop d'info dans la console
if (false) {
  console.log("coucou: ")
  getPanier();
}








// vi- *************************************************************
// vi- *************************************************************
// vi- *************************************************************
// r- Ce qui suit a effacer par la suite

if (false) {

  let _id = "107fb5b75607497b96722bda5b504926";
  let _name = "Kanap Sinopé";
  let price = 1849;
  let imageUrl = "http://localhost:3000/images/kanap01.jpeg";
  let description = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let altTxt0 = "Photo d'un canapé bleu, deux places";
  let altTxt = altTxt0 + ', ' + _name;



  //  <a href="./product.html?id=42">
  // <article>
  //   <img src=".../product01.jpg"
  //     alt="Lorem ipsum dolor sit amet, Kanap name1">
  //   <h3 class="productName">Kanap name1</h3>
  //   <p class="productDescription">Dis enim malesuada risus sapien
  //     gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida
  //     nulla nisl arcu.</p>
  // </article>
  // </a>

  // {/* < a href = ${url}${_id} ></a> */ ${altTxt}}

  // O- info 1er Kanap
  let i = 0;
  let total = "";
  let titi = "";


  for (i; i < 8; i++) {
    titi =
      `<a href="./product.html">
    <article>
    <img src="` + imageUrl + `" alt= "` + altTxt + `"></img>`
      +
      `<h3 class="productName">${_name}</h3>
        <p class="productDescription">${description}</p>
    </article>
    </a>`;

    console.log(i);
    total += titi;
  }

  document.querySelector('#items').innerHTML = total;


  // console.log(titi);
  // console.log(_name);
  // console.log(altTxt);

}


