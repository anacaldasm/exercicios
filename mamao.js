//contando mamoes - dada uma lista de strings - contar quantos "mamão" existem

const guanhaes = ['ana','Mamao','frattezi','joel','cassios','maMao','nato','filipe','larissa','mAmao','mamao','mamao'];

function contandoMamao(cidade){
    let soma = 0;
    for(let i = 0; i < cidade.length; i++){
        if (cidade[i].toLowerCase() == 'mamao'){ 
        soma += 1;
        }
    }
    console.log(soma);
}

contandoMamao(guanhaes);
