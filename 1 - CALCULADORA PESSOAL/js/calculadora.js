
// var   -> é uma forma antiga de criar variaveis.
// let   -> É uma forma de criar variaveis dentro de um escopo local (dentro de uma função), ela nasce e morre dentro da função.
// const -> Permite criar um elemento que não sofrerá mudança durante a programação, ou  seja, uma constante.
//Recebendo no JS o botão somar, subtrair, multiplicar e dividir
const botaoSomar       = document.getElementById('somar')
const botaoSubtrair    = document.getElementById('subtrair')
const botaoMultiplicar = document.getElementById('multiplicar')
const botaoDividir     = document.getElementById('dividir')
const botaoLimpar      = document.getElementById('ce') 

//função para calcular as operações matemáticas. 
function calcular(operacao){
    //Recebe as caixas de texto
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let divResultado = document.getElementById('resultado')
    let resultado

    if(operacao == 'somar'){
        resultado = Number(valor1.value) + Number(valor2.value)//Somando os valores

    }else if(operacao == 'subtrair'){
        resultado = Number(valor1.value) - Number(valor2.value)

    }else if(operacao == 'multiplicar'){
        resultado = Number(valor1.value) * Number(valor2.value)

    }else if(operacao == 'dividir'){
        resultado = Number(valor1.value) / Number(valor2.value)

    }
    divResultado.innerText = resultado
}

botaoLimpar.addEventListener('click',function(){
    
    document.getElementById('valor1').value = ''
    document.getElementById('valor2').value = ''
    document.getElementById('resultado').innerText = '0'
})

botaoSomar.addEventListener('click',function(){

    calcular('somar')//Chama a função para calcular
})

botaoSubtrair.addEventListener('click',function(){
    calcular('subtrair')
})

botaoMultiplicar.addEventListener('click',function(){
    calcular('multiplicar')
})

botaoDividir.addEventListener('click',function(){
    calcular('dividir')
})