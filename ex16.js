const produto = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};


const calculoPreco = ({preco, desconto }) => {
 return preco - desconto;
}
console.log(`O ${produto.nome} custava R$ 200 e agora custa R$ ${calculoPreco(produto)} `)
