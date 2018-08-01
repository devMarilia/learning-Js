const funcs = []

for (var i = 0; i < 10; i++) {
funcs.push (function() { //função anonima
console.log(i) // definir a função

} )
}
funcs[2] ()
funcs[8] ()