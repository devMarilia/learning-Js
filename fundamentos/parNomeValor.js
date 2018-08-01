//par nome/valor
const saudacao = 'Opa'// contexto léxico 1 (é um conjunto de palavras..entao em que lugar fisico do seu codigo foi definido)

function exec() {
    const saudação = ' falaaa' // contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares no  nome/valor
const cliente = {
    nome: 'Marília',
    idade:30,
    peso:56,
    endereço: {
        logradouro: 'blábláblá',
        number: 123
      
        }
    }

console.log(saudacao)
console.log(exec())
console.log(cliente)