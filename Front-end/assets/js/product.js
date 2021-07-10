const urlParam = window.location.href;
const urlParams = new URL(urlParam);


const id = urlParams.searchParams.get('id');/* tester si id récuperé est ok*/



const url = `http://localhost:3000/api/teddies/` + id;/* tester si renvoie bien les info avant le fetch*/
 fetch(url)
.then(function(response) {
    if (response.status !== 200) {
      console.log('Status Code: ' +
        response.status);
      return;
    }
   

    response.json().then(function(custom) {
        const displayTeddy = new Teddy(custom);
        displayTeddy.displayOneTeddy();
        console.log(custom);
    });
  }
)
.catch(function(error) {
  console.log('Fetch Error', error);
});