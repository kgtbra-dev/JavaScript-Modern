const produto = {
  nome: "Mouse",
  preco: 80
};

const {nome, peco} = produto;
const mostrarproduto = (nome, preco) => { 
    return console.log(`Produto: ${nome} - R$ ${preco}`)
};

mostrarproduto(nome, preco);