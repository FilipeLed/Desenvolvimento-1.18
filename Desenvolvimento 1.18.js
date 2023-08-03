// Criando a matriz bidimensional com informações sobre os animais
const animais = [
    ["Ornitorrinco", "Mamífero", 5],
    ["Sucurí", "Reptíl", 10],
    ["Avestruz", "Ave", 3],
    ["Tubarão", "Peixe", 7],
  ];
  
  // Acessando as informações dos animais na matriz
  console.log("Nome do primeiro animal:", animais[0][0]); // Ornitorrinco
  console.log("Espécie do segundo animal:", animais[1][1]); // Reptíl
  console.log("Idade do terceiro animal:", animais[2][2]); // 3
  
  // Adicionando um novo animal à matriz
  const novoAnimal = ["Girafa", "Mamífero", 8];
  animais.push(novoAnimal);
  
  // Modificando a idade do segundo animal
  animais[1][2] = 11;
  
  // Imprimindo a matriz completa
  console.log("Matriz completa:", animais);
  