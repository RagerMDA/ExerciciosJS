// ex001 - Faça uma função MAIOR_MENOR(a, b, c, d, e) que leia cinco valores inteiros e imprima o maior e o menor valor.
function ex001() {
  var a = parseInt(prompt('Digite o 1º número: '))
  var b = parseInt(prompt('Digite o 2º número: '))
  var c = parseInt(prompt('Digite o 3º número: '))
  var d = parseInt(prompt('Digite o 4º número: '))
  var e = parseInt(prompt('Digite o 5º número: '))
  var maior = a
  var menor = a

  if (b > maior) {
    maior = b
  }
  if (c > maior) {
    maior = c
  }
  if (d > maior) {
    maior = d
  }
  if (e > maior) {
    maior = e
  }
  if (b < menor) {
    menor = b
  }
  if (c < menor) {
    menor = c
  }
  if (d < menor) {
    menor = d
  }
  if (e < menor) {
    menor = e
  }

  document.getElementById('resultado1').innerHTML = `Maior: ${maior}`
  document.getElementById('resultado2').innerHTML = `Menor: ${menor}`
}

// ex002 - Criar uma função VOGAL(c) que receba um caractere como parâmetro e retorne 1 (um) caso seja uma vogal e zero caso não seja.
function ex002() {
  var c = String(prompt('Digite um caracter: ')).toUpperCase()[0]

  if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
    document.getElementById('escrita').innerHTML = `Resultado: 1`
  } else {
    document.getElementById('escrita').innerHTML = `Resultado: 0`
  }
}

// ex003 - Criar uma função LIMITES(li, ls) que leia os limites inferior e superior de um intervalo e imprimir todos os números pares no intervalo aberto e seu somatório. Suponha que os dados digitados são para um intervalo crescente.
function ex003() {
  var li = parseInt(
    prompt('Digite o limite inferior de um intervalo inteiro: ')
  )
  var ls = parseInt(
    prompt('Digite o limite superior de um intervalo inteiro: ')
  )
  var soma = 0
  var text = ''

  for (li; li <= ls; li++) {
    if (li % 2 == 0) {
      text += ` ${li}...`
      soma += li
    }
  }
  document.getElementById('sequencia').innerHTML = `Pares: ${text}`
  document.getElementById('somatorio').innerHTML = `Somatório: ${soma}`
}

// ex004 - Faça uma função ORDEM(a, b, c) que recebe 3 valores inteiros por parâmetro e retorna-os ordenados em ordem crescente.
function ex004() {
  var a = parseInt(prompt('Digite o 1º valor inteiro: '))
  var b = parseInt(prompt('Digite o 2º valor inteiro: '))
  var c = parseInt(prompt('Digite o 3º valor inteiro: '))

  if (a <= b && a <= c && b <= c) {
    document.getElementById('conj').innerHTML = `[${a}, ${b}, ${c}]`
  }
  if (a <= b && a <= c && c <= b) {
    document.getElementById('conj').innerHTML = `[${a}, ${c}, ${b}]`
  }
  if (b <= a && b <= c && c <= a) {
    document.getElementById('conj').innerHTML = `[${b}, ${c}, ${a}]`
  }
  if (b <= a && b <= c && a <= c) {
    document.getElementById('conj').innerHTML = `[${b}, ${a}, ${c}]`
  }
  if (c <= b && c <= a && a <= b) {
    document.getElementById('conj').innerHTML = `[${c}, ${a}, ${b}]`
  }
  if (c <= b && c <= a && b <= a) {
    document.getElementById('conj').innerHTML = `[${c}, ${b}, ${a}]`
  }
}

// ex005 - Faça uma função POSITIVO_NEGATIVO(x) que recebe um valor inteiro e verifica se o valor é positivo ou negativo. A função deve retornar um valor booleano.
function ex005() {
  var x = parseInt(
    prompt(
      'Digite um valor inteiro, avaliaremos se ele é positivo ou negativo: '
    )
  )

  document.getElementById('poun').innerHTML = `Valor: ${x > 0}`
}

// ex006 - Faça uma função PAR_IMPAR(x) que recebe um valor inteiro e verifica se o valor é par ou ímpar. A função deve retornar um valor booleano.
function ex006() {
  var x = parseInt(
    prompt('Digite um valor inteiro, avaliaremos se ele é par ou ímpar: ')
  )

  document.getElementById('poui').innerHTML = `Valor: ${x % 2 == 0}`
}
