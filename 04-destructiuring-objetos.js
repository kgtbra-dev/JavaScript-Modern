// ============================================
// 4. DESESTRUTURAÇÃO (DESTRUCTURING) DE ARRAYS
// ============================================

// 4.1 Desestruturação básica de array (baseada na posição dos elementos)

const cores = ["Azul", "Verde", "Vermelho"];
const [primeiracor, segundacor, terceiracor] = cores;
console.log("Primeira cor: ", primeiracor);
console.log("Segunda cor: ", segundacorcor);
console.log("Terceira cor: ", terceiracorcor);

// 4.2 Comparando Objetos vs Arrays:
// - Objeto: o nome da propriedade importa { nome, idade}
// - Array: a ordem/posição importa [ nome, idade]

//Exemplo com Objeto
const pessoaObjeto = {
    nome: "Carlos",
    idade: 20
};
const { nome, idade } = pessoaObjeto;
console.log(`Objeto -> Nome: ${nome}, Idade: ${idade}`);


// Exemplo com Array:
const pessoaArray = ["Carlos", 20];
const [nomeAluno, idadeAluno] = pessoaArray;
console.log(`Array  -> Nome: ${nomeAluno}, Idade: ${idadeAluno}`);