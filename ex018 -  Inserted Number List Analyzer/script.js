let num = document.getElementById('num')
let vetor = []
let list = document.getElementById('list')
var res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
        }
    num.value=""
    num.focus()
    } 


function finalizar(){
    if (vetor.length ==0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(let pos in vetor){
            soma += vetor[pos]

            if (vetor[pos] > maior)
                maior = vetor[pos]
            if (vetor[pos] < menor)
                menor = vetor[pos]
        }
        media = soma/vetor.length
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}