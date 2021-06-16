
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
		let arrayNum = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", 	"ocho", "nueve"]
		unidades=unidades-1;
		arrayDate += (arrayNum[unidades]);
	}

	let dia=parseInt(datosUser.dia);
    let mes=parseInt(datosUser.mes);
    let anyo=parseInt(datosUser.anyo);

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
		let mesi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((anyo%4===0 && anyo%100!==0) || (anyo%400===0)) {
			mesi[1]=29;
		}else{
			mesi[1]=28;
		}

		

		let days=0;
	
		for (let i=0; i<mes-1; i++)
			{
				days=days+mesi[i];
			}
		let mes1=days;
		dias=(b*366)+((x-b)*365)+(dia)+(mes1);
		let i=dias%7-1;
		semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
		arrayDate = semana[i];

		let arrayMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		arrayDate += (arrayMes[mes-1]);

		let resto1=0;
		dias=0;
		

		dias=(b*366)+((x-b)*365)+(dia)+(mes1);

		resto1=(dias-dia)%7;
		
		if (resto1<0) {
			resto1=resto1*-1;
		}


		let a = [' ', "\t", "\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t\t\t", "\t\t\t\t\t\t"];


	for (i=1; i<=mesi[mes-1]; i++)
	{
		if (dia===i){
			console.log(i+'*');
		}

		if (dia!==i){
			console.log(i);
		}

		if (a%7===0){
			console.log(" ");
		}
		a++;
	}

	let diasMes=[];
	if (resto1!=0){
		for (let j=0; j<resto1; j++)
		diasMes.push('');
	}
	
	for (i=1; i<=mesi[mes-1]; i++){
		diasMes.push(i);
	};
	
	
	let unidades;
	let decenas;

	if (dia<=20)
		men20(dia);

	decenas=parseInt(dia/10);
	unidades=dia%10;

	if (dia>20){
		if (unidades===0)
			dec2(decenas);

		if (unidades!==0){
			decenas=parseInt(dia/10);
			dec(decenas);

			unidades=dia%10;
			unid(unidades);
		}
	}


	console.log(arrayDate)


return (

	<div>
		<input type='number' className='numberBox' name='dia' onChange={updateFormulario} placeholder="dia"></input>
		<input type='number' className='numberBox' name='mes' onChange={updateFormulario} placeholder="mes"></input>
		<input type='number' className='numberBox' name='anyo' onChange={updateFormulario} placeholder="anyo"></input>


		<div className="drawCalendar">

		{semana.map((semana, index) => (
				<div className="" key={index}>
					<div className="dayBox">
						<p>{semana} </p>
						
					</div>
				</div>
		))}

		{diasMes.map((diasMes, index) => (
			<div className="dayBox" key={index}>
				<div className="texto">
					<p>{diasMes} </p>
				</div>
		</div>
		))}

			
			
		</div>
	</div>
)

}

export default Calendar;
