function concatenate(firstName, lastName){
	return firstName + ' ' + lastName
}

var concatenate = function (firstName, lastName){
	return firstName + ' ' + lastName
}

var parasObject = {
	firstName : 'Paras',
	lastName : 'Chawla',
	age :30,
	traits: 'AWESOME'
}

function doSomethingCool(){

	var className ="cool"
	var currClassName = document.getElementById('cool').className;
	
	console.log(currClassName);

	if(currClassName ==className){
		document.getElementById('cool').className = 'cool red';
	}else{
		document.getElementById('cool').className = 'cool';
	}

}