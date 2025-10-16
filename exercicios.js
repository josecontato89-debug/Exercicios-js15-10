// 1. Crie três variáveis (nome, idade, cidade) e exiba a frase: Sou ___, tenho ___ anos e moro em ___.
// const nome = 'Jose'
// const idade = '36'
// const cidade = 'Maringa'
// console.log(`Sou ${nome}, tenho ${idade} e moro em ${cidade}`)

// 2. Declare duas variáveis (largura e altura), calcule e mostre a área de um retângulo.
// const num1 = 8;
// const num2 = 5;
// const area = num1 * num2;
// console.log(`A area de um retangulo com a largura de ${num1} cm  e altura de ${num2} cm é de ${area} cm²`);

// 3. Declare uma variável de temperatura em Celsius e converta para Fahrenheit e Kelvin e mostre as duas.
// const temp = 33
// const fah = (33*1,8)+32
// const kel = 33 + 273.15
// console.log(`A temperatura de ${temp} °C transformada para fahrenheit é ${fah}°F e para Kelvin é ${kel}°K`)

// 4. Crie uma variável saldo e simule 3 operações: depósito, saque e tarifa fixa. Atualize o saldo a cada operação e mostre o resultado final. (Usar o operador de atribuição de adição)
// var grana = 200
// const depo = grana + 100
// const saque = depo - 50
// const tarifa = (8 / 100) * (saque / 1)
// console.log(`Seu saldo é de ${grana} mais o deposito de 100 reais seu saldo fica ${depo}, com seu saque seu saldo é de ${saque}. e a tearifa de 8% em cima do seu saldo é de ${tarifa}`)

// 5. crie duas variáveis (preco, descontoPorcent) e calcule o preço final. Arredonde para 2 casas sem usar biblioteca externa.
// const preco = 789.99
// const descontoPercent = 15

// const valorDoDesconto = (descontoPercent / 100) * preco
// const precoComDesconto = preco - valorDoDesconto

// const precoFinal = Math.round(precoComDesconto * 100) / 100;

// console.log(`Preço Original: R$ ${preco.toFixed(2)}`);
// console.log(`Desconto: ${descontoPercent}%`);
// console.log(`Valor do Desconto: R$ ${valorDoDesconto.toFixed(2)}`);
// console.log(`Preço com Desconto (sem arredondar): R$ ${precoComDesconto}`);
// console.log(`Preço Final Arredondado: R$ ${precoFinal.toFixed(2)}`);


// 6. Dado um número N, mostre “par” ou “ímpar”.
// const parOuImpar = 6
// if (parOuImpar % 2 === 0 ){
//     console.log(`O numero ${parOuImpar} é par.`)
// }
// else{
//     console.log(`O numero ${parOuImpar} é impar.`)
// }


// 7. Dadas nota1, nota2 e nota3, calcule a média e classifique:
// const nota1 = 7
// const nota2 = 8
// const nota3 = 4
// const media = (nota1 + nota2 + nota3) / 3

// if(media >= 7){
//     console.log(`A nota é ${media.toFixed(2)} aprovado`)
// }
// else if (media >= 5 && media < 7){
//     console.log(`A nota é ${media.toFixed(2)} recuperção`)
// }

// else if (media < 5 ){
//     console.log(`A nota é ${media.toFixed(2)} reprovado`)
// }

// 8. Com uma variável renda calcule a faixa de imposto:
// const renda = 10000
// const imposto1 = (5/100)*renda
// const imposto2 = (10/100)*renda
// const imposto3 = (15/100)*renda


// if (renda < 2000){
//     console.log(`Com sua renda de ${renda} vocé é isento de imposto de renda.`)
// }
// else if (renda >= 2000 && renda < 5000) {
//     console.log(`Com sua renda de ${renda} vocé paga 5% de imposto de renda. Total ${imposto1}`)
// }
// else if (renda >= 5000 && renda < 10000) {
//     console.log(`Com sua renda de ${renda} vocé paga 10% de imposto de renda. Total ${imposto2}`)
// }
// else if (renda >= 10000){
//     console.log(`Com sua renda de ${renda} vocé paga 15% de imposto de renda. Total ${imposto3}`)
// }


// 9. Dentro do horário de 00:00 e 23:00, mostre: “Bom dia” (5–11), “Boa tarde” (12–17), “Boa noite” (18–23 ou 0–4).
// const horario = 03

// if (horario >= 05 && horario <= 11){
//     console.log(`Agora são ${horario} horas BOM DIA`)
// }
// else if (horario >= 12 && horario <= 17) {
//     console.log(`Agora são ${horario} horas BOA TARDE`)
// }
// else if (horario >= 18 &&  00 || horario >=01 && 04) {
//     console.log(`Agora são ${horario} horas BOA NOITE`)
// }


// 10. Dado idade e temAutorizacao (boolean), permita “Entrada permitida” somente se (idade >= 18) ou (idade < 18 e temAutorizacao === true). Senão, “Entrada negada”.
// const idade = 16
// const autorização = false
// if (idade >= 18 ){
//     console.log(`Adulto SEM autorização: Permitido`);
// }
// else if (idade <= 17 && autorização == true){
//     console.log(`Menor COM autorização: Permitido`); 
// }

// else  {
//     console.log(`Menor SEM autorização:Negado`);
// }

// 11. Mostre todos os números de 1 a 50 que sejam múltiplos de 3.
//  let quantidadePar = 0;
//  for (let i = 1; i <= 50; i++) {
//      if (i % 3 === 0) {
//          console.log(`${i} é multiplo de 3`);
//          quantidadePar++;
//      }
//  }
//  console.log(`Entre os números 1 e 50 têm ${quantidadePar} são multiplos de 3`);
 

 
