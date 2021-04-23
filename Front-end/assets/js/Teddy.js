class Teddy {
  constructor(custom){
    this.i = 0;
    this.name = custom.name;
    this.img = custom.imageUrl;
    this.description = custom.description;
    this.price = custom.price / 100 + ", 00€";
    this.id = custom._id;
    this.colors = custom.colors;
    this.customProduct = document.getElementById('customProduct');
    this.customPeluche = document.createElement('div');
    } 
    // attribution d'une class et ajout de l'image
   
 insertImg(){
this.customPeluche.setAttribute('class', 'card ');
this.customProduct.appendChild(this.customPeluche);

const customImg = document.createElement('img');
customImg.setAttribute('src', this.img);
customImg.setAttribute('alt', this.name);
customImg.setAttribute('class', 'peluches');

this.customPeluche.appendChild(customImg);
}

insertName() {
const customName = document.createElement('h2');
customName.innerHTML = this.name;

this.customPeluche.appendChild(customName);
}

insertDescription () {
const customDescription = document.createElement('p');
customDescription.setAttribute('class', 'customPeluche');
customDescription.innerHTML = this.description;

this.customPeluche.appendChild(customDescription);
}

insertPrice () {
const customPrice = document.createElement('p');
customPrice.setAttribute('class', 'prix');
customPrice.innerHTML = this.price;

this.customPeluche.appendChild(customPrice);
}

insertColor () {
const customLabel = document.createElement('label');
customLabel.setAttribute('class', 'color-list');
customLabel.textContent = ' Nos Couleurs disponibles: ';

this.customPeluche.appendChild(customLabel);

const customSelect = document.createElement('select');
customSelect.setAttribute('class', 'selectColor');

customLabel.appendChild(customSelect);

for(let i = 0; i < this.colors.length; i++) {
  const customOption = document.createElement('option');
  customOption.textContent = this.colors[i];
  customOption.setAttribute('value', this.colors[i]);
  customOption.setAttribute('required', '');
  customSelect.appendChild(customOption);
}
}

insertBtnAddCart () {
const containAddBtn = document.createElement('div');

this.customPeluche.appendChild(containAddBtn);

const btnAddCart = document.createElement('a');
btnAddCart.setAttribute('class', 'addToCart');
btnAddCart.setAttribute('href', 'panier.html');

btnAddCart.innerHTML = 'Ajouter au panier';

containAddBtn.appendChild(btnAddCart);

const cart = new CartObject();
document.querySelector('.addToCart').addEventListener('click', () => {
  cart.addToCart({
  'name': this.name,
  'color': document.querySelector(".selectColor").value,
  'price': this.price,
  'id': this.id,
  
  });  
});
}

displayOneTeddy() {
this.insertImg();
this.insertName();
this.insertDescription();
this.insertPrice();
this.insertColor();
this.insertBtnAddCart();
}

}
    /* let customPeluche = document.createElement('article');
let customName = document.createElement('h2');
let customImage = document.createElement('img');
let customDescription = document.createElement('div');
let customDescrpt = document.createElement('p');
let customCheck = document.createElement('div');
let customLabel = document.createElement('label');
let customPrice = document.createElement('h3');
let customButton = document.createElement('button');

customPeluche.setAttribute('class', 'article animation');
customName.setAttribute('class','Name');
customImage.setAttribute('src', custom.ImageUrl);
customImage.setAttribute('alt','Peluche à personnaliser');
customDescription.setAttribute('div','descriptionPeluche');
customCheck.setAttribute('class','check');
customLabel.setAttribute('id','select');
customButton.setAttribute('class','btn');
customButton.setAttribute('type','button');
customButton.setAttribute('href','#'+ custom._id);
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


customName.textContent = custom.name;
customPrice.textContent = custom.price / 100 + ',00 €';
customDescrpt.textContent = custom.description;
customButton.textContent = 'Ajouter la peluche au panier';




// Boucle pour faire appel aux differentes options de couleurs dans la partie label, selon la peluche
let select = document.getElementById('select');
for (let i=0; i < custom.colors.length; i++){
 let option = document.createElement('option');
 option.setAttribute('id','optionColor');
 select.appendChild('option');
 select.textContent = custom.colors;
}

 const cart = new CartObject();
 document.querySelector('.addToCart').addEventListener('click', () => {
   cart.addToCart({
   'name': this.name,
   'price': this.price,
   'id': this.id,
   'color': document.querySelector(".colorSelect").value,
   });  
 }); */




 

     
