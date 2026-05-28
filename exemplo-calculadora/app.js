// Array que guarda os ingredientes
const ingredientes = [];

// Pegando elementos do HTML
const ingredienteInput = document.getElementById("ingrediente");
const quantidadeInput = document.getElementById("quantidade");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnCalcular = document.getElementById("btnCalcular");

const lista = document.getElementById("listaIngredientes");

// Adiciona ingrediente
function adicionarIngrediente() {

  const nome = ingredienteInput.value;
  const quantidade = Number(quantidadeInput.value);

  // Condicional
  if (nome === "" || quantidade <= 0) {
    alert("Preencha os campos corretamente");
    return;
  }

  // Objeto
  const ingrediente = {
    nome: nome,
    quantidade: quantidade
  };

  // Array
  ingredientes.push(ingrediente);

  mostrarIngredientes();

  ingredienteInput.value = "";
  quantidadeInput.value = "";
}

// Mostra ingredientes na tela
function mostrarIngredientes() {

  lista.innerHTML = "";

  // Laço
  for (let i = 0; i < ingredientes.length; i++) {

    lista.innerHTML += `
      <p>
        ${ingredientes[i].nome} -
        ${ingredientes[i].quantidade}
      </p>
    `;
  }
}

// Recalcula receita
function recalcularReceita() {

  const base =
    Number(document.getElementById("porcoesBase").value);

  const desejada =
    Number(document.getElementById("porcoesDesejadas").value);

  if (base <= 0 || desejada <= 0) {
    alert("Digite porções válidas");
    return;
  }

  lista.innerHTML = "";

  for (let i = 0; i < ingredientes.length; i++) {

    const novaQuantidade =
      ingredientes[i].quantidade * desejada / base;

    lista.innerHTML += `
      <p>
        ${ingredientes[i].nome} -
        ${novaQuantidade.toFixed(2)}
      </p>
    `;
  }
}

// Eventos
btnAdicionar.addEventListener(
  "click",
  adicionarIngrediente
);

btnCalcular.addEventListener(
  "click",
  recalcularReceita
);