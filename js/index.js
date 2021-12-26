function Calcular(Calcular){
        
    var n1=window.document.getElementById('n1')
    var n2=window.document.getElementById('n2')
    var res=window.document.getElementById('res')
    var name1=Number(n1.value)
    var name2=Number(n2.value)
    var name3=(name2/name1).toFixed(2)
    if(name3>=0.7){
      res.innerHTML=`O etanol compensa mais do que a gasolina`
    }else{
      res.innerHTML=`A gasolina compensa mais que o etanol`
    }
  }


function Limpar(Limpar){
    window.location.href='index.html'
}
