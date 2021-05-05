

//Fonction principale 
(async () => {
	const productList = await listePeluches()

})()


async function listePeluches() {
	// affectation d'une const productList avec une nouvelle Ajax , permettant l'appel à l'API
	const productList = await Ajax('teddies/', 'GET');
	const products = new Products;

	products.generateCard(productList);
	console.log(productList);
}







