function contar() {
   var ini = Number(document.querySelector('#ini').value);
   var fim = Number(document.querySelector('#fim').value);
   var pas = Number(document.getElementById('pas').value);
   var res = document.getElementById('res');
   res.innerHTML = "";
   if (isNaN(ini) || fim.value/length ==0 || pas < 1) {
       //window.alert('Erro');
       res.innerHTML = 'Impossível contar'
   } else {
       res.style.textAlign = 'center';
       res.innerHTML += `Contanto: <br>`;
       if (ini < fim){
            for (var c = ini; c <= fim; c += pas) {
                res.innerHTML += `${c} \u{1F449}`;
        }
       } else {
        for (var c = ini; c >= fim; c -= pas) {
            res.innerHTML += `${c} \u{1F449}`;
        }
       }
       res.innerHTML += `\u{1F3C1}`
   }
}