"use strict";

// ===== num_1 =====
let a = 1,
	b = 1,
	c, d;

// пример 1
c = ++a;
alert(c); // ответ: 2
// т.к. инкремент стоит в префиксной форме, то сначала переменная a увеличивается на 1,
// а только потом присваивается переменной c

// пример 2
d = b++;
alert(d); // ответ: 1
// т.к. инкремент стоит в постфиксной форме, то сначала переменной d присвоится значение переменной b,
// а только потом переменная b увеличется на 1

// пример 3
c = 2 + ++a;
alert(c); // ответ: 5
// т.к. инкремент стоит в префиксной форме, то сначала переменная a увеличивается на 1, (=> a = 3)
// переменная a увеличется на 1, а только потом произойдёт сложение операндов

// пример 4
d = 2 + b++;
alert(d); // ответ: 4
// т.к. инкремент стоит в постфиксной форме, то сначала переменной d присвоится значение переменной b, 
// переменная b увеличется на 1, а только потом произойдёт сложение операндов

// ===== num_2 =====
a = 2;
let x = 1 + (a *= 2);
// 1. переменная a = 2
// 2. переменная a * 2 => a = 4
// 3. переменная x = 1 + 4 => x = 5

// ===== num_3 =====
a = 2;
b = 5;

if (a > 0 && b > 0) {
	alert(a - b);
} else if (a < 0 && b < 0) {
	alert(a * b);
} else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
	alert(a + b);
}

// ===== num_4 =====
function sum(num1, num2) {
	return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
}

function del(num1, num2) {
	return num1 / num2;
}

function mul(num1, num2) {
	return num1 * num2;
}

sum(5, 5);
sub(5, 3);
del(6, 2);
mul(2, 5);

// ===== num_5 =====
function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "sum":
			return sum(arg1, arg2);
		case "sub":
			return sub(arg1, arg2);
		case "del":
			return del(arg1, arg2);
		case "mul":
			return mul(arg1, arg2)
	}
}

let argPolz1 = +prompt('Введите первое число');
let argPolz2 = +prompt('Введите второе число');
let answer = prompt('Введите операцию');
alert(mathOperation(argPolz1, argPolz2, answer));

// ===== num_6 =====
let endWritePrice;
let price = prompt('Введите количество денег');

function sortPrice(countPrice) {
	let lastCharPrice = countPrice.charAt(countPrice.length - 1);
	switch (lastCharPrice) {
		case "0":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			return endWritePrice = 'ей';
		case "1":
			return endWritePrice = 'ь';
		case "2":
		case "3":
		case "4":
			return endWritePrice = 'я';
		default:
			alert('Введите число');
	}
}

sortPrice(price);
alert(`Ваша сумма в ${price} рубл${endWritePrice} успешно зачислена.`);