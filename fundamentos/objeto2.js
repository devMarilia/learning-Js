console.log(typeof Object) //Quando colocamos typeof Object isso se trata de uma função.
console.log(typeof new Object)//Quando colocamos typeof  new Object temos um objeto criado apartir de uma função.

const Cliente = function( ){}
console.log(typeof Cliente)
console.log(typeof new Cliente )

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) //função
console.log(typeof new Produto())//objeto