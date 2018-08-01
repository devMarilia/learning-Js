function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se o min for > que o max inverta as duas variaveis isso é desctruring.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))// chamando atraves do array passano o valor max e min
console.log(rand([992])) // no caso esse é o valor minimo
console.log(rand([, 10]))// aquo passamos o maxímo e o minímo ele vai iniciar com o zero
console.log(rand([])) // ele vai  assumir os valores padrões entre zero e mil
//essa foi uma atividade de desestruturação que é tirar algo de obj e de arrays 
//isso é uma forma simples para criar ou extrair elementos que precisamos.