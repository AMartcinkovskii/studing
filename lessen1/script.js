var money = +prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");



var appData = {
    budget: money,
    timeData: time,        
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var expensesPerMonth = +prompt("Введите обязательную статью расходов в этом месяце", ''),
    cost = +prompt("Во сколько обойдется?", ''),
    expensesPerMonth2 = +prompt("Введите обязательную статью расходов в этом месяце", ''),
    cost2 = +prompt("Во сколько обойдется?", '');

appData.expenses.expensesPerMonth = cost;
appData.expenses.expensesPerMonth2 = cost2;

alert (appData.budget / 30);

console.log(appData.expenses);