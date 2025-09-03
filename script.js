function favoritar(botao) {
  if (botao.innerHTML == "🤍") {
    botao.innerHTML = "❤";
  } else {
    botao.innerHTML = "🤍";
  }
}

function ler() {
  let lista = document.querySelector("#lerfile").parentElement;

  
  let item1 = document.createElement("li");
  item1.textContent = "2 ovos;";

  let item2 = document.createElement("li");
  item2.textContent = "1 xícara e 1/2 de farinha de trigo;";

  let item3 = document.createElement("li");
  item3.textContent = "Óleo para fritar.";

  lista.appendChild(item1);
  lista.appendChild(item2);
  lista.appendChild(item3);

  document.querySelector(".diminuir").style.display = "none";
}