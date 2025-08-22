/*pido al usuario la cantidad de libros y valido con while*/

let cantidad=Number(prompt("ingresá la cantidad de libros comprados",""));

while (isNaN(cantidad) || cantidad<0 || cantidad==" ") {
	cantidad=Number(prompt("el dato ingresado es incorrecto, ingresá una cantidad valida"));
	}

	

/*inicio el contador de libros y creo las variables para trabajar*/

let cantLibros=0;
let precio;
let precioLibros=[];
let total;
let suma=0;
let promedio;



/*pido el precio de cada libro con un for y lo valido con while. Posteriormente ingreso cada valor de precio al array vacío creado anteriormente*/

for (i=1; i<=cantidad; i++) {

	precio=Number(prompt("ingresá el precio del libro "+i));

	while (isNaN(precio) || precio<0 || precio==" ") {
		precio=Number(prompt("el dato ingresado es incorrecto, por favor ingresa una cantidad valida"));
	}

	precioLibros.push(precio);

	total=suma+=precio;
	let totalText=document.querySelector(".total");
	totalText.innerText="el precio total es "+total+" pesos";

	promedio=total/precioLibros.length;
	let promedioText=document.querySelector(".promedio");
	promedioText.innerText="con un promedio de "+promedio+" pesos por libro";
}



/*recorro el array con for para comparar y buscar el libro mas barato y el mas caro. Para lograrlo uso dos variables con la posicion [0] para iniciar la comparación*/

let caro=precioLibros[0];
let barato=precioLibros[0];

for (i=0; i<precioLibros.length; i++) {

	if (precioLibros[i]>caro) {
		caro=precioLibros[i];
	}

	if (precioLibros[i]<barato) {
		barato=precioLibros[i];
	}
}



/*muestro los resultados fuera del bucle para escribirlo una sola vez, sino no lo registra*/

let masCaro=document.querySelector(".caro");
masCaro.innerText="el libro más caro costó "+caro+" pesos";

let masBarato=document.querySelector(".barato");
masBarato.innerText="el libro más barato costó "+barato+" pesos";
