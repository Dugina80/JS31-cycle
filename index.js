//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
/*const  question = prompt('Enter your age');
const child = "child";
const teenager = "teenager";
const adult = "adult";
const pensioner = "pensioner";
const error = "error";
if (question === 0 || question <= 11) {
    alert (`You is ${child}`);
}
else if (question === 12 || question <= 17) {
    alert (`You is ${teenager}`);
}
else if (question === 18 || question <= 59) {
    alert (`You is ${adult}`);
}

else if (question >=60) {
    alert (`You is ${pensioner}`);
}
else if (question !== NaN) {
    alert (`You is ${error}`);
}


//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const someNumber = +prompt('Enter number');
switch (someNumber) {
    case 1:
        alert (`!`);
        break;
    case 2:
        alert(`@ and " `);
        break;
    case 3:
        alert (`# and №`);
        break;
    case 4:
        alert(`$ and ; `); 
        break;
    case 5:
        alert (`%`);
        break;
    case 6:
        alert(`^ and : `);
        break;
    case 7:
        alert (`& and ?`);
        break;
     case 8:
        alert(`*`);  
        break;
     case 9:
        alert(`(`);
        break;
    case 0:
        alert(`)`);  
        break;   
}*/


//Підрахуй суму всіх чисел в заданому користувачем діапазоні.
/*const minNumber = +prompt('enter the minimum number');
const maxNumber = +prompt('enter the maximum number');
let sum = 0;
for (let index = minNumber; index <= maxNumber; index++) {
    sum += index
}
alert (`the sum of the numbers in the given range will be ${sum}`);*/

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.
const purchaseAmount = +prompt('Enter purchase amount');
const threePercentDiscount = 0.03;
const fivePercentDiscount = 0.05;
const sevenPercentDiscount = 0.07;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    alert (`Your discounted amount ${purchaseAmount -(purchaseAmount*threePercentDiscount)}`);
}
else if (purchaseAmount >= 300 && purchaseAmount <500) {
    alert (`Your discounted amount ${purchaseAmount - (purchaseAmount*fivePercentDiscount)}`);
}
else if (purchaseAmount >= 500) {
    alert (`Your discounted amount ${purchaseAmount - (purchaseAmount*sevenPercentDiscount)}`);
}*/

/*Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

   for (index = 2; index <= 9; index++) {
    console.log(`
    multiplication table ${index}`) 
    for (secondIndex = 1; secondIndex <=10; secondIndex++ ) {
console.log(`${index} * ${secondIndex} = ${index * secondIndex}`)
    }
   }

   Запитай у користувача 2 числа і знайди найбільший спільний дільник.

 let firstNumber = prompt("enter first number");
 let secondNumber = prompt("enter second number");

while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
     firstNumber = firstNumber - secondNumber;
    } else {
      secondNumber = secondNumber - firstNumber;
   }
  }
 alert(`Greatest common denominator ${firstNumber}`);*/
 
