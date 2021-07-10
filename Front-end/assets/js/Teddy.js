class Teddy {
  constructor(custom) {
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
  //ajouter fonction comportant l'ensemble du code pour l'affichage de l'image la description le nom la couleur et le prix 
  displayOneTeddy() {
    this.customPeluche.setAttribute('class', 'card ');
    this.customProduct.appendChild(this.customPeluche);

    const customImg = document.createElement('img');
    customImg.setAttribute('src', this.img);
    customImg.setAttribute('alt', this.name);
    customImg.setAttribute('class', 'peluches');
    this.customPeluche.appendChild(customImg);

    const customName = document.createElement('h2');
    customName.innerHTML = this.name;
    this.customPeluche.appendChild(customName);

    const customDescription = document.createElement('p');
    customDescription.setAttribute('class', 'customPeluche');
    customDescription.innerHTML = this.description;
    this.customPeluche.appendChild(customDescription);

    const customPrice = document.createElement('p');
    customPrice.setAttribute('class', 'prix');
    customPrice.innerHTML = this.price;
    this.customPeluche.appendChild(customPrice);

    const customLabel = document.createElement('label');
    customLabel.setAttribute('class', 'color-list');
    customLabel.textContent = ' Nos Couleurs disponibles: ';

    this.customPeluche.appendChild(customLabel);

    const customSelect = document.createElement('select');
    customSelect.setAttribute('class', 'selectColor');

    customLabel.appendChild(customSelect);

    for (let i = 0; i < this.colors.length; i++) {
      const customOption = document.createElement('option');
      customOption.textContent = this.colors[i];
      customOption.setAttribute('value', this.colors[i]);
      customOption.setAttribute('required', '');
      customSelect.appendChild(customOption);
    }

    const containAddBtn = document.createElement('div');

    this.customPeluche.appendChild(containAddBtn);

    const btnAddCart = document.createElement('a');
    btnAddCart.setAttribute('class', 'addToCart');
    btnAddCart.setAttribute('href', 'panier.html');

    btnAddCart.innerHTML = 'Ajouter au panier';

    containAddBtn.appendChild(btnAddCart);

    const cartObject = new CartObject();
    document.querySelector('.addToCart').addEventListener('click', () => {
      cartObject.addToCart({
        'name': this.name,
        'color': document.querySelector(".selectColor").value,
        'price': this.price,
        'id': this.id,

      });
    });
  

  }

}