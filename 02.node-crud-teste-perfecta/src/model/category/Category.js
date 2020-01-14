const firebase = require('../Firebase');

module.exports = class Categoria{
	constructor(){
		this.databaseReference = firebase.ref('perfecta/perfecta-category');
	}

	createCategory(categoryName){
		let sended = false;
		this.databaseReference.on('child_added', evt => {
			sended = true;
		});
		this.databaseReference.set({"category":categoryName, ".indexOn": "category"});
		return sended;
	}

	deleteCategory(categoryName){
		let sended = false;
		this.databaseReference.on('child_removed', el => {
			sended = true;
		});

		this.databaseReference.once('value', object => {
			let categoriesObj = object.val();
			for(let key in categoriesObj){
				if( categoriesObj[key].category == categoryName ){
					this.databaseReference.child(key).remove();
					break;
				}
			}
		})

		return sended;
	}


	getAllCategorys(){
		let categoryList = {};
		this.databaseReference.once('value', snapshot => {
			return snapshot.val();
		});
	}
}
