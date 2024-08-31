document.getElementById('conferir').addEventListener('click', function(){
    const valor = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado');

    if(valor > 0){
        resultado.textContent = `${valor} é positivo`;
    }
    else if(valor == 0){
        resultado.textContent = `${valor} é igual a 0`;
    }else{
        resultado.textContent = `${valor} é negativo`;
    }

});