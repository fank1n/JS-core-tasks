// // Задача 1)
let firNum = prompt("Введите первое число");
let secNum = prompt("Введите второе число");

(firNum == +firNum && secNum == +secNum) && (firNum !== "" && firNum !== "0") && (secNum !== "" && secNum !== "0")
  ? console.log(parseInt(firNum, 10).toString(secNum))
  : console.log("Некорректный ввод!");

// Задача 2)
// let firNum = prompt("Введите первое число");
// let secNum;

// if (firNum == +firNum && firNum !== "") {
//   if ((secNum = prompt("Введите второе число")) == +secNum && secNum !== "") {
//     console.log("Ответ: " + (+firNum + +secNum) + " , " + +firNum / +secNum);
//   } else console.log("Некорректный ввод!");
// } else console.log("Некорректный ввод!");
