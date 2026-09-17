const produto = {
  nome: "Mouse",
  preco: 80
};

const mostrarproduto = (nome, preco) => { 
    return console.log(`Produto: ${nome} - R$ ${preco}`)
};

mostrarproduto(produto.nome, produto.preco);