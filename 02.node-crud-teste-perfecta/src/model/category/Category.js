const firebase = require('../Firebase');

module.exports = class Categoria{
	constructor(){
		this.databaseReference = firebase.ref('perfecta');
		this.databaseReference.on('value', snapshot => {
			///console.log('>>',snapshot);
		});
	}

	getAllCategorys(){
		let categoryList = {};
		this.databaseReference.on('value', snapshot => {
			categoryList = snapshot.val();
		});

		//Get all keys from object and insert into categoryKeys to make arrays list
		let categoryKeys = [];
		for(let cat in categoryList){
			categoryKeys.push(cat);
		}

		//return key and arrayList of keys categorys
		return {"categoryList": categoryKeys}
	}

	createCategory(categoryName, serverResponse){
		firebase.ref('perfecta/'+categoryName).set({"jobs":""});
		serverResponse.send({"OK":"Created"});
	}

	async deleteCategory(categoryName, serverResponse){
		let refe = firebase.ref('perfecta/'+categoryName);
		let sended = false;
		refe.on('child_removed', snap => {
			sended = true;
		});
		await refe.remove();
		return sended;
	}

}
