
import React, {useEffect, useState} from 'react';
import './Calendar.css';

const Calendar = () => {
	var arrayDate = [];

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

    const anyos = (anyo, dia, mes1) => {
		let x=0, b=0;
		let principal=1;
		let dias;
		let semana = [];

		for (principal=1; principal<anyo; principal++){
			x++;
			if ((principal%4===0 && principal%100!==0) || (principal%400===0)){
				b++;
			}
		}
		dias=(b*366)+((x-b)*365)+(dia)+(mes1);
		let i=dias%7;
		semana = ["Domingo, ", "Lunes, ", "Martes, ", "Miércoles, ", "Jueves, ", "Viernes", "Sábado"];
		arrayDate = semana[i];
		}
		const men20 = (a) => {
			a=a-1;
			let numwrite = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve", "veinte"]
			arrayDate += numwrite[a];
			

	}
	
	const dec = (decenas) => {
			if(decenas===2)
			arrayDate += "veinti";
			
	
			if(decenas===3)
			arrayDate += "treinta y ";
			
	}
	
	const dec2 = (decenas) => {
			if(decenas===3)
			arrayDate += "treinta";
	}
	
	const unid = (unidades) => {
	
		let arrayNum = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
		unidades=unidades-1;
		
		arrayDate += (arrayNum[unidades]);
	}

	let mese = (mes, dia, mes1, anyo) => {
		let arrayMes = [" de Enero", " de Febrero", " de Marzo", " de Abril", " de Mayo", " de Junio", " de Julio", " de Agosto", " de Septiembre", " de Octubre", " de Noviembre", " de Diciembre"];
		arrayDate += (arrayMes[mes-1]);
		

		let mesi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((anyo%4===0 && anyo%100!==0) || (anyo%400===0)) {
			mesi[1]=29;
		}else{
			mesi[1]=28;
		}

		let i;

		mes=mes-1;

		let x=0;
		let b=0;
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

		resto1=(dias-dia)%7;
		
		if (resto1<0) {
			resto1=resto1*-1;
		}

		let a = [1, 2, 3, 4, 5, 6, 7];
		
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

	for (i=0; i<mes-1; i++)
		{
			days=days+mesi[i];
		}

	// setDatosUser({...datosUser, days: days});
	return days;

}



	let dia, mes, anyo, mes1,c;
	let resto1;

	dia=parseInt(datosUser.dia);
    mes=parseInt(datosUser.mes);
    anyo=parseInt(datosUser.anyo);

	mes1=meses(mes, anyo);
	anyos(anyo, dia, mes1);

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

	mese(mes, dia, mes1, anyo);

	console.log(arrayDate, 'de', anyo)
	
	// scanf("%d", &c);


return (

	<div>
		<input type='number' className='numberBox' name='dia' onChange={updateFormulario} placeholder="dia"></input>
		<input type='number' className='numberBox' name='mes' onChange={updateFormulario} placeholder="mes"></input>
		<input type='number' className='numberBox' name='anyo' onChange={updateFormulario} placeholder="anyo"></input>


		<div className="drawCalendar">
			<div className="dayBox">Lunes</div>
			<div className="dayBox">Martes</div>
			<div className="dayBox">Miércoles</div>
			<div className="dayBox">Jueves</div>
			<div className="dayBox">Viernes</div>
			<div className="dayBox">Sábado</div>
			<div className="dayBox">Domingo</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			<div className="dayBox">Hola</div>
			
		</div>
	</div>
)

}

export default Calendar;
