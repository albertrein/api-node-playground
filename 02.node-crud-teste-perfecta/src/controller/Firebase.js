const database = require('firebase-admin');
var serviceAccount = require("../config/firebase-credentials.json");



module.exports = class Firebase{
	construct(){
		database.initializeApp({
		  credential: admin.credential.cert(serviceAccount),
		  databaseURL: "https://perfecta-83c3c.firebaseio.com"
		});

		const collectionReference = database.ref("perfecta");
	}

	//Methods
	//Save ref

}