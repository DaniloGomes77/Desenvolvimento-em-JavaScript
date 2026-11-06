
//função para Obter os livros da API de Livros
function carregarLivros (){ 
    //chama a função para criar os Cards no HTML
    criarCards()
}

//Funcao para criar os Cards de livros no HTML
function criarCards (){
    //Recebe a div principal que sera carregada os Cards de livros
    let divCardProdutos = document.getElementById('cardProdutos')

    //Cria os elementos HTML pelo JS
    let divCaixaProduto = document.createElement('div')

    //Adiciona atributos na TAG do HTML que foi criada
    divCaixaProduto.setAttribute('class', 'caixa_produto')

    //Adiciona o elemento FILHO ao elemento PAI
    divCardProdutos.appendChild(divCaixaProduto)
}

//Evento para quando o navegador for carregado
window.addEventListener('load', function(){
    //chama a função para pegar os livros da API
    carregarLivros()
})