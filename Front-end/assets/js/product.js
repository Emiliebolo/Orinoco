
(async () => {
    const productList = await listePeluches()
    
    })()
 
       // la fonction dans l'objet permet afficher la struture des produits
     async function listePeluches () {

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const id = urlParams.get('id');
console.log(id);

const productList = await Ajax('http://localhost:3000/api/teddies/' + id);
console.log (productList);

let products = new Products(
    productList.description,
    productList.imageUrl,
    productList.colors,
    productList.name,
    productList.price,
    productList._id,
);
console.log(products);

let customProduct = document.getElementById('customProduct');

let customPeluche = document.createElement('article');
let customName = document.createElement('h2');
let customImage = document.createElement('img');
let customDescription = document.createElement('div');
let customDescrpt = document.createElement('p');
let customCheck = document.createElement('div');
let customLabel = document.createElement('label');
let customPrice =document.createElement('h3');
let customButton = document.createElement('button');

customPeluche.setAttribute('class', 'article animation');
customName.setAttribute('class','Name');
customImage.setAttribute('src', products.ImageUrl);
customImage.setAttribute('alt','Peluche à personnaliser');
customDescription.setAttribute('div','descriptionPeluche');
customCheck.setAttribute('class','check');
customLabel.setAttribute('id','select');
customButton.setAttribute('class','btn');
customButton.setAttribute('type','button');
customButton.setAttribute('href','#'+ products._id);
customButton.setAttribute('id','button');


customProduct.appendChild('customPeluche');
customPeluche.appendChild('customName');
customPeluche.appendChild('customImage');
customPeluche.appendChild('customDescription');
customDescription.appendChild('customDescrpt');
customDescription.appendChild('customPrice');
customDescription.appendChild('customCheck');
customCheck.appendChild('customLabel');
customCheck.appendChild('customButton');


customName.textContent = products.name;
customPrice.textContent = products.price / 100 + ',00 €';
customDescrpt.textContent = products.description;
customButton.textContent = 'Ajouter la peluche au panier';




// Boucle pour faire appel aux differentes options de couleurs dans la partie label, selon la peluche
 let select = document.getElementById('select');
 for (let i=0; i < products.colors.length; i++){
     let option = document.createElement('option');
     option.setAttribute('id','optionColor');
     select.appendChild('option');
     slect.textContent = products.colors[i];
 }

 // stocker la peluche dans le panier

let basket = document.getElementById('button');

// click buton ajout panier
basket.addEventListener('click', function(){

numberPlush('products');
totalprice('produts');
})






}






































































