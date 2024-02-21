const variavel1 = "valor somente leitura";  
var variavel2 = "valor editável"; //declaraçao de variavel que reebe o nome de variavel2 e o valor atribuido é valor iditavel

try {
    variavel1 = "valor não permitido";                          // açoes do algoritimo
    console.log("a variavel1 foi alterada para: ", variavel1); // açoes do algoritimo
} catch (e) { 
    console.error("Ops ! Ocorreu o erro: ", e);
}

try {
    variavel2 = "valor permitido";
    console.log("a variavel2 foi alterada para: ", variavel2);
} catch (e) {
    console.error("Ops! Ocorreu o erro:", e);
}



//tentativa e erro
