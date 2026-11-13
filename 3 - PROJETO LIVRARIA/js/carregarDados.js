
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
    let h2Titulo = document.createElement('h2')
    let figure = document.createElement ('figure')
let imgLivro = document.createElement('img')
let divCaixaTexto = document.createElement('div')

    //Adiciona atributos na TAG do HTML que foi criada
    divCaixaProduto.setAttribute('class', 'caixa_produto')
h2Titulo.setAttribute ('class', 'caixa_titulo')
figure.setAttribute ('class', 'caixa_imagem')
imgLivro.setAttribute ('src','imagens/icone_livro.png')
divCaixaTexto.setAttribute('class','caixa_texto')

    //Adiciona o elemento FILHO ao elemento PAI
    divCardProdutos.appendChild(divCaixaProduto)
    divCaixaProduto.appendChild(h2Titulo)
divCaixaProduto.appendChild(figure)
figure.appendChild(imgLivro)
divCaixaProduto.appendChild(divCaixaTexto)


    h2Titulo.innerText = 'Livro 01'
    divCaixaTexto.innerText = 'teste do livro'
}


//Evento para quando o navegador for carregado
window.addEventListener('load', function(){
    //chama a função para pegar os livros da API
    carregarLivros()
})