document.addEventListener("DOMContentLoaded", function () {
  // Array que guarda os ingredientes
const ingredientes = [];

// Pegando elementos do HTML
const nomeReceita =
  document.getElementById("nomeReceita");
const modoPreparo =
  document.getElementById("modoPreparo");
const porcoesBase =
  document.getElementById("porcoesBase");
const ingrediente =
  document.getElementById("ingrediente");
const quantidade =
  document.getElementById("quantidade");
const btnAdicionar =
  document.getElementById("btnAdicionar");
const btnSalvar =
  document.getElementById("btnSalvar");
const listaIngredientes =
  document.getElementById("listaIngredientes");
const listaReceitas =
  document.getElementById("listaReceitas");
const btnCalcular =
  document.getElementById("btnCalcular");

// Adicionar ingrediente
function adicionarIngrediente() {

  const nome = ingrediente.value;

  const qtd =
    Number(quantidade.value);

  // Condicional
  if (nome === "" || qtd <= 0) {

    alert("Preencha corretamente!");

    return;
  }

 // Objeto
  const novoIngrediente = {

    nome: nome,

    quantidade: qtd
  };

  // Array
  ingredientes.push(novoIngrediente);

  mostrarIngredientes();

  ingrediente.value = "";
  quantidade.value = "";
}

// Mostrar ingredientes
function mostrarIngredientes() {

  listaIngredientes.innerHTML = "";

  for (let i = 0; i < ingredientes.length; i++) {

    listaIngredientes.innerHTML += `

      <p>
        ${ingredientes[i].nome}
        -
        ${ingredientes[i].quantidade}
      </p>

    `;
  }
}

// Salvar receita
function salvarReceita() {

  const nome = nomeReceita.value;
  const modo = modoPreparo.value;
  const base = porcoesBase.value;

  listaReceitas.innerHTML += `
    <div>
      <h2>${nome}</h2>

      <p>Porções: ${base}</p>

      <h3>Ingredientes</h3>

      ${ingredientes.map(i =>
        `<p>${i.nome} - ${i.quantidade}</p>`
      ).join("")}

      <h3>Modo de preparo</h3>
      <p>${modo}</p>
    </div>
    <hr>
  `;
  ingredientes.length = 0;
  mostrarIngredientes();
}

function recalcularReceita() {

  const base = Number(document.getElementById("porcoesBase").value);
  const desejada = Number(document.getElementById("porcoesDesejadas").value);

  if (base <= 0 || desejada <= 0) {
    alert("Digite porções válidas!");
    return;
  }

  listaIngredientes.innerHTML = "";

  for (let i = 0; i < ingredientes.length; i++) {

    const novaQuantidade =
      (ingredientes[i].quantidade * desejada) / base;

    listaIngredientes.innerHTML += `
      <p>
        ${ingredientes[i].nome} - ${novaQuantidade.toFixed(2)}
      </p>
    `;
  }
}


// Eventos
btnAdicionar.addEventListener(
  "click",
  adicionarIngrediente
);

btnSalvar.addEventListener(
  "click",
  salvarReceita
);

btnCalcular.addEventListener(
  "click",
  recalcularReceita
);

});