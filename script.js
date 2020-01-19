//atribuição de elemento
var botao = document.getElementById("botao");
//clique
botao.onclick = function(){testar()};

var texto = document.getElementById("paragrafo");
//clique duplo
texto.ondblclick = function(){teste2click()};
//cursor entra no objeto
texto.onmouseover = function(){entra()};
//cursor sai do objeto
texto.onmouseout = function(){sai()};

function testar(){
    document.getElementById("titulo").innerHTML = "1 Testado";
}

function teste2click(){
    document.getElementById("titulo").innerHTML = "2 Testado";
}

function entra(){
    botao.innerHTML = "TESTE";
}

function sai(){
    botao.innerHTML = "Teste";
}