
console.log(document.getElementById('customProduct'));

// récupération des informations du produit précédent avec id.
 class CustomProduct{
   constructor(){
     this.storage = new ListPeluches();
     const ajaxRequest = new Ajax();

     let customParams = new URL(window.location.href).searchParams.get('id');/*let customParams = new URLSearchParams(document.location.search);*/
     console.log(customParams);
     let id = customParams.get("id");
     console.log('id= ' + id);

     ajaxRequest.details(_id).then(
         (customPeluche) => {
         const productPeluche = new ProductPeluche ( customPeluche,"produit",(forms) => {
            const optionChoice = forms.selectChoice.value;
            console.log(customPeluche)
            this.storage.add(customPeluche.id, {
                product: customPeluche,
                option: optionChoice
            })
            document.location.href = "../../pages/produit.html";
        });
        const customElement = productPeluche.render();
        document.getElementById('customProduct').appendChild(customElement);
    })
}
}


      

// Permet l'affichage 
class Display {
    render() {}
}


// Affichage du produit personalisable.
class ProductPeluche extends Display{
  constructor(item, custom, onSubmit){
    super()
    this.item = item;
    this.custom = custom;
    this.onSubmit = onSubmit;
  }
  render(){
     console.info('article')
     const productContainer = document.createElement('div');
     
     const productTitle = new ProductTitle(this.item.name);
     productContainer.appendChild(productTitle.render());

     const productImage = new ProductImage(this.item.imageURL,this.item.description, 'classImg')
     productContainer.appendChild(productImage.render());

     const productDescription = new ProductDescription(this.item.description);
     productContainer.appendChild(productDescription.render());

     const productPrice = new ProductPrice(this.item.price / 100 + ' €');
     productContainer.appendChild(productPrice.render());
     productContainer.setAttribute('class', `${this.custom}`);



     // choix de la couleur
     const labelChoice = document.createElement("label");
     labelChoice.setAttribute("for", "option_select");
     labelChoice.textContent = "Choisissez la couleur de votre peluche:";
     const selectChoice = document.createElement("select");
     selectChoice.setAttribute("name", "option_select");
     selectChoice.setAttribute("class", "form-control mb-3 w-25");
     for (let colors of this.item.colors) {
         var newChoice = document.createElement("Choix");
         var newColors = document.createTextNode(colors);
         newChoice.appendChild(newColors);
         selectChoice.appendChild(newChoice);
     };
     const formContainer = document.createElement('form')

     const buttonContainer = document.createElement('button')
     buttonContainer.addEventListener('click', () => {
         this.onSubmit({
             form: formContainer,
             selectchoice: selectchoice,
         })
     })

     itemContainer.appendChild(labelChoice);
     itemContainer.appendChild(selectChoice);
   
     const buttonLabel = new ButtonLabel (this.item._id);
     itemContainer.appendChild(buttonContainer);
     buttonContainer.id = "link";
     buttonContainer.textContent = 'Ajout panier';
     return itemContainer;
 }
}

class ProductTitle extends Display {
 constructor(name) {
     super();
     this.name = name;
 }

 render() {
     const titleContainer = document.createElement('h1');
     titleContainer.innerHTML = `<span>${this.name}</span>`;
     return titleContainer;
 }
}

class ProductImage extends Display {
 constructor(url, description, classImg) {
     super();
     this.url = url;
     this.description = description;
     this.classImg = classImg;
 }

 render() {
     const imageContainer = document.createElement('img');
     imageContainer.setAttribute('src', this.url)
     imageContainer.setAttribute('alt', this.description);
     imageContainer.setAttribute('class', `${this.classImg}`)
     return imageContainer;

 }
}

class ProductDescription extends Display {
 constructor(contenu) {
     super();
     this.contenu = contenu;
 }

 render() {
     const descriptionContainer = document.createElement('p');
     descriptionContainer.innerHTML = `<span>${this.contenu}</span>`;
     return descriptionContainer;

 }
}

class ProductPrice extends Display {
 constructor(prix) {
     super();
     this.prix = prix;
 }

 render() {
     const priceContainer = document.createElement('p');
     priceContainer.innerHTML = `<span>${this.prix}</span>`;

     return priceContainer;

 }
}

class ProductButton extends Display {
 constructor(_id) {
     super();
     this._id = _id;
 }
}


new CustomProduct()
  


