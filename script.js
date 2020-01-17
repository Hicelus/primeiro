var botao = document.getElementById("botao");
botao.onclick = function(){testar()};

var texto = document.getElementById("paragrafo");
texto.ondblclick = function(){teste2click()};
texto.onmouseover = function(){entra()};
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