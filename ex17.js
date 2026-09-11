const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const calcularMedia = ({nome, nota1, nota2}) => {
    return (nota1 + nota2) /2;
};

console.log(`${aluno.nome} ficou com média ${calcularMedia(aluno)}`);