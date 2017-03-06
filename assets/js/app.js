var name = prompt("Ingresa tu nombre");
document.getElementById("nombre").innerHTML = "Hola coder " + name + "!";
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

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
}
var buenas =[];
var buenas1 =[];
var quiz1 = function (value) {
	var q1 = document.getElementById("quiz1");
	var boton = document.getElementById("submit1");
	if(value == "Expresadas y declaradas"){
		buenas.push(1);}
	if(value == "add"){
		buenas.push(1);
	}
	if(value == "propiedades y valores"){
		buenas.push(1);
	}
boton.addEventListener("click", function(){
	q1.innerHTML =  "<h3>Quiz</h3>" + buenas.length+ " respuesta(s) correcta(s)" + "<br>";
})}

var quiz2 = function (value) {
	var q2 = document.getElementById("quiz2");
	var boton2 = document.getElementById("submit2");
	if(value == "git init"){
		buenas1.push(1);}
	if(value == "Comprobar que el código funciona correctamente"){
		buenas1.push(1);
	}
	if(value == "Document Object Model"){
		buenas1.push(1);
	}
boton2.addEventListener("click", function(){
	q2.innerHTML =  "<h3>Quiz</h3>" + buenas1.length+ " respuesta(s) correcta(s)" + "<br>";
})}

document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}
