let products = JSON.parse(localStorage.getItem("produtos")) || [];

const el = document.getElementById("products");

function render(){
  el.innerHTML = "";
  products.forEach(p=>{
    el.innerHTML += `
    <div class="card">
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco}</p>
      <button onclick="buy('${p.nome}')">Comprar</button>
    </div>`;
  });
}

function buy(n){
 window.open(`https://wa.me/5511933872929?text=Quero comprar ${n}`);
}

render();
