/**
 * 
 */

console.log("My first JS line");

var formateur = {
    name: "Jules",
    role: "Formateur"
};

console.log(1 == 1);
console.log("1" == 1);
console.log(1 === 1);
console.log("1" === 1);

const sayHello = function() {
    console.log("Salut poilu!");
}
sayHello();

const sayBonjour = () => console.log("Encore toi?!");
sayBonjour();

function sayBabar(string) {
    const hello = string;
    return function(name) {
        return hello + " " + name;
    }
}
console.log(sayBabar("Bonjour")("loulou"));

/*
const robert = {
    firstName: "Robert",
    lastName: "De Niro",

    // Present function
    present: function() {
        return "Mr " + this.firstName + " " + this.lastName;
    }
}

console.log(robert.present);
console.log(robert.present());
*/

const george = {
    firstName: "George",
    lastName: "Clooney"
}

// j'ajoute au prototype de george la fonction present
george.__proto__.present = function() {
    return "Mr " + this.firstName + " " + this.lastName;
}

console.log(george.present);
console.log(george.present());

const leonardo= Object.create(george);
leonardo.firstName= "Leonardo";
leonardo.lastName= "Di Caprio";
console.log(leonardo.present());

/*  */
const pLien= document.querySelector("p.lien"); // récupération du paragraphe p avec class lien
const newLink= document.createElement("a"); // création du lien
newLink.href= "simplo.co"; // remplissage de l'url du lien
newLink.textContent= "Simplon"; // remplissage du titre du lien
newLink.style.color= "rgb(206, 15, 15)"; // lien en rouge
newLink.style.textDecoration= "none"; // texte non souligné
pLien.appendChild(newLink); // ajout de la balise a au paragraphe

