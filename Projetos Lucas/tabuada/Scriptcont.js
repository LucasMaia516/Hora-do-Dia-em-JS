function tabuada() {
    var num = document.getElementById ('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
       window.alert ('Erro, digite um número!') 
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <=10){
            var item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}