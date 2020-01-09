const admin = require('firebase-admin');
const functions = require('firebase-functions');

var serviceAccount = require("../config/perfecta-83c3c-firebase-adminsdk-ll0wl-957a3d1645.json");

module.exports = class Firebase{
	//attrbs
	collectionReference = {};

	constructor(){
		admin.initializeApp({
		  credential: admin.credential.cert(serviceAccount),
		  databaseURL: "https://perfecta-83c3c.firebaseio.com"
		});

		//const database = admin.database();
		
		this.collectionReference = functions.admin.ref('perfecta').onWrite((snap, context) =>{
			console.log('teste!1010');
		});

		/*this.collectionReference = database.ref("perfecta").onWrite(() => {
			console.log('salvo')
		});*/
	}

}