const database = require('firebase-admin');
var serviceAccount = require("../config/perfecta-83c3c-firebase-adminsdk-ll0wl-957a3d1645.json");

module.exports = class Firebase{
	//attrbs
	collectionReference = {};

	constructor(){
		database.initializeApp({
		  credential: database.credential.cert(serviceAccount),
		  databaseURL: "https://perfecta-83c3c.firebaseio.com"
		});
		let collection = database.database();
		this.collectionReference = collection.ref("perfecta");
	}

}