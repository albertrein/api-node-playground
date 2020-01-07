const Firebase = require('../Firebase');

module.exports = class Categoria extends Firebase{
	constructor(){
		super();
	}

	createCategory(categoryName){
		let newCategory = this.collectionReference.child(categoryName);
		newCategory.set({"vagas": "" }).onWrite(() => {console.log('salvo')});
	}

}
