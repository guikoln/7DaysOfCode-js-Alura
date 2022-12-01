// desafio dia 2 - Variáveis

const nome = prompt("Qual e seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert (msg);

alert (`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

const valor = prompt('Digite 1 ou 2.');

if(valor == 1){
  alert('Muito bom! Continue estudando e você terá muito sucesso.')
}
if(valor == 2){
  alert('Ahh que pena... Já tentou aprender outras linguagens?')
}

alert('Obrigado!');
