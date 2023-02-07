let puntos= 0;


function showName(){
const name= nombreUsuario.value
  if (name.length > 0) {
    document.getElementById('player').innerHTML = `Hola ${name} elige tu tema preferido.`;
    document.getElementById('pantInicial').style.display = "none";
    document.getElementById('selectTopic').style.display = "block";
  console.log(name)
  }
  else {
    alert('Por favor, ingresa tu nombre')
  }
  
}

function cine(){
document.getElementById('selectTopic').style.display= "none";

document.getElementById('pregCine1').style.display= "block";
}

function EvaluarCine1(respuesta){
  if (respuesta==2){
    puntos++;
  }
  document.getElementById('pregCine1').style.display="none"
  document.getElementById('pregCine2').style.display="block"
}

function EvaluarCine2(respuesta){
  if (respuesta==1){
    puntos++;
  }
  document.getElementById('pregCine2').style.display="none"
  document.getElementById('pregCine3').style.display="block"
  console.log(puntos)
}

function EvaluarCine3(respuesta){
  if (respuesta==3){
    puntos++;
  }
  document.getElementById('pregCine3').style.display="none"
  document.getElementById('quieroResultados').style.display="block"
  console.log(puntos)
}

function ciencia(){
document.getElementById('selectTopic').style.display= "none";

document.getElementById('pregCiencia1').style.display= "block";
}

function EvaluarCiencia1(respuesta){
  if (respuesta==3){
    puntos++;
  }
  document.getElementById('pregCiencia1').style.display="none"
  document.getElementById('pregCiencia2').style.display="block"
}

function EvaluarCiencia2(respuesta){
  if (respuesta==1){
    puntos++;
  }
  document.getElementById('pregCiencia2').style.display="none"
  document.getElementById('pregCiencia3').style.display="block"
}

function EvaluarCiencia3(respuesta){
  if (respuesta==3){
    puntos++;
  }
  document.getElementById('pregCiencia3').style.display="none"
  document.getElementById('quieroResultados').style.display="block"
  console.log(puntos)
}

function ResultadoFinal(){
 document.getElementById('quieroResultados').style.display="none"
  document.getElementById('resultados').style.display="block"
 
document.getElementById('result').innerHTML = "¡Has acertado " + puntos + " preguntas!";
  console.log(puntos)
}

function restart() {
puntos= 0;
  
nombreUsuario.value= ""; 

document.getElementById('resultados').style.display="none"

document.getElementById('pantInicial').style.display="block"
}

function anotherTopic() {
puntos= 0; 

document.getElementById('resultados').style.display="none"

document.getElementById('selectTopic').style.display="block"
}

  