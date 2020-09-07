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

// desafio troca de valores 

let a = 'vermelho'

let b = 'azul'

a = b;
b = a;
b = 'vermelho'

console.log(a);
console.log(b);

//If else

var hora = 17;

if(hora >= 6 && hora < 12)
  console.log('bom dia')
else if(hora > 12 && hora < 18)
  console.log('boa tarde')
else
  console.log('boa noite')

// Switch case


let permission;

permission = 'W';

switch(permission){
  case'R':
    console.log('user just can read, cannot edit !')
  break;
  case 'W/R':
    console.log('user can read & edit !')
  break;
  case 'W': 
    console.log('user just can add new writte');
  break;
  default: 
    console.log('user not allowed ');
}

// 1. For

for(let i  = 1; i < 5; i++){
  if(i>1)
    console.log(`Estou aprendendo:${i} vezes`);
  else
    console.log(`Estou aprendendo:${i} vez`);
  if(i % 2 === 0)
    console.log(`${i}`);
}


// 2. forin

const people ={
  name:'Gabriel',
  age:22
}

for (const key in people) {
  if (people.hasOwnProperty(key)) {

    console.log(people.age );
    console.log(typeof(22))
  }
}

// exemplos de hoisting & others
const retornaNome = () => {
  nome = 'filipe deschamps';
  return nome;
}

var nome = 'gustavo deschamps'

retornaNome();

console.log(nome);
