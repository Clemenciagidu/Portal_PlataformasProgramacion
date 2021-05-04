var secciones = [];
//var rutas = [" ",index","acercade","servicios","portafolio","contacto"];
var rutas = ["","index","acercade","servicios","stats","portafolio","contacto"];
var bajo_logeo = ["seccion_2","seccion_5"];
var usuario_logeado = true;

window.onload = init;

function init (){
	setTimeout(hideURLbar, 0);
	asignarVariables();
	asignarEventos();
	//new Splide( '.splide' ).mount();
new Splide( '.splide', {
	type   : 'loop',
	padding: {
		right: '5rem',
		left : '5rem',
	},
} ).mount();
}


function hideURLbar(){
	window.scrollTo(0, 1);
}

function asignarVariables(){
	secciones["seccion_1"] = document.getElementById("seccion_1");
	secciones["seccion_2"] = document.getElementById("seccion_2");
	secciones["seccion_3"] = document.getElementById("seccion_3");
	secciones["seccion_4"] = document.getElementById("seccion_4");
	secciones["seccion_5"] = document.getElementById("seccion_5");
	secciones["seccion_6"] = document.getElementById("seccion_6");
}

function asignarEventos(){
	var temp;
	for(var i in secciones)
	{
		/*console.log(i);*/
		temp = secciones[i]; 
		//console.log(temp); /*estoy recuperando ese elemnto html como una referencia*/
		temp.addEventListener("click", navegacion); //ya todos van a navegar a traves de una funcion que se llama navegacion
	}
}

function controlAcceso(indice){
	for(i in bajo_logeo){
		if(bajo_logeo[i] == indice){
			return true;
		} 
	}
	return false;
}

function navegacion(event){
	/*console.log(event.taget); con esto verfico las secciones*/
	var id = event.target.id;  /*de esta manera accedo al id */
	var indice = id.split("_")[1];/*voy a obtener el numero*/
	//console.log(id);
	//console.log(rutas[indice]);
	var ruta = rutas[indice]+".html";

	//if(controlAcceso(id) && usuario_logeado){ //asi funciona un enrutador
		location.href = ruta; //location es un objeto en javascript que controla la navegacion 
	//}
	//else {
		//alert("Error, esta sección requiere logeo");
	//}
} 