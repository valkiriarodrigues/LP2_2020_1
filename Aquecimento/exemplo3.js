
/** cria as variaveis a e b com escopos de scripts (global) */

var a = 1;
var b = 1;

if( a % 2 == 1){ // se a for impar a recebe 2 ,b recebe 2
    a = 2; 
    b = 2;
}

const c = a + b;
console.log(c);

/**
 * toda variavel criada dentro de uma função tem escopo de função
 */

function fazAlgumaCoisa(){
    a = a + 1;
    b = b + 1;
    var d = 7;
    let e = 8;
}

fazAlgumaCoisa();
console.log(a);
console.log(b);


if(a % 2 == 1){ // se A for impar ele cria uma variavel chamada e f e uma chamada g
    var f = 2;
    let g = 1;
}

console.log(f);
console.log(g);

