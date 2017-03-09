//Ingreso del nombre del dropdown
var name = prompt("Ingresa tu nombre");
document.getElementById("nombre").innerHTML = "Hola coder " + name.charAt(0).toUpperCase() + name.slice(1) + "!";
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	}
//Dropdown
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
/*
//Mostrar y ocultar datos de los botones--> se le coloca en onclick en cada boton con id del div que corresponde
var mostrar= function(div) {
	var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");
	if (div == "text1") {
		 text1.style.display = "block";
     text2.style.display = "none";
     text3.style.display = "none";
	} else if (div == "text2"){
    text1.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";
	} else{
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "block";
  }
}*/
sprint = document.getElementsByName("sprint");
var s1 = document.getElementById("text1");
var s2 = document.getElementById("text2");
var s3 = document.getElementById("text3");

sprint[0].addEventListener("click", function(){
	s2.style.display = "none";
	s3.style.display = "none";
	s1.style.display = "block";
});
sprint[1].addEventListener("click", function(){
	s2.style.display = "block";
	s3.style.display = "none";
	s1.style.display = "none";
});
sprint[2].addEventListener("click", function () {
	s2.style.display = "none";
	s3.style.display = "block";
	s1.style.display = "none";
})


//Arrays que contaran las preguntas
var buenas =[];
var buenas1 =[];
//Funcion para calcular respuestas del quiz1
var quiz1 = function (value) {
	var q1 = document.getElementById("quiz1");
	var boton = document.getElementById("submit1");
	if(value == "1"){
		buenas.push(1);}
	if(value == "2"){
		buenas.push(1);
	}
	if(value == "3"){
		buenas.push(1);
	}
boton.addEventListener("click", function(){
	q1.innerHTML =  "<h3>Quiz</h3>" + buenas.length+ " respuesta(s) correcta(s)" + "<br>";
})}
//Funcion para calcular respuestas del quiz2
var quiz2 = function (value) {
	var q2 = document.getElementById("quiz2");
	var boton2 = document.getElementById("submit2");
	if(value == "2"){
		buenas1.push(1);}
	if(value == "1"){
		buenas1.push(1);
	}
	if(value == "2"){
		buenas1.push(1);
	}
boton2.addEventListener("click", function(){
	q2.innerHTML =  "<h3>Quiz</h3>" + buenas1.length+ " respuesta(s) correcta(s)" + "<br>";
})}
//
document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}
