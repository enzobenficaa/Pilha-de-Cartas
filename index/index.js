// Criamos um array vazio
const baralho = [];
// Criamos as opções para iterar sobre o switch
let op = "";
// Criamos o menu com as opções para o usuario escolher
do {
  op = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta \n2. Puxar uma carta \n 3. Sair"
  );
  //Inicio do switch
  switch (op) {
    // Para adicionar uma carta
    case "1":
      // Perguntamos ao usuario qual carta ele quer adicionar
      const novaCarta = prompt("Qual é a carta?");
      // Depois de salvarmos a carta, vamos acrescenta-la no array
      baralho.push(novaCarta);
      break;
    case "2":
      // Para puxar uma carta, vamos usar o metodo "pop" para pegar a ultima adicionada
      const cartaPuxada = baralho.pop();
      // Aqui criamos uma condição para se nao tiver nenhuma carta adicionada
      // Exibimos uma mensagem de nenhuma carta no baralho
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho");
      }
      // Se nao, exibimos uma mensagem com a carta que foi puxada
      else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;
    // Um caso para mostrar que o programa esta fechando
    case "3":
      alert("Finalizando...");
      break;
    // Um caso para tratar de qualquer valor que nao esta pre-definido
    default:
      alert("Opção Inválida");
  }
} while (op != "3");
