
import React from 'react';
import './Calendar.css';

const Calendar = () => {


    const cifra = (num, c1, c2, c3) => {
    let j;

        if (num === 9) {
            console.log(c1, c3);
        } else if (num > 4){
            console.log(c2);

	        for(j=1; j<=num-5; j++) {
	            console.log(c1);
	        }

        } else if (num === 4) {
	        console.log(c1, c2);
	    } else {
	        for(j=1; j<=num; j++){
	            console.log(c1);
	        }
	    }
        }
 


const romano = (num) => {
    let mil, cen, dec, uni;

    //console.log("%d\n", num);

    // Separar cada cifra del numero letroducido
    mil=num/1000;
    cen=(num%1000)/100;
    dec=(num%100)/10;
    uni=num%10;

    // Hacer una llamada a la funcion por cada cifra del numero
    cifra(mil, 'M', ' ', ' ');
    cifra(cen, 'C', 'D', 'M');
    cifra(dec, 'X', 'L', 'C');
    cifra(uni, 'I', 'V', 'X');
    }


    const anyos = (anyo, dia, mes1) => {
		let x=0, b=0;
		let principal=1;
		let dias;
		let resto;

		//	1 de enero del anyo 1.

		// Con esto hallo la cantidad de años que pasan desde el año 1 hasta el año dado.
		for (principal=1; principal<anyo; principal++)
			{
			x++;
			//Con esto hallo la cantidad de años bisiestos entre el año dado y el año 1.
				if ((principal%4===0 && principal%100!==0) || (principal%400===0))
					{
					b++;
					}
			}

			//Calculo los dias que pasan con los datos x, b, mes1 y dia, mediante un calculo matematico.
			dias=(b*366)+((x-b)*365)+(dia)+(mes1);
			resto=dias%7;

			/*Los console.log a continuacion me servian para comprobar que el programa realizaba bien los calculos.
				console.log("\nNumero de años que han pasado: %d", x);
				console.log("\nNumero de años bisiestos: %d", b);
				console.log("\nNumero de dias que han pasado: %ld", dias);
				console.log("\nDia de la semana: %ld", resto); */

			if (resto===1)
			console.log("\nLunes, ");
			if (resto===2)
			console.log("\nMartes, ");
			if (resto===3)
			console.log("\nMiercoles, ");
			if (resto===4)
			console.log("\nJueves, ");
			if (resto===5)
			console.log("\nViernes, ");
			if (resto===6)
			console.log("\nSabado, ");
			if (resto===0)
			console.log("\nDomingo, ");
	}


let mese = (mes, dia, mes1, anyo) =>
	{
		//Imprimo el mes que hemos dado en la fecha.

		if (mes===1)
		console.log("Enero");
		if (mes===2)
		console.log("Febrero");
		if (mes===3)
		console.log("Marzo");
		if (mes===4)
		console.log("Abril");
		if (mes===5)
		console.log("Mayo");
		if (mes===6)
		console.log("Junio");
		if (mes===7)
		console.log("Julio");
		if (mes===8)
		console.log("Agosto");
		if (mes===9)
		console.log("Septiembre");
		if (mes===10)
		console.log("Octubre");
		if (mes===11)
		console.log("Noviembre");
		if (mes===12)
		console.log("Diciembre");

        console.log(" de ");

		romano(anyo);


		//Inicio el vector mesi[], y dos contadores,'a' e 'i', que utilizare mas adelante.

		let mesi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((anyo%4===0 && anyo%100!==0) || (anyo%400===0))
		mesi[1]=29;
		else
		mesi[1]=28;

		let i, a;

		//Le resto 1 a mes para que coincida con el vector preparado para ello.
		mes=mes-1;

		/* Calcula la cantidad de dias para el mes dado
			y si febrero tiene 29 o 28 dias, calculando
			si es bisiesto o no para el año dado. */


		/* Repito la operacion de la funcion anyos, letente traerla con
			un let y return, pero el valor no lo pasaba bien,
			aunque los pusiera con "long let" no me pasaba bien el anyo,
			asi que tuve que volver a calcularlo desde dentro de la propia funcion.
			Con esto tambien distinguia el dia de la semana que damos en la fecha y
			el dia 1 de cada mes cuando queria que iniciara el contador 'a' en
			funcion del dia de la semana para poner las tabulaciones. */

	let x=0;
	let b=0;
	let resto=0;
	let resto1=0;
	let dias=0;
	let principal=1;

	for (principal=1; principal<anyo; principal++)
		{
				x++;
			if ((principal%4===0 && principal%100!==0) || (principal%400===0))
					{
					b++;
					}
		}
			dias=(b*366)+((x-b)*365)+(dia)+(mes1);

	//Calculo el dia de la semaba para el dia 1 de dicho mes.

			resto1=(dias-dia)%7;
			if (resto1<0)
				{
				resto1=resto1*-1;
				}

	/*Los console.log a continuacion me servian para comprobar que el programa realizaba bien los calculos.

	console.log("Que resto es %ld", dias);
	console.log("Que dia es %d", dia);
	console.log("\nDia numero %d\n", resto1);



	A continuacion calculo las posiciones respecto al mes que nos encontramos
	para la correcta posicion de los dias del mes conforme a los dias de la semana.
	*/

	console.log("\n\nLun\tMar\tMie\tJue\tVie\tSab\tDom\n");

	if (resto1===0)
	{
	a=1;
	}
	if (resto1===1)
	{
	console.log("\t");
	a=2;
	}
	if (resto1===2)
	{
	console.log("\t\t");
	a=3;
	}
	if (resto1===3)
	{
	console.log("\t\t\t");
	a=4;
	}
	if (resto1===4)
	{
	console.log("\t\t\t\t");
	a=5;
	}
	if (resto1===5)
	{
	console.log("\t\t\t\t\t");
	a=6;
	}
	if (resto1===6)
	{
	console.log("\t\t\t\t\t\t");
	a=7;
	}            

	/* Con esto imprimo los dias del mes y marco el dia del mes que hemos
	 letroducido en la fecha con un arterisco. */

	for (i=1; i<=mesi[mes]; i++)
	{

		if (dia===i)
			{
			console.log("%d*\t", i);
			}

		if (dia!==i)
			{
			console.log("%d\t", i);
			}

		//Inicia la siguiente linea de dias a partir del domingo.

		if (a%7===0)
			{
			console.log("\n");
			}
			a++;


	}
}

const meses = (mes, anyo) => {
	let mesi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((anyo%4===0 && anyo%100!==0) || (anyo%400===0))
		mesi[1]=29;
		else
		mesi[1]=28;

	let i;
	let days=0;

	/* Calculo los meses que han pasado hasta el mes dado en la fecha
	y sumo los dias de dichos meses en 'days'. */


	for (i=0; i<mes-1; i++)
		{
			days=days+mesi[i];
		}

	//Devuelvo la cantidad de dias calculada citada anteriormente.

	return days;

}


	/* Las siguientes funciones son del programa hecho en el bloque 3 implementada para
		que me escriba en letras el dia que hemos dado en la fecha.
		Con la consecuente limitacion logica de 3x. */

const men20 = (a) =>
	{
		if (a===1)
		console.log("uno");
		if (a===2)
		console.log("dos");
		if (a===3)
		console.log("tres");
		if (a===4)
		console.log("cuatro");
		if (a===5)
		console.log("cinco");
		if (a===6)
		console.log("seis");
		if (a===7)
		console.log("siete");
		if (a===8)
		console.log("ocho");
		if (a===9)
		console.log("nueve");
		if (a===10)
		console.log("diez");
		if (a===11)
		console.log("once");
		if (a===12)
		console.log("doce");
		if (a===13)
		console.log("trece");
		if (a===14)
		console.log("catorce");
		if (a===15)
		console.log("quince");
		if (a===16)
		console.log("dieciseis");
		if (a===17)
		console.log("dieciseite");
		if (a===18)
		console.log("dieciocho");
		if (a===19)
		console.log("diecinueve");
		if (a===20)
		console.log("veinte");
}

const dec = (decenas) =>
	{
		if(decenas===2)
		console.log("veleti");

		if(decenas===3)
		console.log("treinta y ");

	}

const dec2 = (decenas) =>
	{
		if(decenas===3)
		console.log("treinta");

	}

const unid = (unidades) => {
		if (unidades===1)
		console.log("uno");
		if (unidades===2)
		console.log("dos");
		if (unidades===3)
		console.log("tres");
		if (unidades===4)
		console.log("cuatro");
		if (unidades===5)
		console.log("cinco");
		if (unidades===6)
		console.log("seis");
		if (unidades===7)
		console.log("siete");
		if (unidades===8)
		console.log("ocho");
		if (unidades===9)
		console.log("nueve");
}

let dia, mes, anyo, mes1,c;
	let resto1;

	//letroduzco fecha y la valido

	// do
	// 	{
	// 		console.log("letroduce una fecha (dia/mes/año): ");
    //         let dia = parseInt (prompt("Introduce el dia escogido"));
    //         let mes = parseInt (prompt("Introduce el mes escogido"));
    //         let anyo = parseInt (prompt("Introduce el año escogido"));

	// 	}

	// while ((dia<1 || dia>31)||(mes<1 || mes>12)||(anyo<=1 || anyo>=31999));

	//Llamo a las funciones para que haya un orden a la hora de imprimirlo.
    dia=11;
    mes=2;
    anyo=1985;
	mes1=meses(mes, anyo);
	anyos(anyo, dia, mes1);


/* Desgloso los dias en unidades y decenas, esto tambien es parte
	del ejercicio del bloque 3 para enviarlos a las funciones y que
	se escriban correctamente. */

	let unidades;
	let decenas;


	if (dia<=20)
		{
			men20(dia);
		}

	decenas=dia/10;
	unidades=dia%10;

	if (dia>20)
		{
			if (unidades===0)
					dec2(decenas);

			if (unidades!==0)
					{
					decenas=dia/10;
					dec(decenas);

					unidades=dia%10;
					unid(unidades);
				}
		}

	//Forma rapida y sencilla de obtener el 'dia' de 'mes' sin tener que escribirlo en cada uno.

	console.log(" de ");

	mese(mes, dia, mes1, anyo);
	
	// scanf("%d", &c);


return (
    <div>
        hola soy calendar
    </div>
)

}
export default Calendar;
