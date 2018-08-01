//novo recurso do ES2015

const pessoa = {
    nome:'Anna Julia',
    idade: 2,
    endereco: { 
        logradouro:'Rua da Bagunça',
        number:1000
    }
}
const{nome, idade} = pessoa
console.log(nome,idade)
const { nome: n, idade: i } = pessoa

const { sobrenome, bemHumorada= true } = pessoa 
console.log (sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
