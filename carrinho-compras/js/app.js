let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = ``;
document.getElementById('valor-total').innerHTML = `R$ 0`;

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produtos = document.getElementById('produto').value;
    let nomeProduto = produtos.split('-')[0];
    let valorUnitario = parseFloat(produtos.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value; 
        //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById(`quantidade`).value = 0;
}


function limpar(){
    document.getElementById('lista-produtos').innerHTML = ``;
    document.getElementById('valor-total').innerHTML = `R$ 0`;
    document.getElementById(`quantidade`).value = 0;
    
}