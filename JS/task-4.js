const credit = 23580;
const pricePerDroid = 3000;
let countDroide = prompt('Сколько дроидов вы хотите купить ?')
let totalPrice;
let message;
let balance;


if (countDroide === null) {
    message = 'Отменено пользователем!'
} else {
    totalPrice = countDroide * pricePerDroid;
    balance = credit - totalPrice;
    if (balance >= 0) {
        message = `Вы купили ${countDroide} дроидов, на счету осталось ${balance} кредитов.`
    } else {
        message = 'Недостаточно средств на счету!'
    }
}

alert (message)