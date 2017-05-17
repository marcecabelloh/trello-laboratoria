var elInput = document.getElementsByClassName("inpuT");
var crearInput = document.createElement("input");
var mensajeInput = document.createTextNode("");
crearInput.appendChild(mensajeInput);
elInput.appendChild(crearInput);

var elBoton = document.getElementsByClassName("añade");
var crearBoton = document.createElement("button");
var atributoBoton = document.createAttribute("button");
crearBoton.appendChild(atributoBoton);
elBoton.appendChild(crearInput);

function demo(){
	var pulsar = document.getElementsByClassName("añade");
	pulsar.addEventListener("click", function(){
		elInput.appendChild(crearInput).toggle();
	})
}
