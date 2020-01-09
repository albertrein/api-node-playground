const firebase = require('../Firebase');

module.exports = class Categoria{
	constructor(){
		
	}

	createCategory(categoryName){
		firebase.ref('perfecta/'+categoryName).set({"vagas":""}).then(res => {console.log(res)});
	}

}
