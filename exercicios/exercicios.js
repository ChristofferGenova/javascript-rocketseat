/*
 * Exercicio 1
 */
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

const retornaEndereco = endereco => {
  return `O usuario mora em ${endereco.cidade}/${endereco.uf}, no bairro ${
    endereco.bairro
  }, na rua "${endereco.rua}" com nº ${endereco.numero}`;
};
// console.log(retornaEndereco(endereco));
/*
 * Fim Exercicio 1
 */

/*
 * Exercicio 2
 */
const pares = (x, y) => {
  for (i = x; i <= y; i++) {
    if (i % 2 == 0) {
      console.log(`Número par: ${i}`);
    }
  }
};
// console.log(pares(32, 40));
/*
 * Fim Exercicio 2
 */

/*
 * Exercicio 3
 */
var skills = ["Javascript", "ReactJS", "ReactNative"];

const temHabilidade = skills => {
  for (i = 0; i <= skills.length; i++) {
    if (skills[i] === "Javascript") {
      return true;
    }
    return false;
  }
};
// console.log(temHabilidade(skills))
/*
 * Fim Exercicio 3
 */

/*
 * Exercicio 4
 *-- Dados --
 *De 0-1 ano: Iniciante
 *De 1-3 anos: Intermediário
 *De 3-6 anos: Avançado
 *De 7 acima: Jedi Master
 */
var anosEstudo = 7;

const experiencia = anos => {
  if (anos >= 0 && anos <= 1) {
    return "Iniciante";
  } else if (anos > 1 && anos <= 3) {
    return "Intermediário";
  } else if (anos > 3 && anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
};
// console.log(experiencia(anosEstudo))
/*
 * Fim Exercicio 4
 */

/*
 * Exercicio 5
 */
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

const habilidades = usuarios => {
  for (usuario of usuarios) {
    console.log(
      `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join()}`
    );
  }
};
//habilidades(usuarios)
/*
 * Fim Exercicio 4
 */

/*
 * Exercicio 1 Promise
 */
const checaIdade = idade => {
  return new Promise((resolve, reject) => {
    if (idade < 18) {
      reject();
    } else {
      resolve();
    }
  });
};

// checaIdade(20)
//   .then(response => {
//     console.log("Maior que 18");
//   })
//   .catch(error => {
//     console.log("Menor que 18");
//   });
/*
 * Fim exercicio 1 Promise
 */