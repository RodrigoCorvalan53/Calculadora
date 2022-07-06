var numero1;
var numero2;
var operar;

function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var mas = document.getElementById('mas');
    var menos = document.getElementById('menos');
    var multi = document.getElementById('multi');
    var div = document.getElementById('div');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
  }

  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
mas.onclick = function(e){
    numero1 = resultado.textContent;
    operar = "+";
    limpiar();
}
menos.onclick = function(e){
    numero1 = resultado.textContent;
    operar = "-";
    limpiar();
}
multi.onclick = function(e){
    numero1 = resultado.textContent;
    operar = "*";
    limpiar();
}
div.onclick = function(e){
    numero1 = resultado.textContent;
    operar = "/";
    limpiar();
}
igual.onclick = function(e){
    numero2 = resultado.textContent;
    resolver();
}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
}

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operar = "";
  }

  function resolver(){
    var res = 0;
    switch(operar){
      case "+":
        res = parseFloat(numero1) + parseFloat(numero2);
        break;
      case "-":
          res = parseFloat(numero1) - parseFloat(numero2);
          break;
      case "*":
        res = parseFloat(numero1) * parseFloat(numero2);
        break;
      case "/":
        res = parseFloat(numero1) / parseFloat(numero2);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
