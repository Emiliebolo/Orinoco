class OrderConfirmation {
    constructor(cartContain) {

      this.checkLocal(cartContain);
    }
    checkLocal(cartContain) {
      if (localStorage.getItem("order") != null) {
        this.productsContact = JSON.parse(localStorage.getItem("order"));
        cartContain = this.productsContact.products;
        document.querySelector("#orderID").innerHTML = ' Voici le Numéro de votre commande: ' + this.productsContact.orderId;
        this.updateTotal('Montant de votre commande: ',cartContain);
        document.querySelector("#orderLastName").innerHTML = 'Nom: ' + this.productsContact.contact.lastName;
        document.querySelector("#orderFirstName").innerHTML = 'Prénom: ' + this.productsContact.contact.firstName;
        document.querySelector("#orderAddress").innerHTML = 'Adresse: ' + this.productsContact.contact.address;
        document.querySelector("#orderCity").innerHTML = 'Ville: ' + this.productsContact.contact.city;
        document.querySelector("#orderEmail").innerHTML = 'Email: ' + this.productsContact.contact.email;
        console.log(this.productsContact);
      }
    }
  
    updateTotal(text,cartContain) {
      const getTotal = document.querySelector('.total');
      let cartTotal = 0;
      cartContain.forEach(cartItem => {
          cartTotal += parseInt(cartItem.price);
      })
      getTotal.textContent = text + cartTotal / 100 + '€';
    }
  }
  
  new OrderConfirmation();