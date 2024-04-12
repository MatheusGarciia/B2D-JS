let field = document.getElementById('valor')
let btn = document.querySelector('.btn')
let result = document.querySelector('.result')

btn.addEventListener('click', function(){
    let valor = field.value
    let respost = transformDecimal(valor)
    result.innerHTML = respost
})

field.addEventListener('keypress', function(e){
    if (e.key == 'Enter') {
        let valor = field.value
        let respost = transformDecimal(valor)
        result.innerHTML = respost
    }
})

function transformDecimal(val){
    let calc = 0
    for (let i = 0; i < val.length; i++) {
        if (val[i] == 1 || val[i] == 0){
        calc += val[i] * (2 ** i) 
        } else {
            alert('Type only ones and zeros')
            break
    }
}
    return calc
}

