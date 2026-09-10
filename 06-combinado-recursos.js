// ============================================
// 6. COMBINANDO RECURSOS
// ============================================

// 6. COMBINANDO RECURSOS
// Arrow Functions + Destructuring + Template Literals + filter/find
// **********************************

const produtos = [
    { nome: "Mouse", preco: 80, categoria: "Periféricos" },
    { nome: "Monitor", preco: 900, categoria: "Vídeo" },
    { nome: "Teclado", preco: 150, categoria: "Periféricos" }
];

// 6.1 filter() com Destructuring direto no parâmetro do Arrow Function
const produtosBaratos = produtos.filter(({ preco }) => preco <= 150);

console.log("Produtos até R$ 150:", produtosBaratos);


// 6.2 find() com Destructuring e exibição com Template Literal
const produtoMonitor = produtos.find(({ nome }) => nome === "Monitor");

if (produtoMonitor) {
    const { nome, preco, categoria } = produtoMonitor;
    console.log(`Produto encontrado: ${nome} (${categoria}) - R$ ${preco})`)};


// 6.3 Exemplo completo com lista de filmes:
const filmes = [
    { titulo: "Matrix", nota: 9 },
    { titulo: "Avatar", nota: 7 },
    { titulo: "Interestelar", nota: 10 }
];

// Filtrando filmes com nota >= 9 usando destructuring no filter
const melhoresFilmes = filmes.filter(({ nota }) => nota >= 9);

// Exibindo cada um com Template Literal e Destructuring
melhoresFilmes.forEach(({ titulo, nota }) => {
    console.log(`Destaque: O filme "${titulo}" recebeu nota ${nota}.`);
});