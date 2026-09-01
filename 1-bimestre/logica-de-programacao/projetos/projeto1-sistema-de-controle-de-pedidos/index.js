// CRIE SUA SOLUÇÃO ABAIXO ================
const cliente = "Mariana Silva"
const cidade = "Fortaleza"
const produto = "Notebook Pro"
const categoria = "Notebook"
const preco = 3500
const quantidade = 2
const subtotal = preco*quantidade
const valorPago = preco*quantidade
const desconto = 10
const valorDoDesconto = (subtotal*desconto)/100
const valorFinal = subtotal-valorDoDesconto
const troco = valorPago-valorFinal
const resumo = `
====================================================
TECHSTORE SISTEMAS
RESUMO DO PEDIDO
====================================================
Cliente: ${cliente}
Cidade: ${cidade}

Produto: ${produto}
Categoria: ${categoria}
Quantidade: ${quantidade}
Preço Unitário: R$ ${preco}

Subtotal: R$ ${subtotal}
Desconto: R$ ${desconto}
Valor do desconto: ${valorDoDesconto}%
Valor final: R$ ${valorFinal}

Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
`

console.log(resumo)

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente, 
  cidade,
  produto,
  categoria, 
  preco,
  quantidade, 
  subtotal, 
  valorPago,
  desconto,
  valorDoDesconto,
  valorFinal, 
  troco,
  resumo,
}