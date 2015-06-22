// --------Вызов функции----------
//При вызове функций ей передается 2 неявных параметра:
//	1. arguments,
//	2. this - контекст функции, т.е. тот объект, к которому функция применяется
//
//Есть 4 метода вызова функций:
//	1. В виде функции
//	2. В виде метода
//	3. В виде конструктора
//	4. С помощью методов apply() и call().
//Методы отличаются тем, что именно становится контекстом функции
	
//---1. Вызов в виде функции---
//function ninja() {};
//ninja();
//
//var samurai = function() {};
//samurai();
//
//На самом деле это тое вызов функции как метода, где контекстом функции неявно становится объект window.

//--2. Вызов в виде метода---
//var o = {};
//o.whatever = function() {};
//o.whatever();

function creep() {return this;} //функция вызывает свой контекст

assert_s(creep() === window, 'Creeping in the window');

var sneak = creep; //ссылка на туже функцию

assert_s(sneak() === window, 'Sneaking in the window');

var ninja1 = {			//в переменной создается объект с ссылкой на функцию
	skulk: creep
};

assert_s(ninja1.skulk() === ninja1, 'The 1st ninja is skulking'); //проверка контекста функции

var ninja2 = {			//вторая переменная с ссылкой на функцию
	skulk: creep
};

assert_s(ninja2.skulk() === ninja2, 'The 2nd ninja is skulking'); //уже другой контекст у функции

//т.о. одну и туже функцию можно присваивать разным объектам и вызывать ее для каждого объекта отдельно

//---3. Вызов в виде консруктора---
//конструктор вызывается с помощью оператора new


function Ninja() {									//определяется конструктор,
	this.skulk = function() {return this;};	//создающий св-во skulk любого 
}															//объекта, становящегося контекстом
															//функции

var ninja_1 = new Ninja();		//создать 2 объекта вызвав конструктор с
var ninja_2 = new Ninja();		//оператором new

//проверка методов сконструированных объектов
assert_s(ninja_1.skulk() === ninja_1, 'The 1st ninja is skulking');
assert_s(ninja_2.skulk() === ninja_2, 'The 2nd ninja is skulking');

//Функции и методы обычно именуются глаголами, обозначающими их назначение, начиная с прописной буквы: doSomething();
//конструкторы обычно именуются существительными, начиная с заглавной буквы: Samurai()

//---4. Вызов с помощью методов apply() и call()---
//С помощью этих методов можно принудительно установить нужый объект в качестве контекста функции

//apply() передает объект и массив значений для аргументов, используется, в основном, если аргументы уже представлены массиовм или их удобнее собрать в массив
//call() передает объект и список значений для аргументов, используется, когда используется  ряд не связанных друг с другом значений, заданных в переменных или литералах

function juggle() {
	var result = 0;
	for (var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}
	this.result = result;	//сохранение результатов в контексте
}

//создание тестируемых объектов
var ninja01 = {};
var ninja02 = {};

juggle.apply(ninja01, [1, 2, 3, 4]);	//применить функцию
juggle.call(ninja02, 5, 6, 7, 8);		//вызвать функцию


//проверка результатов вычисления
assert_s(ninja01.result === 10, 'juggle via apply');
assert_s(ninja02.result === 26, 'juggle via call');

//установка контекста функции
function forEach(list, callback) {				//для каждого эл-та массивы вызывается
	for (var n = 0; n < list.length; n++) {		//функция обратного вызова
		callback.call(list[n], n);		//текущий эл-т массива становится контекстом функции,
												//а индекс итерации передается ф-ции обратного вызова
												//в кач-ве единственного аргумента
	}
}

var weapons = ['shuriken', 'katana', 'nunchucks'];	//массив данных

forEach(
	weapons,
	function(index) {
		assert_s(this == weapons[index],								//проверка, устанавливается ли эл-т
				 'Got the expected value of ' + weapons[index]);//массива в кач-ве контекста ф-ции
	}																						//всякий раз, когда вызывается
);																							//ф-ция обратного вызова