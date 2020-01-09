const firebase = require('../Firebase');

module.exports = class Categoria{
	constructor(){
		const databaseReference = firebase.ref('perfecta');
		databaseReference.on('value', snapshot => {
			console.log('>>',snapshot);
		});
	}

	createCategory(categoryName, serverResponse){
		firebase.ref('perfecta/'+categoryName).set({"vagas":""}).then(res => {
			serverResponse.send({"OK":"Received"});
		});
	}
	createCategory(categoryName, serverResponse){
		firebase.ref('perfecta/'+categoryName).set({"vagas":""}).then(res => {
			serverResponse.send({"OK":"Received"});
		});
	}
	deleteCategory(categoryName, serverResponse){
		firebase.ref('perfecta/'+categoryName).set({"vagas":""}).then(res => {
			serverResponse.send({"OK":"Deleted"});
		});
	}

}
