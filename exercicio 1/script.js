document.getElementById('verificarBtn').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultado = document.getElementById('resultado');

    if(num1 > num2){
        resultado.textContent = `${num1} é o maior`;
    } else if(num1 < num2){
        resultado.textContent = `${num2} é o maior`;
    }else{
        resultado.textContent = 'Números iguais';
    }

});