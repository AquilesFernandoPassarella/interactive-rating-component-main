const btn = document.getElementById("btn");
const estilo = document.getElementsByClassName("container");
const message = document.getElementsByClassName("message__final");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
let nota = document.getElementById("selecionado");

btn.addEventListener("click", () => {
  estilo[0].style.display = "none";
  message[0].style.display = "flex";
});

btn1.addEventListener("click", (event) => {
  let valor = event.target.value;
  exibirEscolha(valor);
});

btn2.addEventListener("click", (event) => {
  let valor = event.target.value;
  exibirEscolha(valor);
});

btn3.addEventListener("click", (event) => {
  let valor = event.target.value;
  exibirEscolha(valor);
});

btn4.addEventListener("click", (event) => {
  let valor = event.target.value;
  exibirEscolha(valor);
});

btn5.addEventListener("click", (event) => {
  let valor = event.target.value;
  exibirEscolha(valor);
});

function exibirEscolha(valor) {
  nota.innerHTML = valor;
}
