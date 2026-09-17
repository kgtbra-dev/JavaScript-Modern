const produto = {
  nome: "Mouse",
  preco: 80
};

const {nome, preco} = produto;
const mostrarproduto = (nome, preco) => { 
    return console.log(`Produto: ${nome} - R$ ${preco}`)
};

mostrarproduto(produto.nome, produto.preco);