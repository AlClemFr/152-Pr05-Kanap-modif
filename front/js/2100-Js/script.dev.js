"use strict";

var url = "http://localhost:3000/api/products/";
var Myfetch = fetch(url).then(function (responsive) {
  return responsive.json().then(function (data) {
    // j- pour voir , concerver
    // console.log(data);
    var altTxt = "";
    var total = "";
    var titi = ""; // o-provisoire

    var coco = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
        // j- pour voir , concerver
        // console.log(i._id + " " +
        //   i.name + " " +
        //   i.imageUrl + " " +
        //   i.description + " " +
        //   i.altTxt);
        altTxt = i.altTxt + ', ' + i.name;
        titi = "<a href=\"./product.html?id=".concat(i._id, "\">\n            <article>\n            <img src=\"") + i.imageUrl + "\" alt= \"" + altTxt + "\"></img>" + "<h3 class=\"productName\">".concat(i.name, "</h3>\n              <p class=\"productDescription\">").concat(coco, " ").concat(i.description, "</p>\n            </article>\n            </a>");
        total += titi;
        coco++;
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

    ;
    document.querySelector('#items').innerHTML = total;
  })["catch"](function (err) {
    return console.log("erreur: " + err);
  });
}); // vi- *************************************************************
// vi- *************************************************************
// vi- *************************************************************

if (false) {
  var _id = "107fb5b75607497b96722bda5b504926";
  var _name = "Kanap Sinopé";
  var price = 1849;
  var imageUrl = "http://localhost:3000/images/kanap01.jpeg";
  var description = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  var altTxt0 = "Photo d'un canapé bleu, deux places";
  var altTxt = altTxt0 + ', ' + _name; //  <a href="./product.html?id=42">
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
    titi = "<a href=\"./product.html\">\n    <article>\n    <img src=\"" + imageUrl + "\" alt= \"" + altTxt + "\"></img>" + "<h3 class=\"productName\">".concat(_name, "</h3>\n        <p class=\"productDescription\">").concat(description, "</p>\n    </article>\n    </a>");
    console.log(i);
    total += titi;
  }

  document.querySelector('#items').innerHTML = total; // console.log(titi);
  // console.log(_name);
  // console.log(altTxt);
}