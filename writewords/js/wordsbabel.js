'use strict';

//Elementos desde el DOM
var welcome = document.getElementById('great'); //Contenido inicial
var content = document.getElementById('content'); // Keyboard
var spnivel = document.getElementById('nivel'); // span de nivel
var wordRow = document.getElementById('word'); // p de la palabra
var counter = document.getElementById('count'); // Contador de palabras
var words = getDictionary(); //Imporado el diccionario desde el html

var countWords = 1;
var rand = 0;
var before = 0;
var level = 0;
var niveles = 6; //Es importante este nivel ya que depende del # de caracteres

/*
	Inicializa el juego y muestra y oculta el saludo y el keyboard
	@var go //True or False para emepezar o terminar
	@var set & val //Recibe valor de 'visible' o ''
*/
function start(go, set, val) {
	welcome.className = set;
	content.className = val;
	if (go) newWordRound();
}

/*
	Selecciona el keyCode de un objeto del DOM
	@var keyCode //Numero de tecla 65 - 90
*/
function getElementByKeyCode(keyCode) {
	return document.querySelector('[data-key="' + keyCode + '"]');
}
/*
	Efecto de animacion al presionar una tecla
	@var keyCode //Numero de tecla 65 - 90
	@object recibe 2 valores de success o fail en solo true
*/
function activate(keyCode) {
	var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (keyCode >= 65 && keyCode <= 90) {

		var el = getElementByKeyCode(keyCode);
		el.classList.add('active');
		if (opts.success) el.classList.add('success');else if (opts.fail) el.classList.add('fail');

		setTimeout(function () {
			deactivate(el);
		}, 500);
	}
}
/*
	Resetea el estilo original del objeto del dom
	@var el //Objeto del dom
*/
function deactivate(el) {
	el.className = 'key';
}
/*
	Retorna una palabra del diccionario aleatoriamente de acuerdo al nivel
	@var level //Objeto del dom
*/
function giveWord(level) {
	before = rand;
	do {
		rand = Math.round(Math.random() * (words.length - 1));
	} while (!(words[rand].length == level) || !words[rand] || before == rand);

	return words[rand];
}
/*
	Funcion principal o motor del juego gestiona todos los procesos
	Imprime alertas y cambia todo el contenido del DOM ademas de 
	hacer funcionar a las demas funciones por medio de un evento keydown
*/
function newWordRound() {

	if (countWords % 5 == 0 && countWords != 0) {
		level++;
		spnivel.textContent = level;
		swal({ title: 'Nivel: ' + level, timer: 1000, button: false });
	}

	if (level == niveles) {
		swal({ title: 'Ganaste...! Nivel: ' + level, text: 'Has terminado con este diccionario <3', icon: 'success' });
	}

	var i = 0;
	var setWord = giveWord(level + 2);

	wordRow.textContent = setWord;
	window.addEventListener('keydown', checkChars);

	function checkChars(e) {

		if (e.keyCode != 13) {
			if (e.key.toLowerCase() == setWord[i]) {
				activate(e.keyCode, { success: true });
				i++;
			} else {
				activate(e.keyCode, { fail: true });
				window.removeEventListener('keydown', checkChars);
				swal("Perdiste :(", "Deseas jugar de nuevo?", "warning", { buttons: true }).then(function (ok) {
					if (ok) {
						countWords = 0;
						level = 0;
						spnivel.textContent = level;
						counter.textContent = countWords;
						newWordRound();
					} else {
						swal("Adios..! <3");
						start(false, '', 'visible');
					}
				});
			}
			if (setWord.length == i) {
				window.removeEventListener('keydown', checkChars);

				counter.textContent = countWords++;
				newWordRound();
			}
		}
	}
}