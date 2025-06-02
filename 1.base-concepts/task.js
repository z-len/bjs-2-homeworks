"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
  
    return arr;
  } else if (d === 0) {
    
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    // Два корня
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

console.log(solveEquation(1, -3, 2));

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процент в месячный
  let monthlyPercent = (percent / 100) / 12;

  // Рассчитываем тело кредита
  let loanBody = amount - contribution;

  // Если платить нечего — сразу 0
  if (loanBody <= 0) {
    return 0;
  }

  // Формула ежемесячного платежа
  let monthlyPayment = loanBody * (
    monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1))
  );

  // Общая сумма выплат
  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}


console.log(calculateTotalMortgage(10, 0, 50000, 12)); 
