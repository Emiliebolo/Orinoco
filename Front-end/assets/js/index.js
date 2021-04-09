

//Fonction principale 
  (async () => {
	  const products = await listePeluches()
	  
	  })()
   
		 // la fonction dans l'objet permet afficher la struture des produits
       async function listePeluches () {
		// affectation d'une const productList avec une nouvelle Ajax , permemttant l'appel à l'API
        const productList = await Ajax('teddies/', 'GET');
		console.log(productList);
                
            
     // une boucle for pour générer les peluches de 0 à 4 (5 peluches)
     for (let i = 0; i < productList.length; i++) {
        let products = new Products(
                         productList[i].description,
                         productList[i].imageUrl,
                         productList[i].name,
                         productList[i].price,
                         productList[i].colors,
                         productList[i]._id,
                     );
					 // Console.log pour afficher le détail de chaque peluche
                     console.log (products); 
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
			productDescript.setAttribute('alt', products.description);
			productPrice.setAttribute('class','prix');
			productImage.setAttribute('src', products.imageUrl);
			productImage.setAttribute('class' ,'peluche');
			productImage.setAttribute('alt', 'peluche faite à la main');
			productLink.setAttribute(
				'href',
				'..//../pages/produit.html?id=' + products._id,
			);
			productLink.setAttribute('class', 'cart' , 'link');

			//Ajout un élément HTML enfant à la fin d'un élement parent
			itemContainer.appendChild(productCard);
			productCard.appendChild(productImage);
			productCard.appendChild(productDescription);
			productDescription.appendChild(productName);
			productDescription.appendChild(productDescript);
			productDescription.appendChild(productPrice);

			productCard.appendChild(productLink);

            //Contenu des balises
			productDescript.textContent = products.description;
			productName.textContent = products.name;// affichage du non de la peluche non effectué
			productPrice.textContent = `${products.price / 100} €`;// problème d'affichage NAN
			productLink.textContent = 'Acheter le produit';
		}

        }

        
	


