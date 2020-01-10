const firebase = require('../Firebase');

module.exports = class Jobs{
	constructor(){
		this.databaseReference = firebase.ref('perfecta');
		this.databaseReference.on('value', snapshot => {
			///console.log('>>',snapshot);
		});
	}

	getAllJobs(){
		let jobs = {};
		this.databaseReference.on('value', snapshot => {
			jobs = snapshot.val();
		});
		if(!jobs.length){
			return {"AllJobs": "empty"};
		}
		return {"AllJobs": AllJobs}
	}

	createJob(categoryName, jobName){
		firebase.ref('perfecta/'+categoryName).on('value', snap => {
			
		});
		firebase.ref('perfecta/'+categoryName).push({"job":jobName});
	}

	async deleteJob(categoryName, serverResponse){
		let refe = firebase.ref('perfecta/'+categoryName);
		let sended = false;
		refe.on('child_removed', snap => {
			sended = true;
		});
		await refe.remove();
		return sended;
	}

}
