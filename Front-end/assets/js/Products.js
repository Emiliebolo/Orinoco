

class Products {
	
	generateCard(productList){
		 // une boucle for pour générer les peluches de 0 à 4 (5 peluches)
		 for (let i = 0; i < productList.length; i++) {
	
			// Console.log pour afficher le détail de chaque peluche
			   console.log (productList[i]); 
			 // nouvelle variable itemContainer pour generer par la suite dans la partie id= itemContainer
			   let itemContainer = document.getElementById ('itemContainer')
				// Ajout de variable pour la création des éléments 
				let productCard = document.createElement('div');
				let productImage = document.createElement('img');
				let productDescription = document.createElement('div');
				let productName = document.createElement('h2');
				let productDescript = document.createElement('p');
				let productPrice = document.createElement('P');
				let productLink = document.createElement('a');
				 
				//Ajout des attributs au balise pour la création du style
				productCard.setAttribute('class', 'card');
				productDescription.setAttribute('class', 'description');
				productDescript.setAttribute('class' , 'descriptionPeluche');
				productDescript.setAttribute('alt', productList[i].description);
				productPrice.setAttribute('class','prix');
				productImage.setAttribute('src', productList[i].imageUrl);
				productImage.setAttribute('class' ,'peluche');
				productImage.setAttribute('alt', 'peluche faite à la main');
				productLink.setAttribute(
					'href',
					'..//../front-end/pages/produit.html?id='+ productList[i]._id,
				);
				productLink.setAttribute('class', 'cart' , 'link');
	
				  //Contenu des balises
				  productDescript.innerHTML = productList[i].description;
				  productName.innerHTML = productList[i].name;// affichage du nom de la peluche non effectué
				  productPrice.innerHTML = productList[i].price / 100 + ",00€";// problème d'affichage NAN
				  productLink.innerHTML = 'Acheter le produit';
	
				//Ajout un élément HTML enfant à la fin d'un élement parent
				itemContainer.appendChild(productCard);
				productCard.appendChild(productImage);
				productCard.appendChild(productName);
				productCard.appendChild(productDescription);
				productDescription.appendChild(productDescript);
				productDescription.appendChild(productPrice);
				productDescription.appendChild(productLink);
				}

	}
		
}


