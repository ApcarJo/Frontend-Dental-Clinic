
import React, {useEffect, useState} from 'react';
import './Calendar.css';

const Calendar = () => {

	//HOOK
	const [datosUser,setDatosUser] = useState(
        {
        dia:'16',
        mes:'6',
        anyo:'2021',
        mes1:'',
        mese: '',
		resto1: '',
		decenas: '',
		unidades: '',
		c1: '',
		c2: '',
		c3: '',
		date: '',
		days: '',
		num: ''
    });

	//HANDLER
	const updateFormulario = (e) => {
        setDatosUser({...datosUser, [e.target.name]: e.target.value})
    }

	useEffect (()=>{

	},[]);

	useEffect (()=>{

	});


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

	    // Separar cada cifra del numero introducido
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
		console.log(anyo,dia,mes1, "da valor 0")
		let x=0, b=0;
		let principal=1;
		let dias;
		let resto = [];

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
			let i=dias%7;

			/*Los console.log a continuacion me servian para comprobar que el programa realizaba bien los calculos.
				console.log("\nNumero de años que han pasado: %d", x);
				console.log("\nNumero de años bisiestos: %d", b);
				console.log("\nNumero de dias que han pasado: %ld", dias);
				console.log("\nDia de la semana: %ld", resto); */
			resto = ["Domingo, ", "Lunes, ", "Martes, ", "Miércoles, ", "Jueves, ", "Viernes", "Sábado"];
			console.log(resto[i]);
	}


	let mese = (mes, dia, mes1, anyo) => {
		//Imprimo el mes que hemos dado en la fecha.
		
		let arrayMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		console.log(arrayMes[mes-1], "de");

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

		for (principal=1; principal<anyo; principal++) {
			x++;
			if ((principal%4===0 && principal%100!==0) || (principal%400===0)) {
				b++;
			}
		}
		dias=(b*366)+((x-b)*365)+(dia)+(mes1);

		//Calculo el dia de la semaba para el dia 1 de dicho mes.

		resto1=(dias-dia)%7;
		
		if (resto1<0) {
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

		a = [1, 2, 3, 4, 5, 6, 7];
		
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
			console.log(" ");
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

	// setDatosUser({...datosUser, days: days});

	return days;

}


	/* Las siguientes funciones son del programa hecho en el bloque 3 implementada para
		que me escriba en letras el dia que hemos dado en la fecha.
		Con la consecuente limitacion logica de 3x. */

const men20 = (a) => {
		a=a-1;
		let numwrite = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve", "veinte"]
		console.log(numwrite[a]);
}

const dec = (decenas) =>
	{
		if(decenas===2)
		console.log("veinti");

		if(decenas===3)
		console.log("treinta y ");

	}

const dec2 = (decenas) =>
	{
		if(decenas===3)
		console.log("treinta");

	}

const unid = (unidades) => {

	let arrayNum = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
	unidades=unidades-1;
	console.log(arrayNum[unidades])
	
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
    
	// dia=16;
    // mes=6;
    // anyo=2021;
	

	dia=parseInt(datosUser.dia);
    mes=parseInt(datosUser.mes);
    anyo=parseInt(datosUser.anyo);
	// console.log(datosUser.dia, datosUser.mes, datosUser.anyo, "con datosUser");

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

	decenas=parseInt(dia/10);
	unidades=dia%10;

	if (dia>20)

		{
			if (unidades===0)
					dec2(decenas);

			if (unidades!==0)
					{

					decenas=parseInt(dia/10);
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
		<input type='number' className='numberBox' name='dia' onChange={updateFormulario} placeholder="dia"></input>
		<input type='number' className='numberBox' name='mes' onChange={updateFormulario} placeholder="mes"></input>
		<input type='number' className='numberBox' name='anyo' onChange={updateFormulario} placeholder="anyo"></input>


		<div className="drawCalendar">
			
		</div>
	</div>
)

}
export default Calendar;
