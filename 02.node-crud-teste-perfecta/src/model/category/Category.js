const firebase = require('../Firebase');

module.exports = class Categoria{
	constructor(){
		const databaseReference = firebase.ref('perfecta');
		databaseReference.on('value', snapshot => {
			console.log('>>',snapshot);
		});
	}

	createCategory(categoryName){
		firebase.ref('perfecta/'+categoryName).set({"vagas":""}).then(res => {console.log(res)});
	}

}
