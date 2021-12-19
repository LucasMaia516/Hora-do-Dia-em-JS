function validar(){

    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

    if (valor.length >2){
        alert ("Digite 2 números ou menos!");
        document.formulario.numero.focus();
        return false;
    }else if (nomeValor.length < 3){
        alert("Digite um nome com mais de 3 caracteres!")
        document.formulario.nome.focus();
        return false;
    }else {
        alert("Formulário enviado com SUCESSO!!!");
        return true;
        
    }

}
