// For Loop 

// function showNumbers() {
// 	const number = Number(document.getElementById('number').value)
// 	let output = "";

// 	for (let counter = 0; counter <= number; counter ++) {
// 		output += `${counter}<br>`;
	
// 		document.getElementById('output').innerHTML = output;
// 	}
// }




// While Loop

// let counter = 1;
// let output = "";

// while (counter <= 20) {
// 	output += `${counter} <br>`;
// 	counter ++;
// }

// document.getElementById("output").innerHTML = output;




// Time Table Generator

function timeTable() {
	const number = Number(document.getElementById("number").value);

	let output = "";

	for (let counter = 1; counter <= 10; counter ++ ) {
		let result = number * counter;

		output += `${number + ' x ' + counter + ' = ' + result}<br>`;
		
		
	}
	document.getElementById("output").innerHTML = output;
}

