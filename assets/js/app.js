
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

//var quiz2 = document.getElementById("quiz2");
var quiz1 = function (value) {
	var buenas =0;
	var malas =0;
	var q1 = document.getElementById("quiz1");
	var boton = document.getElementById("submit1");
	var pregunta1 = document.getElementsByClassName("n011");
	if(pregunta1.value == "Expresadas y declaradas"){
		buenas++;
	} else{
		malas =0;
	}
	q1.innerHTML = "fjdgdjkg";


}
