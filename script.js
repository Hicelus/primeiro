function testar(){
    var elemento = document.getElementById("paragrafo");
    elemento.innerHTML="Teste efetuado";
    confirm("confirma?");
    prompt("jacaré", "girafa")
}


function testar2(){
    document.getElementById("paragrafo").innerHTML="Teste efetuado";
    alert("testado");
}

document.getElementById("botao").onclick=function(){testar2()};