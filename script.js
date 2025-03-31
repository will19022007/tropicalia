document.addEventListener('DOMContentLoaded', function () {

let tamanhoAtualFonte = 1;

const aumentaTamanhoBotao = document.getElementById('aumentar-fonte');

aumentaTamanhoBotao.addEventListener('click', function () {

tamanhoAtualFonte += 0.1;

document.body.style.fontSize =  `${tamanhoAtualFonte}rem`

})

const diminuiTamanhoBotao = document.getElementById('diminuir-fonte')

diminuiTamanhoBotao.addEventListener('click', function () {

    tamanhoAtualFonte -= 0.1;
    
    document.body.style.fontSize =  `${tamanhoAtualFonte}rem`
    
    })

} )