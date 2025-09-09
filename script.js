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
//barra de pesquisa:

function procurar(){
    let pesquisa = document.getElementById("barraPesquisa").value;
    console.log(pesquisa);
    pesquisa = pesquisa.toLowerCase();
    //console.log(pesquisa);
    let elements = document.getElementsByClassName("card");
    //console.log(elements);
    //console.log(elements.length);
    //console.log(elements[i].textContent.toLowerCase().includes(pesquisa));

    for(i = 0; i < elements.length; i++){
        if(!elements[i].textContent.toLowerCase().includes(pesquisa)){
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "flex";
        }
    }

}
