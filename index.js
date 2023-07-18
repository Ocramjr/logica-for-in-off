//For in e For of

const nome = "Marco Antônio"

for (let letrasNome of nome){
    console.log(letrasNome)
}


for (let letrasNome in nome){
    console.log(letrasNome)
}

// Objetos

const carro = {
    marca: 'fiat',
    modelo: 'Sedan',
    ano: 2023,
    cor: 'vermelho',
}

console.log(carro.marca)

for (const chave in carro) {
    console.log(chave, carro[chave])
}


const aluno = {
    nome: 'Marco Antônio',
    matricula: 'FS21',
    idade: 34
}

console.log (aluno.nome, aluno.matricula)


const produtos = [
    {nome: 'Camisa', valor: 35},
    {nome: 'Calça', valor: 300},
    {nome: 'Sapatos', valor: 65}
]

for (let nomes of produtos) {
    console.log(nomes.nome)
}

soma = 0

for (let valores of produtos) {
    soma+=valores.valor   
}

console.log (soma)