
import React, { useEffect, useState } from 'react';
import './Calendar.css';
import { DRAW_CAL, DATE_CAL } from '../../redux/types';
import { connect } from 'react-redux';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';

const Calendar = (props) => {
	var arrayDate = [];

	//HOOK
	const [datosUser, setDatosUser] = useState(
		{
			dia: '16',
			mes: '6',
			mesW: '',
			anyo: '2021',
			semana: [],
			diasMes: '',
			day: '',
			year: '',
			monthy: '',
			arrayDate: '',
			actualDate: ''
		});

	const [errors, setErrors] = useState({
		eDia: '',
		eMes: '',
		eAnyo: ''
	});

	//HANDLER
	const updateFormulario = (e) => {
		setDatosUser({ ...datosUser, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		initiateDate();
		// traductor();
	}, []);

	useEffect(() => {
		// initiateDate();
		// traductor();
	});

	const men20 = (a) => {
		a = a - 1;
		let numwrite = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve", "veinte"]
		arrayDate += numwrite[a];
		// setDatosUser({...datosUser, arrayDate: numwrite[a]});
	}

	const dec = (decenas) => {
		if (decenas === 2)
			arrayDate += "veinti";

		if (decenas === 3)
			arrayDate += "treinta y ";
	}

	const dec2 = (decenas) => {
		if (decenas === 3)
			arrayDate += "treinta";
	}

	const unid = (unidades) => {
		let arrayNum = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
		unidades = unidades - 1;
		arrayDate += (arrayNum[unidades]);
	}

	// Saco los valores de HOOK
	let dia = parseInt(datosUser.dia);
	let mes = parseInt(datosUser.mes);
	let anyo = parseInt(datosUser.anyo);

	let x = 0, b = 0;
	let principal = 1;
	let dias;
	let semana = [];

	for (principal = 1; principal < datosUser.anyo; principal++) {
		x++;
		if ((principal % 4 === 0 && principal % 100 !== 0) || (principal % 400 === 0)) {
			b++;
		}
	}

	let mesi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if ((anyo % 4 === 0 && anyo % 100 !== 0) || (anyo % 400 === 0)) {
		mesi[1] = 29;
	} else {
		mesi[1] = 28;
	}

	let days = 0;

	for (let i = 0; i < mes - 1; i++) {
		days = days + mesi[i];
	}

	let mes1 = days;
	dias = (b * 366) + ((x - b) * 365) + (dia) + (mes1);
	let i = dias % 7 - 1;
	if (i < 0)
		i = 6;

	semana = ["L", "M", "X", "J", "V", "S", "D"];
	let semana2 = ["Lunes ", "Martes ", "Miércoles ", "Jueves ", "Viernes ", "Sábado ", "Domingo "];
	arrayDate = semana2[i];
	dias = (b * 366) + ((x - b) * 365) + (dia) + (mes1);
	let resto1 = (dias - dia) % 7;

	if (resto1 < 0) {
		resto1 = resto1 * -1;
	}

	let a;

	const calendarConsole = () => {
		for (i = 1; i <= mesi[mes - 1]; i++) {
			if (dia === i)
				console.log(i + '*');

			if (dia !== i)
				console.log(i);

			if (a % 7 === 0)
				console.log(" ");
			a++;
		}
	}

	// let calendarConsole2 = calendarConsole();

	let diasMes = [];
	let mesDias = [];
	if (resto1 !== 0) {
		for (let j = 0; j < resto1; j++)
			diasMes.push('');
	}

	for (i = 1; i <= mesi[mes - 1]; i++) {
		diasMes.push(i);
		mesDias.push(i);
	};


	let unidades;
	let decenas;

	if (dia <= 20)
		men20(dia);

	decenas = parseInt(dia / 10);
	unidades = dia % 10;

	if (dia > 20) {
		if (unidades === 0)
			dec2(decenas);

		if (unidades !== 0) {
			decenas = parseInt(dia / 10);
			dec(decenas);

			unidades = dia % 10;
			unid(unidades);
		}
	}
	let arrayMes = [" de Enero", " de Febrero", " de Marzo", " de Abril", " de Mayo", " de Junio", " de Julio", " de Agosto", " de Septiembre", " de Octubre", " de Noviembre", " de Diciembre"];
	let arrayMes2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	arrayDate += (arrayMes[mes - 1]);


	// DRAW IN ROME NUMBERS THE YEAR
	const cifra = (num, c1, c2, c3) => {
		let j, romanoNum = [];

		if (num === 9) {
			romanoNum += (c1, c3);
			console.log(c1, c3);
		} else if (num > 4) {
			romanoNum += (c2);
			console.log(c2);

			for (j = 1; j <= num - 5; j++) {
				romanoNum += (c1);
				console.log(c1);
			}

		} else if (num === 4) {
			romanoNum += (c1, c2);
			console.log(c1, c2);
		} else {
			for (j = 1; j <= num; j++) {
				romanoNum += (c1);
				console.log(c1);
			}
		}
		return romanoNum;
	}

	const romano = (num) => {

		// Separar cada cifra del numero introducido
		let mil = num / 1000;
		let cen = (num % 1000) / 100;
		let dec = (num % 100) / 10;
		let uni = num % 10;
		let romanoNum2 = []
		// Hacer una llamada a la funcion por cada cifra del numero
		romanoNum2.push(cifra(mil, 'M', '', ''));
		romanoNum2.push(cifra(cen, 'C', 'D', 'M'));
		romanoNum2.push(cifra(dec, 'X', 'L', 'C'));
		romanoNum2.push(cifra(uni, 'I', 'V', 'X'));

		console.log(romanoNum2);
	}

	let romanoNum = romano(anyo);

	const selectMonthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	let newDate = new Date();
	let year = newDate.getFullYear();
	let monthy = newDate.getMonth() + 1;
	let day = newDate.getDate();

	const initiateDate = () => {
		const actualDate = {
			// year: newDate.getFullYear(),
			// monthy: newDate.getMonth()+1,
			// day: newDate.getDate(),
			year: anyo,
			day: dia,
			monthy: mes,
			semana: semana2,
			diasMes: diasMes
		}
		// Guardo en Hooks
		setDatosUser({ ...datosUser, actualDate: actualDate });
		// Guardo en RDX
		props.dispatch({ type: DATE_CAL, payload: actualDate });
	}

	const selectAnyo = [year, (year + 1)];

	const saveData = (dia, mes, anyo) => {
		// mes = traductor(datosUser.mesW);
		if (dia !== '') {
			let date = anyo + '-' + mes + '-' + dia;
			// let date= dia+'-'+mes+'-'+anyo;
			let newDate = new Date(date);

			// setDatosUser({...datosUser, date: date});	
			setDatosUser({ ...datosUser, date: date, dia: dia, mes: mes, anyo: anyo, semana: semana2, diasMes: diasMes, day: day, monthy: monthy, year: year });

			let datePicker = {
				date: newDate,
				day: dia,
				month: mes,
				year: anyo,
				// actualDate: datosUser.actualDate,
				diasMes: diasMes,
				semana: semana2
			}
			props.dispatch({ type: DATE_CAL, payload: datePicker });
		} else {
			console.log("Pick correct date")
		}
	}


	return (
		<div className="vistaCalendar">
			<div className="boxCalendar">
				<div className="inputCalendar">

					<form className="form7">
						<select className="input7" type="number" name="mes" onChange={updateFormulario} defaultValue="6" required>
							{selectMonthArray.map((valor, index) => (<option>{valor}</option>))}
						</select>
						<label className="lbl-nombre7">
							<span className="text-nomb7">Month</span>
						</label>
					</form>

					<div>{errors.eAnyo}</div>

					<form className="form8">
						<input type='text' className='input8' name='anyo' onChange={updateFormulario} defaultValue="2021" required></input>
						<label className="lbl-nombre8">
							<span className="text-nomb8">Year</span>
						</label>
					</form>

					<br></br><br></br><br></br>
					<div type='text' className="writeDate" name='writeDate'> {arrayDate}</div><br></br>

				</div>


				<div className="drawCalendar">
					{semana.map((semana, index) => (
						<div className="dayBox" key={index}>
							<p>{semana}</p>
						</div>
					))}
					{diasMes.map((diasMes, index) => (
						<div className="dayBox" id={index} key={index} onClick={() => saveData(diasMes, mes, anyo)}>
							<p>{diasMes}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default connect((state) => ({
	calendar: state.calendar
}))(Calendar);
