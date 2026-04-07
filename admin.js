let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function salvar(){
  const nome = document.getElementById("nome").value;
  const custo = parseFloat(document.getElementById("custo").value);

  let frete=25, embalagem=2, ads=0.05, imposto=0.05, margem=0.20;

  let base = custo + frete + embalagem;
  let preco = base/(1 - ads - imposto - margem);

  produtos.push({nome, preco:preco.toFixed(2)});

  localStorage.setItem("produtos", JSON.stringify(produtos));
  carregar();
}

function carregar(){
  const lista = document.getElementById("lista");
  lista.innerHTML="";
  produtos.forEach(p=>{
    lista.innerHTML += `<li>${p.nome} - R$ ${p.preco}</li>`;
  });
}

carregar();
