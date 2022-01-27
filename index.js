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

var arr=['Paras','Sonal','Aman','Rashi'];

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

function animation(id){
				const letters = id.innerText.split('');

				// 2. For every character, we want <span class="js-letter">P</span><span class="js-letter">a</span>
				// Every Letter is having 2 classes one is letter-> css and other one js-letter-> java script
				let html = "";
				letters.forEach(letter => {
					let classes = ''
					if(letter != ' '){
						classes ='letter js-letter'
					}
					html = html + `<span class='${classes}'>${letter}</span>`
				})

				id.innerHTML=html;

			// 2. Add EventListeners in mouse over and mouse Out
			const letterNode = document.querySelectorAll('.js-letter');
			letterNode.forEach(node =>{
				node.addEventListener('mouseover',function(event){
					this.classList.add("active");
				})
				node.addEventListener('mouseout',function(event){
					this.classList.remove("active");
				})
			})
}

function headline(str,i) {
			  	i++;
			  	howManyTimes = str.length+1
			  if (i < howManyTimes) {
			    document.getElementById('professionId').innerText=str.substr(0,i).toUpperCase();
			    //document.getElementById('professionId').style.color = generateRandomColor();
			    // calling callback function f after every 200 sec
			    setTimeout(headline, 300,str,i);
			 }
	}

