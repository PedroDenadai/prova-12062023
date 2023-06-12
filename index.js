/*
1 - Crie uma função que receba um número como parâmetro e 
determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. 
Liste todos os números primos entre 1 e 1000.
*/

function verificarNumeroPrimo(n) {
    if (n <= 1) {
      return false;
    } else {
      for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0 && n != 2) {
          return false;
        }
      }
      return true;
    }
}

// listar os números primos entre 1 e 1000
function executar(){
  for (let j = 1; j <= 1000; j++) {
        if (verificarNumeroPrimo(j)) {
            console.log(j + " é primo");
        }
    }
}
  
  


/*
2 - Crie uma função que receba uma senha como parâmetro 
e verifique se ela atende aos seguintes critérios: 
ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. 
Sua função deve receber uma senha e dizer para o usuário se ela é valida.

*/

// verifica se senha tem alguma letra maiuscula
function letraMaiuscula(str) {
    return /[A-Z]/.test(str);
}

//verifica se senha tem alguma letra minuscula
function letraMinuscula(str) {
    return /[a-z]/.test(str);
}

//verifica se senha tem algum numero
function possuiNumero(str) {
    return /[0-9]/.test(str);
}

function senhaValida(senha){
    if(letraMaiuscula(senha) && letraMinuscula(senha) && possuiNumero(senha) && senha.length >= 8){
        return true;
    }else{
        return false;
    }
}

function resultado(senha){
    if(senhaValida(senha)){
        console.log('Senha Válida!!')
        return true;
    }else{
        console.log('Senha Inválida!!')
        return false;
    }
}


/* 

3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. 
O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. 
Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.
*/

function fatorial(n){
    //preciso verificar se o numero é 0 ou 1 pois se nao o resultado sempre dara 0 ou ele mesmo
   if(n == 0 || n == 1){
    return 1;
   }

   let resultado = 1;


    for(let i = 2; i <= n; i++){
        resultado *=  i;
    }
    
}

//rodar a funcao de 1 a 10
function rodar(){
    for(let j = 1; j <= 10; j++){
        console.log('O fatorial de ' + j + ' é ' + fatorial(j));
    }
}






/*4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. 
        Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro.
        Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.
*/
  
function verificarRaizInteira(n) {
    let raiz = Math.sqrt(n);
  
    if (Number.isInteger(raiz)) {
      console.log(n + ' é um quadrado perfeito, sua raiz é ' + raiz);
      return true;
    } else {
      console.log(n + ' não é um quadrado perfeito, sua raiz é ' + raiz);
      return false;
    }
  }
  