function tratarErroELancar(erro) {
    throw new Error ('Ocorreu um erro, revise seu codigo com a tenção...Developer Marília Lemos!!!')
}



function imprimirNomeGritado(obj) {
    try  {                                 //try é um bloco de código que podemos tratar possiveis erros                                                       
        console.log(obj.name.toUpperCese() + '!!!')
    }                                   
    catch (e) {
        tratarErroELancar(e) 
    }
    finally {
        console.log('final')
    }
}

const obj = { nome: ' Marília Lemos'}
imprimirNomeGritado(obj)
