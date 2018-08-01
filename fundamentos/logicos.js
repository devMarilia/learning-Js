function compras(trabalho1, trabalho2) {          // executando a tabela da verdade
    const comprarSorvete = trabalho1 || trabalho2 //comprar atv de 50 polegadas é o I, 
    const comprarTv50 = trabalho1 && trabalho2 //comprar  tv de 32 polegadas  o OU EXCLUSIVO, 
    const comprarTv32 = trabalho1 != trabalho2//o tomar sorverte é o OU
    const manterSaudavel = !comprarSorvete //operador unitario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}-

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// condição do tipo (e) 
 // v e v -> v
 // v e f -> f
 // f e ( v ou f) -> f  
 //tds os operandos tem que ser verdadeiro para que ele seja verdadeiro usando o op e 
 
 
 //condição do tipo OU
 //v ou (v ou f) -> v eu nao preciso analizar o segundo op pq apartir do primeiro eu consigo inferir a resposta
 //f ou v -> v 
 //f ou f -> f 
 

 // OU EXCLUSIVO
 //v xor v -> f
 //v xor f -> v
 //f xor v -> v
// f xor f -> f
//no xor obrigatoriamente os dois deve ser diferente para o resultado dar verdadeiro

//Negação Logica (op unário)
//!v -> f
//!f -> v