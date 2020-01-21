//atribuição de elemento
var botao = document.getElementById("botao");
//clique
botao.onclick = function(){listaNomes()};

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

//------------------------------------------------------------------------------------

var aluno1 = new aluno("Gustavo", 23, 123456);
var aluno2 = new aluno("Henrique", 26, 98765);

function aluno(n, i, r){
    this.nome = n;
    this.idade = i;
    this.ra = r;
}

var lista = [aluno1, aluno2];

function listaNomes(){
    document.write(lista[0].ra);    
}
