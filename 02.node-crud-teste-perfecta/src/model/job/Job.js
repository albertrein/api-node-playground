const firebase = require('../Firebase');

module.exports = class Jobs{
	constructor(){
		this.databaseReference = firebase.ref('perfecta/perfecta-jobs');
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

	createJob(categoryName, jobTitle, jobDescription){
		let sended = false;
		this.databaseReference.on('child_added', snap => {
			sended = true;
		});

		this.databaseReference.child(jobTitle).set({"description":jobDescription});
		return sended;
	}

	async deleteJob(jobTitle){
		let removed = false;
		this.databaseReference.on('child_removed', el => {
			removed = true;
		});
		this.databaseReference.child(jobTitle).remove();
		return removed;
	}

	makeTestFilter(categoryName){
		this.databaseReference.indexOn('category').equalTo(categoryName).once('value', obj => {
			console.log(obj.val());
		});
		console.log('Dont');
	}

	readTest(){
		firebase.ref('teste').once('value', snap => {
			let objeto = snap.val();

			for(let i in objeto){
				console.log('>>',objeto[i].job);
			}

		})
	}
	deleteTest(){


		firebase.ref('teste').once('value', snap => {
			let objeto = snap.val();

			for(let i in objeto){
				if(objeto[i].job == "guilherme"){
					firebase.ref('teste/'+i).remove();
				}
			}

		})
	}
}
