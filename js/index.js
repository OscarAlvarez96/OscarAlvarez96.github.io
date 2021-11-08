"use strict";
var forma = document.getElementById ("forma"),
resultado = document.getElementById("resultado");
forma.addEventListener("submit",procesa,false);

function calcula(valor1,valor2){
    const num = valor1;
         const exponente = valor2;
         let r = 1;
         let i = 0; 
         while(i < exponente){
             r = r * num;
             i++;
         }
         return (r);
}

function procesa(){
    var num =parseInt( forma["num"].value);
    var res="";
    for (var i = 0; i <= 10; i++) {
         res=res+ num +" A la " +i+ "="+calcula(num,i)+"\n";
        
    }
   forma["resultado"].value=res;
}
