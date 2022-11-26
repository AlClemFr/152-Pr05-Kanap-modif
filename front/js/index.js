
let url = "http://localhost:3000/api/products/";

var Momo = "Gros Naze";
globalThis.yourGlobalVariable = "";

let Myfetch = fetch(url)
  .then(
    (responsive) => responsive.json()
      .then(
        (data) => {


          Momo = data;
          console.log("01: ");

          let objLinea = JSON.stringify(Momo);
          localStorage.setItem("obj", objLinea);

          // if (false) {
          //   let BOBO = localStorage.getItem("obj");
          //   let BIBI = JSON.parse(BOBO);

          //   console.log(BIBI);
          // }

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
              `<a href="./product.html?id=${i._id}">
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
      )
      .catch((err) => console.log(`erreur: ` + err))
  );

if (true) {
  let BOBO = localStorage.getItem("obj");
  let BIBI = JSON.parse(BOBO);

  console.log("02: ");
  console.log(BIBI);
}


// vi- *************************************************************
// vi- *************************************************************
// vi- *************************************************************

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


