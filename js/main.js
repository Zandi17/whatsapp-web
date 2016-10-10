window.addEventListener("load",function() {
	var avatar = document.getElementsByClassName("avatar")
	var enviar = document.getElementById("mensajes");

	enviar.addEventListener("keyup",function(e){
    	e.preventDefault();
    	if (event.keyCode == 13) {
       		 publicar();
   		     enviar.value="";
   		 }
	})
		for (var i = 1; i <= 11; i++) {
				avatar[i].addEventListener("click",cambioHeader)
			}

	function publicar () {
		var conversacion = document.getElementById("conversacion");
		var divPadre = document.createElement("div")
		divPadre.classList.add("w-message","w-message-out")
		var divPub = document.createElement("div")
		divPub.classList.add("w-message-text");
		var p = document.createElement("p");
		var divHora = document.createElement("div");
		divHora.classList.add("time");
		var horaPub = fechaPub();

		p.innerText = enviar.value;
		divHora.innerText = horaPub;

		conversacion.appendChild(divPadre);
		divPadre.appendChild(divPub);
		divPub.appendChild(p);
		divPub.appendChild(divHora);
	}
	function fechaPub () {
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		return hora + ":" + minuto;
	}
	function cambioHeader(){
  		imagen.src = this.childNodes[1].src;
  		titulo.textContent = this.childNodes[3].textContent;
	}
});
	