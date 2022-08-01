"use strict";
let anyEstaDeVolta; //recebe qualquer tipagem
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
//propriedade unknown precisa ser realizada uma verificação para que a tipagem na variável esteja de acordo com valor inserido utilizando exemplo abaixo
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
// tipo never é para um código que nunca foi finalizado
// throw para finalizar a função
jogaErro('deu erro', 500);
