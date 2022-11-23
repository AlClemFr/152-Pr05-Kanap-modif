
// 
let urlCourant = window.location.href;
console.log(urlCourant);

let urlCourantBis = new URL(urlCourant);
let id = urlCourantBis.searchParams.get("id");
console.log(id);


// vi- ----------------------------------------------------
// vi- ----------------------------------------------------

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
          // let i = data.colors.length;
          // console.log(i);
          let i = 0;
          total = "";
          color = "";

          for (i; i < data.colors.length; i++) {
            color = data.colors[i];
            total += `<option value="` + color + `">` + color + `</option>`;
            // total += `<option value="` + data.colors[i] + `">` + data.colors[i] + `</option>`;
          }
          // console.log(total);
          document.querySelector('#colors').innerHTML = total;
        }
      )
      .catch((err) => console.log(`erreur: ` + err))
  );

