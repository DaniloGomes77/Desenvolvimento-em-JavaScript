
const botaoPesquisar = document.getElementById('pesquisar') //recebe o botão de pesquisar o CEP


function buscarCEP(cep){ //Função para buscar o CEP digitado na API do via CEP

}

botaoPesquisar.addEventListener('click', function(){ //Adiciona um evento de escuta no botao pesquisar

    let numeroCep = document.getElementById('txtcep')// Recebe o CEP digitado na caixa de texto

    buscarCEP(numeroCep.value) //Chama a função de buscar o CEP na API
})