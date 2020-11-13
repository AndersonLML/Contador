function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = '[ERRO]Impossível Contar!'
    } else { 
        res.innerHTML += 'Contando. <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p == 0) {
            res.innerHTML = 'Impossível fazer com Passo(0), Considerando Passo(1) <br>'
            p = 1 
        }

        if (i < f) {
        for (c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for (c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
            res.innerHTML += ` \u{1F525}`
    }
    }
