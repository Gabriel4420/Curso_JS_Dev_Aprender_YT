// type_of variables 

let name = 'Rafael' //string literal Prototype.Object.String
let age = 24 //number literal Prototype.Object.Number
let isAprove = true; //bool Prototype.Object
let surname = undefined; // Prototype.Object.Undefined
let colorSelected = null; // redefinir valor - Object.prototype.null

// key value pairs - Objects
let pessoa = {
  nome:'Gabriel Rodrigues'
};

console.log(colorSelected == Object.prototype.null);
console.log(typeof age == Number.__proto__.Object);
console.log(pessoa.nome)

function mudaNome() {
  document.getElementById("APP").innerHTML = `
    
    <h2>Developer ${name} </h2>
  `
}

mudaNome()