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
//cursor pressionado
texto.onmousedown = function(){clica()};
//cursor despressionado
texto.onmouseup = function(){desclica()}

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

function clica(){
    document.getElementById("titulo").innerHTML = "Clicando";
}

function desclica(){
    document.getElementById("titulo").innerHTML = "Desclicado";
}