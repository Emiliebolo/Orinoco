class CartObject {
  constructor() {
    this.cartContain = [];
    this.createTr = document.createElement('tr');// création d'un élément tr pour l'affichage des lignes du tableau
    this.localStorage();
  }
  setItem() {
    localStorage.setItem('cartContain', JSON.stringify(this.cartContain));// met à jour le setItem avec l'ajout du motclé 'cartContain' et la valeurclé this.cartContain
  }

  getItem() {
    this.cartContain = JSON.parse(localStorage.getItem('cartContain'));// renvoie la valeur associé  à la clé passée en parametre
  }

  localStorage() {
    if (localStorage.getItem('cartContain') == null) {
      this.cartContain = [];
    } else {
      this.getItem();
    }
  }

  addToCart(teddy) {// la boucle for of permet de crée un tableau 
    for (let cartItem of this.cartContain) {
      if (cartItem.id === teddy.id && cartItem.color === teddy.color) {// comparaison strict entre les deux valeurs 
        cartItem.quantity++;
        this.setItem();
        return;
      }
    }
    this.cartContain.push({ // ajout des valeurs ' name , price, id ,color ,qtd  dans le tableau
      'name': teddy.name,
      'price': teddy.price,
      'id': teddy.id,
      'color': teddy.color,
      'quantity': 1
    });
    this.setItem();// mise à jour avec les nouvelles données
  }

//cartElement: creer un élément td pour le nom la couleur et le prix
  cartElement(cartItem) {
    const elementTd = document.createElement('td');
    elementTd.textContent = cartItem;
    this.createTr.appendChild(elementTd);
  }
  qtdMore(cartItem, containBtn, Tquantity) { // affichage dans une ligne 'td' le bouton + pour ajouter une peluche supplémentaire
    const buttonAdd = document.createElement('p');
    buttonAdd.setAttribute('class', 'text-center');
    buttonAdd.textContent = '+';
    containBtn.appendChild(buttonAdd);

    buttonAdd.addEventListener('click', () => {// ajout  propriété cliquable sur le button +
      cartItem.quantity++;
      this.setItem();
      Tquantity.textContent = cartItem.quantity;
      this.updateTotal('Total: ');
    })
  }

  qtdLess(cartItem, containBtn, Tquantity) {
    const buttonLess = document.createElement('p');
    buttonLess.setAttribute('class', 'text-center');
    buttonLess.textContent = '-';
    containBtn.appendChild(buttonLess);

    buttonLess.addEventListener('click', () => {// génération de cookie et appel à la fonction
      if (cartItem.quantity === 1) {
        this.deleteItem(cartItem);
      } else {
        cartItem.quantity--;
        this.setItem();
        Tquantity.textContent = cartItem.quantity;
        this.updateTotal('Total: ');
      }
    })
  }

  cartQuantity(cartItem) {
    const tdQuantity = document.createElement('td');
    this.createTr.appendChild(tdQuantity);
    const containBtn = document.createElement('div');
    containBtn.setAttribute('class', 'text-center');
    tdQuantity.appendChild(containBtn);
    const Tquantity = document.createElement('p');

    this.qtdMore(cartItem, containBtn, Tquantity);
    this.qtdLess(cartItem, containBtn, Tquantity);
    Tquantity.textContent = cartItem.quantity;

    containBtn.appendChild(Tquantity);
  }

  updateTotal(text) {
    const getTotal = document.querySelector('.total');
    let cartTotal = 0;
    this.cartContain.forEach(cartItem => {
      cartTotal += parseInt(cartItem.quantity) * parseInt(cartItem.price);
    })
    getTotal.textContent = text + cartTotal + '€';
  }

  deleteItem(cartItem) {
    const index = this.cartContain.indexOf(cartItem);
    this.cartContain.splice(index, 1);
    this.setItem();
    window.location.reload();
  }

  cartItems() {
    let getBody = document.querySelector('#custom-peluches');
    if (this.cartContain < [0]) {
      let cartEmpty = document.querySelector('.cartEmpty');
      cartEmpty.style.display = 'unset'; // supprime une variable de la mémoire
    } else {
      for (let cartItem of this.cartContain) {
        this.createTr = document.createElement('tr');
        this.createTr.setAttribute('class', 'text-center');
        getBody.appendChild(this.createTr);
  
        this.cartElement(cartItem.name);
        this.cartElement(cartItem.color);
        this.cartElement(cartItem.price);
        this.cartQuantity(cartItem);
        this.updateTotal('Total: ');
      }
    }
  }

  emptyCart() {
    const btnEmpty = document.querySelector('.btnCartEmpty');
    btnEmpty.addEventListener('click', () => {
      localStorage.clear();
      window.location.reload();
    })
  }

  checkFormInput() {
    let checkString = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]{3,}/; // une expression regex pour faire correspondre des combinaisons de caractères. 
    let checkEmail = /^[^\s@]+@[^\s@]+$/;// permet d'éviter une erreur double @ 
    let checkAddress = /^[a-zA-Z0-9-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{3,}/;
    let formLastName = document.getElementById("formLastName").value;
    let formFirstName = document.getElementById("formFirstName").value;
    let formAddress = document.getElementById("formAddress").value;
    let formCity = document.getElementById("formCity").value;
    let formEmail = document.getElementById("formEmail").value;

    if (!checkString.test(formLastName)) {// Méthode test() utilisé , vérifie si il y'a une correspondace entre un texte et une expression rationnelle
      alert('Veuillez compléter ce champ avec votre Nom');
      return false;
    } else if (!checkString.test(formFirstName)) {
      alert('Veuillez compléter ce champ avec votre Prénom');
      return false;
    } else if (!checkEmail.test(formEmail)) {
      alert('Votre email doit être au format xxx@yyy.zzz');
      return false;
    } else if (!checkAddress.test(formAddress)) {
      alert('Veuillez compléter ce champ avec  votre adresse');
      return false;
    } else if (!checkString.test(formCity)) {
      alert('Veuillez compléter ce champ avec le nom de votre ville');
      return false;
    } else {
      return true;
    }
  }

  fetchRequest(contact) {
    let JSONContact = JSON.stringify(contact);
    (async () => {
      fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
          'Accept': 'application/JSON',
          'Content-Type': 'application/JSON'
        },
        body: JSONContact,
      }).then((response) => {
        return response.json();
      }).then((data) => {
        localStorage.setItem('order', JSON.stringify(data));
        document.location.href = "confirmation.html"
      });
      //localStorage.clear();// localStorage.clear supprimée pour éviter la suppression du local storage contenant les infos de la peluche lors du passage de la confirmation 
    })
    ();
    console.log("http://localhost:3000/api/teddies/order");
  }

  orderConfirmation() {
    let btnForm = document.querySelector('.btnForm');
    btnForm.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.cartContain >= [0] && this.checkFormInput() == true) {
        let contact = {
          lastName: document.getElementById("formLastName").value,
          firstName: document.getElementById("formFirstName").value,
          address: document.getElementById("formAddress").value,
          city: document.getElementById("formCity").value,
          email: document.getElementById("formEmail").value,
        }
        let products = [];
        for (let product of this.cartContain) {
          for (let i = 0; i < product.quantity; i++) {
            products.push(product.id);
          }
        }
        let productsContact = {
          contact,
          products
        };
        this.fetchRequest(productsContact);
      }
    })
    console.log(this.cartContain);
  }
 
}
