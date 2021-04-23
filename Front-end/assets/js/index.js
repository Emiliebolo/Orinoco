

//Fonction principale 
  (async () => {
	  const productList = await listePeluches()
	  
	  })()
   
		 // la fonction dans l'objet permet afficher la struture des produits
       async function listePeluches() {
		// affectation d'une const productList avec une nouvelle Ajax , permemttant l'appel à l'API
        const productList = await Ajax('teddies/', 'GET');
		console.log(productList);

		const products = new Products;
		
		products.generateCard(productList);
		
		}

        

        
	


