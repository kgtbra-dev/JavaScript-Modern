const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const {marca, modelo, preco, desconto} = notebook;

const calcularPrecoFinal = (preco, desconto) => {
    return preco - desconto;
};

console.log(`Notebook ${marca} ${modelo}`);
console.log(`Preço original: R$ ${preco}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Preço final: R$ ${calcularPrecoFinal(preco, desconto)}`)
