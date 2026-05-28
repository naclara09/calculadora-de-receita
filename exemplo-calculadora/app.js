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
const ingredientesTempDiv =
  document.getElementById("ingredientesTemp");
const listaReceitas =
  document.getElementById("listaReceitas");
const visualizarReceita =
  document.getElementById("visualizarReceita");

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

  ingredientesTempDiv.innerHTML = "";

  // Laço
  for (let i = 0; i < ingredientes.length; i++) {

    ingredientesTempDiv.innerHTML += `

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

  const nomeReceita =
    document.getElementById("nomeReceita").value;

  const modoPreparo =
    document.getElementById("modoPreparo").value;

  const porcoesBase =
    document.getElementById("porcoesBase").value;

  visualizarReceita.innerHTML = `

    <h2>${nomeReceita}</h2>

    <p>
      Porções:
      ${porcoesBase}
    </p>

    <h3>Ingredientes</h3>

  `;

  for (let i = 0; i < ingredientes.length; i++) {

    visualizarReceita.innerHTML += `

      <p>
        ${ingredientes[i].nome}
        -
        ${ingredientes[i].quantidade}
      </p>

    `;
  }

  visualizarReceita.innerHTML += `

    <h3>Modo de preparo</h3>

    <p>${modoPreparo}</p>

  `;

  listaReceitas.innerHTML += `

    <p>${nomeReceita}</p>

  `;
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
  recalcularReceita
