document.addEventListener("DOMContentLoaded", function () {

  // array que guarda os ingredientes e receitas
  let ingredientes = [];
  let receitas = [];

  const nomeReceita = document.getElementById("nomeReceita");
  const modoPreparo = document.getElementById("modoPreparo");
  const porcoesBase = document.getElementById("porcoesBase");
  const porcoesDesejadas = document.getElementById("porcoesDesejadas");

  const ingrediente = document.getElementById("ingrediente");
  const quantidade = document.getElementById("quantidade");

  const listaIngredientes = document.getElementById("listaIngredientes");
  const listaReceitas = document.getElementById("listaReceitas");

  const btnAdicionar = document.getElementById("btnAdicionar");
  const btnSalvar = document.getElementById("btnSalvar");
  const btnCalcular = document.getElementById("btnCalcular");

  // adicionar ingrediente
  function adicionarIngrediente() {

    let nome = ingrediente.value;
    let qtd = Number(quantidade.value);

    if (nome === "" || qtd <= 0) {
      alert("Preencha corretamente!");
      return;
    }

    let novo = {
      nome: nome,
      quantidade: qtd
    };

    ingredientes.push(novo);

    mostrarIngredientes();

    ingrediente.value = "";
    quantidade.value = "";
  }

  // Mostrar ingredientes na tela
  function mostrarIngredientes() {

    listaIngredientes.innerHTML = "";

    for (let i = 0; i < ingredientes.length; i++) {

      listaIngredientes.innerHTML +=
        "<p>" +
        ingredientes[i].nome +
        " - " +
        ingredientes[i].quantidade +
        "</p>";
    }
  }

  // salvar receita
  function salvarReceita() {

    if (nomeReceita.value === "" || porcoesBase.value <= 0 || ingredientes.length === 0) {
      alert("Preencha tudo!");
      return;
    }

    let receita = {
      nome: nomeReceita.value,
      modo: modoPreparo.value,
      base: Number(porcoesBase.value),
      ingredientes: [...ingredientes]
    };

    receitas.push(receita);

    mostrarReceitas();

    ingredientes.length = 0;
    mostrarIngredientes();

    nomeReceita.value = "";
    modoPreparo.value = "";
    porcoesBase.value = "";
    porcoesDesejadas.value = "";
  }

  // mostrar receitas
  function mostrarReceitas() {

    listaReceitas.innerHTML = "";

    for (let i = 0; i < receitas.length; i++) {

      listaReceitas.innerHTML +=
        "<p onclick='verReceita(" + i + ")' style='cursor:pointer;'>" +
        "🍲 " + receitas[i].nome +
        "</p>";
    }
  }

  // ver receita
  window.verReceita = function (i) {

    let r = receitas[i];

    listaReceitas.innerHTML =
      "<h2>" + r.nome + "</h2>" +
      "<p><b>Porções:</b> " + r.base + "</p>" +
      "<h3>Ingredientes</h3>";

    for (let j = 0; j < r.ingredientes.length; j++) {
      listaReceitas.innerHTML +=
        "<p>" +
        r.ingredientes[j].nome +
        " - " +
        r.ingredientes[j].quantidade +
        "</p>";
    }

    listaReceitas.innerHTML +=
      "<h3>Modo de preparo</h3>" +
      "<p>" + r.modo + "</p>" +
      "<br><button onclick='window.mostrarReceitas()'>Voltar</button>";
  };

  window.mostrarReceitas = mostrarReceitas;

  // recalcular receita
  function recalcularReceita() {

    let base = Number(porcoesBase.value);
    let desejada = Number(porcoesDesejadas.value);

    if (!base || !desejada || base <= 0 || desejada <= 0) {
      alert("Digite valores válidos!");
      return;
    }

    listaIngredientes.innerHTML = "";

    for (let i = 0; i < ingredientes.length; i++) {

      let novaQtd =
        (ingredientes[i].quantidade * desejada) / base;

      listaIngredientes.innerHTML +=
        "<p>" +
        ingredientes[i].nome +
        " - " +
        novaQtd.toFixed(2) +
        "</p>";
    }
  }

  // eventos
  btnAdicionar.addEventListener("click", adicionarIngrediente);
  btnSalvar.addEventListener("click", salvarReceita);
  btnCalcular.addEventListener("click", recalcularReceita);

  mostrarReceitas();

});