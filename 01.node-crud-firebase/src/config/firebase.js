var admin = require("firebase-admin");

var serviceAccount = require("../../credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://perfecta-83c3c.firebaseio.com"
});


module.exports = admin.database();