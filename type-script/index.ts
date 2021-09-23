console.log('hello word com ts')

// deixando uma propriedade opcional
interface IUsuario {
    id: string,
    nome: string,
    cargo?: 'master'| 'gerente'| 'normal'
}

function redirecione( usuario: IUsuario) {
    if (usuario.cargo){
        redirecionar(usuario.nome, usuario.id, usuario.cargo)
    }
    else{
        console.log('favor indicar o cargo')
    }
}

function redirecionar(nome: string, id: string, cargo: string){
    console.log(`Seja bem vindo ${nome} seu id é ${id} seu cargo ${cargo}`)
}
const user: IUsuario = {
    id: 'adm',
    nome: 'Gustavo',
    cargo: 'normal'
}
redirecione(user)

// Obtendo valores das tags para renderizar no html
let tag = document.getElementById('result') as HTMLParagraphElement
let input = document.getElementById('inputTs') as HTMLInputElement

input.addEventListener('input', (e) => {
    const i = e.currentTarget as HTMLInputElement
    //console.log(i.value)
    tag.innerHTML = i.value
})


// interface
interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquático'
}
interface IFelino extends IAnimal {
    visaoNoturna: boolean
}
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre'
}
const felino: IFelino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true
}
console.log(animal)
console.log(felino)



// primeiro código em ts
function soma(a: number, b: number){
    return a+b
}
let resultado = soma(3, 5)
console.log(resultado)

