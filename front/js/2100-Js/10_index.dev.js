"use strict";

var url = "http://localhost:3000/api/products/";
var Momo = "Gros Naze";
globalThis.yourGlobalVariable = "";
var Myfetch = fetch(url).then(function (responsive) {
  return responsive.json().then(function (data) {
    Momo = data; // console.log("01: ");

    var objLinea = JSON.stringify(Momo);
    localStorage.setItem("obj", objLinea); // if (false) {
    //   let BOBO = localStorage.getItem("obj");
    //   let BIBI = JSON.parse(BOBO);
    //   console.log(BIBI);
    // }
    // o- Remplacement innerHTML par créaction dans le DOM "direct live"

    if (true) {
      // vi-repérage Id auquels on va rajouter les balises dans le DOM
      var id_items = document.getElementById('items');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
          // vi- créaction balise a------------------------------------------
          var balise_a = document.createElement("a"); // vi- Set the href property. 
          // j- inclure l'id dynamique
          // <a href="./09_product.html?id=${i._id}"></a>

          balise_a.href = "./09_product.html?id=".concat(i._id); // vi- creaction balise article ------------------------------------------

          var balise_article = document.createElement("article");
          balise_a.appendChild(balise_article); // j- le if permet de créer une indentation

          if (true) {
            // vi- creaction balise img ------------------------------------------
            // <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`
            altTxt = i.altTxt + ', ' + i.name;
            var balise_image = document.createElement("img");
            balise_image.src = i.imageUrl; //"http://localhost:3000/images/kanap01.jpeg";

            balise_image.alt = altTxt; //"Photo d'un canapé bleu, deux places";

            balise_article.appendChild(balise_image); // vi- creaction balise h3 ------------------------------------------

            var balise_h3 = document.createElement("h3"); // j- mettre une class productName
            //<h3 class="productName">${i.name}</h3>

            balise_h3.className = i.name;
            balise_h3.textContent = i.name;
            balise_article.appendChild(balise_h3); // vi- creaction balise p ------------------------------------------

            var balise_p = document.createElement("p"); // j- mettre une class productDescription ???  a 
            // <p class="productDescription">${i.description}</p>
            // balise_p.className = i.description;

            balise_p.textContent = i.description; //"0 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

            balise_article.appendChild(balise_p);
          }

          id_items.appendChild(balise_a);
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
    } // o- pas touche
    // o- créaction de la trame valide


    if (false) {
      // vi-repérage Id auquels on va rajouter les balises dans le DOM
      var _id_items = document.getElementById('items'); // vi- créaction balise a------------------------------------------


      var _balise_a = document.createElement("a"); // vi- Set the href property. 
      // j- inclure l'id dynamique


      _balise_a.href = "./09_product.html?id=07fb5b75607497b96722bda5b504926"; // vi- creaction balise article ------------------------------------------

      var _balise_article = document.createElement("article");

      _balise_a.appendChild(_balise_article);

      if (true) {
        // vi- creaction balise img ------------------------------------------
        var _balise_image = document.createElement("img");

        _balise_image.src = "http://localhost:3000/images/kanap01.jpeg";
        _balise_image.alt = "Photo d'un canapé bleu, deux places";

        _balise_article.appendChild(_balise_image); // vi- creaction balise h3 ------------------------------------------


        var _balise_h = document.createElement("h3"); // j- mettre une class productName


        _balise_article.appendChild(_balise_h); // vi- creaction balise p ------------------------------------------


        var _balise_p = document.createElement("p"); // j- mettre une class productDescription
        // document.querySelector('p').textContent += ', POPOMAN'


        _balise_p.textContent = "0 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        _balise_article.appendChild(_balise_p);
      }

      _id_items.appendChild(_balise_a);
    } // o- version avec innerHTML non valable


    if (false) {
      // j- pour voir , concerver
      // console.log(data);
      var _altTxt = "";
      var total = "";
      var titi = "";
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _i = _step2.value;
          // console.log("i: ");
          // console.log(i);
          // j- pour voir , concerver
          // console.log(i._id + " " +
          //   i.name + " " +
          //   i.imageUrl + " " +
          //   i.description + " " +
          //   i.altTxt);
          _altTxt = _i.altTxt + ', ' + _i.name;
          titi = "<a href=\"./09_product.html?id=".concat(_i._id, "\">\n            <article>\n            <img src=\"") + _i.imageUrl + "\" alt= \"" + _altTxt + "\"></img>" + "<h3 class=\"productName\">".concat(_i.name, "</h3>\n              <p class=\"productDescription\">").concat(_i.description, "</p>\n            </article>\n            </a>");
          total += titi;
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

      ;
      document.querySelector('#items').innerHTML = total;
    }
  })["catch"](function (err) {
    return console.log("erreur: " + err);
  });
});

if (false) {
  var BOBO = localStorage.getItem("obj");
  var BIBI = JSON.parse(BOBO);
  console.log("02: ");
  console.log(BIBI);
} // j- inhiber pour éviter d'avoir trop d'info dans la console


if (false) {
  console.log("coucou: ");
  getPanier();
} // vi- *************************************************************
// vi- *************************************************************
// vi- *************************************************************
// r- Ce qui suit a effacer par la suite


if (false) {
  var _id = "107fb5b75607497b96722bda5b504926";
  var _name = "Kanap Sinopé";
  var price = 1849;
  var imageUrl = "http://localhost:3000/images/kanap01.jpeg";
  var description = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var altTxt0 = "Photo d'un canapé bleu, deux places";

  var _altTxt2 = altTxt0 + ', ' + _name; //  <a href="./product.html?id=42">
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


  var i = 0;
  var total = "";
  var titi = "";

  for (i; i < 8; i++) {
    titi = "<a href=\"./product.html\">\n    <article>\n    <img src=\"" + imageUrl + "\" alt= \"" + _altTxt2 + "\"></img>" + "<h3 class=\"productName\">".concat(_name, "</h3>\n        <p class=\"productDescription\">").concat(description, "</p>\n    </article>\n    </a>");
    console.log(i);
    total += titi;
  }

  document.querySelector('#items').innerHTML = total; // console.log(titi);
  // console.log(_name);
  // console.log(altTxt);
}