
"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0",
    FMT_NUMERO = "0,.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%",
    forma = document.getElementById("forma"),
    salidaSuma = document.getElementById("salidaSuma"),
    salidaResta = document.getElementById("salidaResta"),
    salidaMultiplicacion = document.getElementById("salidaMultiplicacion"),
    salidaDivision= document.getElementById("salidaDivision");
forma.addEventListener("submit", procesa, false);
forma["limpiar"].addEventListener("click", limpiar, false);
Node.prototype.info = function(mensaje){
 this.className="";
 this.textContent=mensaje;
};   
Node.prototype.error = function(mensaje){
 this.className="error";
 this.textContent=mensaje;
};   
function procesa(){
  
    var operador1 = forma["operador1"].valueAsNumber,
        operador2 = forma["operador2"].valueAsNumber,error = false;


  
 if (operador2===0){
    error=true;
    salidaDivision.error("División Error");
    var total = new BigNumber(operador1).times(new BigNumber(2)),
        resultado1 = operador1+operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        
        salidaSuma.info("Suma: " + numeral(resultado1).format(FMT_MONEDA)+"(+)");
        
 var total3 = new BigNumber(operador1).times(new BigNumber(2)),
        resultado3 = operador1-operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        salidaResta.info("Resta: " + numeral(resultado3).format(FMT_MONEDA)+"(-)");
        
 var total4 = new BigNumber(operador1).times(new BigNumber(2)),
        resultado4 = operador1*operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        salidaMultiplicacion.info("Multiplicación: " + numeral(resultado4).format(FMT_MONEDA)+"(*)");
  }
  

 

  
 else if (!error) {
     
var total = new BigNumber(operador1).times(new BigNumber(2)),
        resultado1 = operador1+operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        
        salidaSuma.info("Suma: " + numeral(resultado1).format(FMT_MONEDA)+"(+)");
        
   var total2 = new BigNumber(operador1).times(new BigNumber(2)),
        resultado = operador1/operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        
        salidaDivision.info("División: " + numeral(resultado).format(FMT_MONEDA)+"(/)"); 
        
 var total3 = new BigNumber(operador1).times(new BigNumber(2)),
        resultado3 = operador1-operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        salidaResta.info("Resta: " + numeral(resultado3).format(FMT_MONEDA)+"(-)");
        
 var total4 = new BigNumber(operador1).times(new BigNumber(2)),
        resultado4 = operador1*operador2,
        numeroEnTexto =numeral(operador1).format(FMT_NUMERO);
        numeroEnTexto = numeral(operador2).format(FMT_NUMERO);
        salidaMultiplicacion.info("Multiplicación: " + numeral(resultado4).format(FMT_MONEDA)+"(*)");
  }
    

 

 
  }



function limpiar(){
  forma["operador1"].value="";
  forma["operador2"].value="";
  forma["salidaSuma"].value="";
  forma["salidaResta"].value="";
  forma["salidaMultiplicacion"].value="";
  forma["salidaDivision"].value="";
  
 
}
