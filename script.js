// Ex. 3
console.log("____Ex. 3____\nЛюбое значение?");

// Ex. 4
let value1 = 255;
console.log("____Ex. 4____\nПервая переменная: "+ value1);
let value2 = 245;
console.log("Вторая переменная: "+ value2);

// Ex. 5
console.log("____Ex. 5____\nСумма: " + (value1+value2));

// Ex. 6
let str = "ЧтО тАкОе РеГиСтР?????!!!";
console.log("____Ex. 6____\nНижний регистр = " + str.toLowerCase());
console.log("Верхний регистр = " + str.toUpperCase());

// Ex. 7
console.log(`____Ex. 7____\nБазовые операции над ${value1} и ${value2} :`);
console.log("Сложение: "+(value1+value2));
console.log("Вычитание: " + (value1 - value2));
console.log("Умножение: "+(value1*value2));
console.log("Деление: "+(value1/value2));
console.log (`Квадрат: ${value1}^2 = ${Math.pow(value1, 2)} | ${value2}^2 = ${Math.pow(value2, 2)}`)
console.log(`Остаток от деления : ${value1%value2}`);

// Ex.8_1 Функция - a + b - (a/b)
function MyFunc1 (val1, val2)
{
    return (val1 + val2 - (val1/val2));
}
console.log("____Ex. 8 (1)____\n" + MyFunc1(value1, value2));

// Ex.8_2 Функция - Строка + текст
function MyFunc2 (str1)
{
    return (str1[0].toUpperCase() + str1.substring(1).toLowerCase() + ", добро пожаловать на сервер CONSOLE!!");
}
console.log("____Ex. 8 (2)____\n"+MyFunc2("НИКИта"));
