// function mostrarDropdown() {
//   let dropdown = document.getElementById("listaDropdown");

//   dropdown.style.display =
//     dropdown.style.display === "block" ? "none" : "block";
// }

function apresentarTexto1() {
  let texto = document.getElementById("containerTexto");
  let texto1 = document.getElementById("texto1");
  let texto2 = document.getElementById("texto2");
  let botaoTexto1 = document.getElementById("botaoTexto1");
  let botaoTexto2 = document.getElementById("botaoTexto2");

  if (texto.classList.contains("textoTela")) {
    botaoTexto2.classList.replace("botaoDestaque", "botaoFosco");
    botaoTexto1.classList.replace("botaoFosco", "botaoDestaque");
    texto1.classList.replace("textoSecundario", "textoDestaque");
    texto2.classList.replace("textoDestaque", "textoSecundario");
    square.classList.remove("texto2", "texto3");
    square.classList.add("textoPadrao");
    square.classList.replace("textoPadrao", "texto1");
  }
}

function apresentarTexto2() {
  let texto = document.getElementById("containerTexto");
  let texto1 = document.getElementById("texto1");
  let texto2 = document.getElementById("texto2");
  let botaoTexto1 = document.getElementById("botaoTexto1");
  let botaoTexto2 = document.getElementById("botaoTexto2");

  if (texto.classList.contains("textoTela")) {
    botaoTexto1.classList.replace("botaoDestaque", "botaoFosco");
    botaoTexto2.classList.replace("botaoFosco", "botaoDestaque");
    texto2.classList.replace("textoSecundario", "textoDestaque");
    texto1.classList.replace("textoDestaque", "textoSecundario");
    square.classList.remove("texto1", "texto3");
    square.classList.add("textoPadrao");
    square.classList.replace("textoPadrao", "texto2");
  }
}
