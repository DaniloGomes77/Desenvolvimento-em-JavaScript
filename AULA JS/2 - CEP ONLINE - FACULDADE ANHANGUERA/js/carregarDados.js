
const botaoPesquisar = document.getElementById('pesquisar') //recebe o botão de pesquisar o CEP


async function buscarCEP(cep){ //Função para buscar o CEP digitado na API do via CEP
    //URL da API do via CEO
    let url = `https://viacep.com.br/ws/${cep}/json/`

    //Executa a URL na API do via cep e recebe os dados de retorno
    let resposta = await fetch(url)

    //Recebe somente o JSON do retorno da API
    let dados = await resposta.json()

    carregarDadosForm(dados)

}
//Função para colocar os dados de endereço no formulário
function carregarDadosForm(dadosCep){
    
    document.getElementById('txtlogradouro').value = dadosCep.logradouro
    document.getElementById('txtbairro').value = dadosCep.bairro
    document.getElementById('txtcidade').value = dadosCep.localidade
    document.getElementById('txtuf').value = dadosCep.uf
}

botaoPesquisar.addEventListener('click', function(){ //Adiciona um evento de escuta no botao pesquisar

    let numeroCep = document.getElementById('txtcep')// Recebe o CEP digitado na caixa de texto

    buscarCEP(numeroCep.value) //Chama a função de buscar o CEP na API
})