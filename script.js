// function using alert
function sayHello() {
	alert("Salut poilu!");
}
sayHello();

// function sum
function sum() {
	const nb1= parseInt(prompt("saisir 1er nb", ""));
	const nb2= parseInt(prompt("saisir 2e nb", ""));
	return nb1+nb2;
}

const parg= document.querySelector("p.sum");
parg.textContent= "Résultat de la somme : " + sum();