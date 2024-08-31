document.getElementById('verificar').addEventListener('click' , function(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;
    const resultado = document.getElementById('resultado');

    if(num1 > num2 && num1 > num3 ){
        resultado.textContent = `${num1} é o maior!`;
    }
    else if(num2 > num1 && num2 > num3){
        resultado.textContent = `${num2} é o maior!`;
    }
    else if(num3 > num1 && num3 > num2){
        resultado.textContent = `${num3} é o maior!`;
    }
});