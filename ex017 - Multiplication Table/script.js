function gerar() {
   var ini = document.getElementById('ini');
   var tab = document.getElementById('tab');
   if (ini.value.length == 0){
        window.alert = ('Insira um número')
   } else {
    var n = Number(ini.value)
    tab.innerHTML = ""
    for (var c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
       }
   }
   }