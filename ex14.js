const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};

const apresentarPessoa = ({nome,idade,profissao}) => {
 return `${nome} tem ${idade} e trabalho como ${profissao}`;
}

console.log(apresentarPessoa(pessoa))