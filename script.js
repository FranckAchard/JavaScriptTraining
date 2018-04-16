// function using alert
function sayHello() {
	alert("Salut poilu!");
}
sayHello();

// function sum
function sum2() {
	const nb1= parseInt(prompt("saisir 1er nb", ""));
	const nb2= parseInt(prompt("saisir 2e nb", ""));
	return nb1+nb2;
}

/*
const parg= document.querySelector("p.sum");
parg.textContent= "Résultat de la somme : " + sum2();
*/

function compare(a, b) {
	return a - b;
}

function sort5() {
	const tab= [];
	tab[0]= parseInt(prompt("saisir 1er nb", ""));
	tab[1]= parseInt(prompt("saisir 2e nb", ""));
	tab[2]= parseInt(prompt("saisir 3e nb", ""));
	tab[3]= parseInt(prompt("saisir 4e nb", ""));
	tab[4]= parseInt(prompt("saisir 5e nb", ""));
	return tab.sort(compare);
}

const parg= document.querySelector("p.sort");
parg.textContent= "Résultat du tri : " + sort5();
