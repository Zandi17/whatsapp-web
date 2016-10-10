window.addEventListener("load",function() {

	var laboratoria = document.getElementById("laboratoria");
	var	raymi = document.getElementById("raymi");
	var	mariana = document.getElementById("mariana");
	var	chama = document.getElementById("chama");
	var	chamo = document.getElementById("chamo");
	var	andrea = document.getElementById("andrea");
	var	papu = document.getElementById("papu");
	var	katy = document.getElementById("katy");
	var	aldo = document.getElementById("aldo")
	var	curricula = document.getElementById("curricula");
	var	jose = document.getElementById("jose");
	var contactos = [laboratoria,raymi,mariana,chama,chamo,andrea,papu,katy,aldo,curricula,jose]

	var enviar = document.getElementById("mensajes");
	
	enviar.addEventListener("keyup",function(e){
    	e.preventDefault();
    	if (event.keyCode == 13) {
       		 publicar();
   		     enviar.value="";
   		 }
	});

	chama.addEventListener("click",function(){
		cambiar();
	})

	function publicar () {
		var conversacion = document.getElementById("conversacion");
		conversacion.classList.add("w-message-out","w-message");
		var p = document.createElement("p");
		var divHora = document.createElement("div");
		// divHora.classList.add("time");
		var horaPub = fechaPub();

		p.innerText = enviar.value;
		divHora.innerText = horaPub;

		conversacion.appendChild(p);
		conversacion.appendChild(divHora);
	}

	function fechaPub () {
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();

		return hora + ":" + minuto;
	}
	function contactos(){


		var l = contactos.length;
		if (l > 0) {
			for (var i = 0; i < l; i++) {
				[i];
			}
		}
		return contactos;
	}

	function cambiar(){
  		document.getElementById("cambio").innerText = chama;
	}
});
	