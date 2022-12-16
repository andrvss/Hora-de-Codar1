// Exercício 1
var nomeDoCarro = "Fusca";

var nome = prompt("Insira o seu nome:");
alert("Olá, " + nome)

var idade = parseInt(prompt("Informe a sua idade:"));
alert("Olá, " + nome + " sua idade é " + idade + "."); 

//Formula 1 - Retângulo
var retângulo = prompt("Olá, vamos calcular a aréa de um retângulo.");
var base = parseInt(prompt("Informe o valor da base:"));
var altura = parseInt(prompt("Informe o valor da altura"));
alert("A área do retângulo é: " + base * altura); 

//Fórmula 2 - Quadrado
var retângulo = prompt("Agora vamos calcular a aréa de um quadrado.");
var lado = parseInt(prompt("Informe o valor de uma das arestas:"));
alert("A área do quadrado é: " + lado * lado); 

//Fórmula 3 - Losango
var losango = prompt("Agora vamos calcular a área de um losango.");
var diagonal_maior = parseInt(prompt("Informe o valor da diagonal maior"));
var diagonal_menor = parseInt(prompt("Informe o valor da diagonal menor"));
alert("A área do losango é: " + diagonal_maior * diagonal_menor / 2);

//Fórmula 4 -Trapézio
var trapézio = prompt("Agora vamos calcular a área de um trapézio.");
var base_maior = parseInt(prompt("Informe o valor da base maior"));
var base_menor = parseInt(prompt("Informe o valor da base menor"));
var h = parseInt(prompt("Informe o valor de h"));
alert("A área do trapézio é: " + base_maior * base_menor * h / 2); 

//Fórmula 5 - Paralelograma

var paralelograma = prompt("Agora vamos calcular a área de um paralelogramo.");
var base = parseInt(prompt("Informe o valor da base:"));
var altura = parseInt(prompt("Informe o valor da altura"));
alert("A área do paralelogramo é: " + base * altura); 

//Fórmula 6 - Triângulo 
var triângulo = prompt("Agora vamos calcular a área de um triângulo.");
var base = parseInt(prompt("Informe o valor da base:"));
var altura = parseInt(prompt("Informe o valor da altura"));
alert("A área do triângulo é: " + base * altura / 2);

//Fórmula 7 - Círculo 

var círculo = prompt("Agora vamos calcular a área de um círculo.");
var raio = parseInt(prompt("Informe o valor do raio:"));
var pi  = 3.14;
alert("A área do círculo é: " + pi * raio * raio);