/*  Main request */

Ajax = (url, method) => {
	return new Promise(resolve => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (this.readyState == XMLHttpRequest.DONE) {
				if (this.status == 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					window.location = "Une erreur est survenue , veuillez réessayer plus tard";
				}
			}
		};
		request.open(method, 'http://localhost:3000/api/' + url);
		request.send();
	});
};









