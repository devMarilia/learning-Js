const valores = [7.7, 8.9, 6.3, 9.2] // podemos criar um array de forma literal colocando conchetes e coloca os elementos separados por virgulas
console.log(valores[0], valores[3])
console.log(valores[4])// pelo javascript não jera erro dara que é um valor indefinido

valores[4]= 10
console.log(valores)
console.log(valores.length) // este comando dira quantos elemesntos contem no array

valores.push({id: 3}, false, null, 'teste')//para você add mais elementos no array
console.log(valores)// podemos utilizar varios dados agrupados no array como objetos etc, mais desde que seja organizado.

console.log(valores.pop ())// ele vai pegar o ultimo valor do array tirar e vai retornar essa função
delete valores [0]
console.log(valores[0])// ele vai tirar o primeiro elemento do array

console.log(typeof valores)

//Array e um tipo de dados dinamico ele cresce e diminui apartir do momento em que 
//você vai add  elementos e excluindo elementos, é uma extrutrura indexada (dispor em índice, numa lista
//que metodicamente indica algum conteúdo de alguma coisa) , ela é uma extrutura que é iterogenia vc pode misturar dados, embora não seja 
// uma boa prática, vimos a forma de acessar apartir do índice atrasves dos conchetes[]
//ou seja o id que foi utilizado  para um valor, ou add , como para ler um valor, quando vc acessar um material que 
//não existe ele vai executar normalmente o metodo pop que é para tirar é  possivel também deletar 
// um elemento do array pela opção da função  delete, esse delete funciona no contexto de objeto para tira  um 
//um atributo dentro de um objeto e o typeof que nada mais é que um objeto